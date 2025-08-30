import React, { useState, useRef, useEffect } from "react";

interface AudioPlayerProps {
  src: string;
}

const BAR_COUNT = 330;
const BG_COLOR = "#f6f6f6";
const BAR_COLOR = "#f474ff";
const INACTIVE_COLOR = "#6236ff";

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

    // High-frequency time updates using requestAnimationFrame
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

    // Try to get duration immediately if already loaded
    if (audio.readyState >= 1) {
      if (audio.duration && audio.duration !== Infinity) {
        setDuration(audio.duration);
      }
    }

    // Start high-frequency updates
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

  // Analyze audio and generate waveform data
  useEffect(() => {
    const analyzeAudio = async () => {
      try {
        const response = await fetch(src);
        const arrayBuffer = await response.arrayBuffer();
        const audioContext = new (window.AudioContext ||
          (window as any).webkitAudioContext)();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        // Get duration from audio buffer
        const audioDuration = audioBuffer.duration;
        if (audioDuration && audioDuration !== Infinity) {
          setDuration(audioDuration);
        }

        const channelData = audioBuffer.getChannelData(0); // Get first channel
        const samples = channelData.length;
        const blockSize = Math.floor(samples / BAR_COUNT); // Increased to BAR_COUNT data points
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
        // Fallback to test data
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

    const drawWaveform = () => {
      // Clear canvas and fill with dark background
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      if (waveformData.length > 0) {
        let maxAmplitude = Math.max(...waveformData);
        if (maxAmplitude === 0) maxAmplitude = 1;

        // Calculate progress point
        const progressIndex = Math.floor(
          duration > 0 ? (currentTime / duration) * waveformData.length : 0
        );

        // Draw clean, elegant waveform bars
        const barWidth = width / waveformData.length;
        const barSpacing = 2;
        const actualBarWidth = Math.max(1, barWidth - barSpacing);

        // Draw all bars first (inactive)
        for (let i = 0; i < waveformData.length; i++) {
          const x = i * barWidth + barSpacing / 2;
          const barHeight = Math.max(
            3,
            (waveformData[i] / maxAmplitude) * (height - 20)
          );
          const y = centerY - barHeight / 2;

          // Draw inactive bars with gradient fade
          const gradient = ctx.createLinearGradient(x, y, x, y + barHeight);
          gradient.addColorStop(0, INACTIVE_COLOR + "55"); // Transparent at top
          gradient.addColorStop(0.2, INACTIVE_COLOR + "ff"); // Fade in
          gradient.addColorStop(0.8, INACTIVE_COLOR + "ff"); // Solid in middle
          gradient.addColorStop(1, INACTIVE_COLOR + "55"); // Transparent at bottom

          ctx.fillStyle = gradient;
          ctx.fillRect(x, y, actualBarWidth, barHeight);
        }

        // Draw active bars (played portion)
        if (progressIndex > 0) {
          for (let i = 0; i < progressIndex; i++) {
            const x = i * barWidth + barSpacing / 2;
            const barHeight = Math.max(
              3,
              (waveformData[i] / maxAmplitude) * (height - 20)
            );
            const y = centerY - barHeight / 2;

            // Draw active bars with gradient fade
            const gradient = ctx.createLinearGradient(x, y, x, y + barHeight);
            gradient.addColorStop(0, BAR_COLOR + "00"); // Transparent at top
            gradient.addColorStop(0.2, BAR_COLOR + "ff"); // Fade in
            gradient.addColorStop(0.8, BAR_COLOR + "ff"); // Solid in middle
            gradient.addColorStop(1, BAR_COLOR + "00"); // Transparent at bottom

            ctx.fillStyle = gradient;
            ctx.fillRect(x, y, actualBarWidth, barHeight);
          }
        }
      }
    };

    // Initial draw
    drawWaveform();

    // Set up animation loop for smooth progress updates
    let animationId: number;
    const animate = () => {
      drawWaveform();
      // Only continue animating if playing or if we need to show progress updates
      if (isPlaying || duration > 0) {
        animationId = requestAnimationFrame(animate);
      }
    };

    // Start animation loop
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
      // Try to get duration before playing
      if (audio.duration && audio.duration !== Infinity) {
        setDuration(audio.duration);
      }

      audio
        .play()
        .then(() => {
          // Check duration again after play starts
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

  return (
    <div className="audio-player">
      <div style={{ flex: 1, cursor: "pointer" }} onClick={togglePlay}>
        <canvas
          ref={canvasRef}
          width={992}
          height={120}
          style={{ width: "100%", maxWidth: "100%", height: "120px" }}
        />
      </div>

      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
};

export default AudioPlayer;
