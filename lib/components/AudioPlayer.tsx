import React, { useState, useRef, useEffect } from "react";

interface AudioPlayerProps {
  src: string;
}

const BAR_COUNT = 280;
const CANVAS_WIDTH = 992;
const CANVAS_HEIGHT = 140;

const ACTIVE_START = "#6236ff";
const ACTIVE_END = "#f474ff";
const INACTIVE_COLOR = "rgba(98, 54, 255, 0.2)";

function lerpColor(a: string, b: string, t: number): string {
  const parse = (hex: string) => [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
  const [r1, g1, b1] = parse(a);
  const [r2, g2, b2] = parse(b);
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const bl = Math.round(b1 + (b2 - b1) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [waveformData, setWaveformData] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateDuration = () => {
      setDuration(audio.duration);
    };
    const handleEnded = () => setIsPlaying(false);
    const handleCanPlay = () => {
      if (audio.duration && audio.duration !== Infinity) {
        setDuration(audio.duration);
      }
    };
    const handleLoadedData = () => {
      if (audio.duration && audio.duration !== Infinity) {
        setDuration(audio.duration);
      }
    };

    let animationId: number;
    const updateTime = () => {
      if (audio.currentTime !== currentTime) {
        setCurrentTime(audio.currentTime);
      }
      animationId = requestAnimationFrame(updateTime);
    };

    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("loadeddata", handleLoadedData);
    audio.addEventListener("ended", handleEnded);

    if (audio.readyState >= 1) {
      if (audio.duration && audio.duration !== Infinity) {
        setDuration(audio.duration);
      }
    }

    updateTime();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("loadeddata", handleLoadedData);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTime]);

  useEffect(() => {
    const analyzeAudio = async () => {
      try {
        const response = await fetch(src);
        const arrayBuffer = await response.arrayBuffer();
        const audioContext = new (window.AudioContext ||
          (window as any).webkitAudioContext)();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        const audioDuration = audioBuffer.duration;
        if (audioDuration && audioDuration !== Infinity) {
          setDuration(audioDuration);
        }

        const channelData = audioBuffer.getChannelData(0);
        const samples = channelData.length;
        const blockSize = Math.floor(samples / BAR_COUNT);
        const filteredData = [];

        for (let i = 0; i < BAR_COUNT; i++) {
          const blockStart = blockSize * i;
          let sum = 0;
          for (let j = 0; j < blockSize && blockStart + j < samples; j++) {
            sum = sum + Math.abs(channelData[blockStart + j]);
          }
          filteredData.push(sum / blockSize);
        }

        setWaveformData(filteredData);
      } catch (error) {
        console.error("Error analyzing audio:", error);
        const testData = Array.from(
          { length: BAR_COUNT },
          () => Math.random() * 0.5 + 0.1
        );
        setWaveformData(testData);
      }
    };

    if (src) {
      analyzeAudio();
    }
  }, [src]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = CANVAS_WIDTH * dpr;
    canvas.height = CANVAS_HEIGHT * dpr;
    ctx.scale(dpr, dpr);

    const drawWaveform = () => {
      const width = CANVAS_WIDTH;
      const height = CANVAS_HEIGHT;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      if (waveformData.length === 0) return;

      let maxAmplitude = Math.max(...waveformData);
      if (maxAmplitude === 0) maxAmplitude = 1;

      const progress =
        duration > 0 ? (currentTime / duration) * waveformData.length : 0;
      const progressIndex = Math.floor(progress);

      const barWidth = width / waveformData.length;
      const barSpacing = 2.5;
      const actualBarWidth = Math.max(1.5, barWidth - barSpacing);
      const radius = actualBarWidth / 2;
      const verticalPadding = 24;
      const maxBarHeight = height - verticalPadding;

      for (let i = 0; i < waveformData.length; i++) {
        const x = i * barWidth + barSpacing / 2;
        const normalized = waveformData[i] / maxAmplitude;
        const barHeight = Math.max(4, normalized * maxBarHeight);
        const y = centerY - barHeight / 2;
        const isActive = i < progressIndex;
        const isPlayhead = i === progressIndex && isPlaying;

        if (isActive) {
          const t = i / waveformData.length;
          ctx.fillStyle = lerpColor(ACTIVE_START, ACTIVE_END, t);
        } else if (isPlayhead) {
          ctx.fillStyle = ACTIVE_END;
        } else {
          ctx.fillStyle = INACTIVE_COLOR;
        }

        ctx.beginPath();
        ctx.roundRect(x, y, actualBarWidth, barHeight, radius);
        ctx.fill();
      }

      if (progressIndex > 0 && duration > 0) {
        const playheadX = progress * barWidth;
        ctx.save();
        ctx.shadowColor = ACTIVE_END;
        ctx.shadowBlur = 8;
        ctx.strokeStyle = ACTIVE_END;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.moveTo(playheadX, verticalPadding / 2);
        ctx.lineTo(playheadX, height - verticalPadding / 2);
        ctx.stroke();
        ctx.restore();
      }
    };

    drawWaveform();

    let animationId: number;
    const animate = () => {
      drawWaveform();
      if (isPlaying || duration > 0) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [currentTime, duration, waveformData, isPlaying]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      if (audio.duration && audio.duration !== Infinity) {
        setDuration(audio.duration);
      }

      audio
        .play()
        .then(() => {
          setTimeout(() => {
            if (audio.duration && audio.duration !== Infinity) {
              setDuration(audio.duration);
            }
          }, 100);
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
    }
    setIsPlaying(!isPlaying);
  };

  const label = isPlaying ? "Pause" : "Listen";
  const ariaLabel = isPlaying
    ? "Pause audio greeting"
    : "Play audio greeting";

  return (
    <div className="audio-player">
      <div
        className="audio-player__wave"
        onClick={togglePlay}
        aria-hidden="true"
      >
        <canvas ref={canvasRef} className="audio-player__canvas" />
      </div>

      <button
        type="button"
        className="audio-player__play"
        onClick={togglePlay}
        aria-pressed={isPlaying}
        aria-label={ariaLabel}
      >
        <span className="audio-player__play-icon" aria-hidden="true">
          {isPlaying ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86a1 1 0 0 0-1.5.86z" />
            </svg>
          )}
        </span>
        <span className="audio-player__play-label">{label}</span>
      </button>

      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
};

export default AudioPlayer;
