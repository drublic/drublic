import React, { useEffect, useRef } from "react";

type HeroAtmosphereProps = {
  className?: string;
  /** Homepage hero and story panel share vital (default). */
  intensity?: "vital" | "calm";
};

/**
 * Continuous fluid field — Multiverse-like atmosphere without discrete orbs.
 * Low-res noise is upscaled soft by the browser for a filmed nebula feel.
 */
const HeroAtmosphere = ({
  className = "home-hero__canvas",
  intensity = "vital",
}: HeroAtmosphereProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let running = !reduced.matches;
    let offscreen = false;
    let width = 0;
    let height = 0;

    const vital = intensity === "vital";
    const timeScale = vital ? 0.00026 : 0.00012;
    const frameMs = vital ? 18 : 33; // ~55fps vital, ~30fps calm
    const warpAmp = vital ? 1.85 : 1.35;
    const fieldContrast = vital ? 1.28 : 0.85;
    const biasStrength = vital ? 0.38 : 0.45;
    const toneLift = vital ? 0.24 : 0.18;
    const vignetteAlpha = vital ? 0.84 : 0.55;

    // Tiny internal grid keeps motion soft and cheap.
    const COLS = 72;
    const ROWS = 40;

    const hash = (x: number, y: number) => {
      const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
      return s - Math.floor(s);
    };

    const smoothNoise = (x: number, y: number) => {
      const x0 = Math.floor(x);
      const y0 = Math.floor(y);
      const xf = x - x0;
      const yf = y - y0;
      const u = xf * xf * (3 - 2 * xf);
      const v = yf * yf * (3 - 2 * yf);

      const n00 = hash(x0, y0);
      const n10 = hash(x0 + 1, y0);
      const n01 = hash(x0, y0 + 1);
      const n11 = hash(x0 + 1, y0 + 1);

      const nx0 = n00 * (1 - u) + n10 * u;
      const nx1 = n01 * (1 - u) + n11 * u;
      return nx0 * (1 - v) + nx1 * v;
    };

    const fbm = (x: number, y: number) => {
      let value = 0;
      let amp = 0.5;
      let freq = 1;
      for (let i = 0; i < 3; i += 1) {
        value += amp * smoothNoise(x * freq, y * freq);
        freq *= 2.05;
        amp *= 0.5;
      }
      return value;
    };

    const mix = (a: number, b: number, t: number) => a + (b - a) * t;

    const palette = (t: number): [number, number, number] => {
      // Dark teal → violet → magenta → warm ember; vital holds near-black longer.
      const stops: Array<[number, number, number, number]> = vital
        ? [
            [0, 0, 1, 2],
            [0.28, 1, 10, 14],
            [0.46, 28, 12, 150],
            [0.64, 165, 38, 235],
            [0.82, 255, 82, 36],
            [1, 255, 168, 62],
          ]
        : [
            [0, 8, 14, 18],
            [0.28, 18, 42, 58],
            [0.48, 72, 40, 170],
            [0.68, 150, 70, 210],
            [0.84, 230, 105, 70],
            [1, 255, 150, 90],
          ];

      for (let i = 0; i < stops.length - 1; i += 1) {
        const a = stops[i];
        const b = stops[i + 1];
        if (t >= a[0] && t <= b[0]) {
          const u = (t - a[0]) / (b[0] - a[0]);
          return [mix(a[1], b[1], u), mix(a[2], b[2], u), mix(a[3], b[3], u)];
        }
      }
      return vital ? [0, 1, 2] : [8, 14, 18];
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = COLS;
      canvas.height = ROWS;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const paint = (time: number) => {
      const t = time * timeScale;
      const image = ctx.createImageData(COLS, ROWS);
      const data = image.data;

      for (let y = 0; y < ROWS; y += 1) {
        for (let x = 0; x < COLS; x += 1) {
          const nx = x / COLS;
          const ny = y / ROWS;

          // Domain-warped noise → continuous liquid ridges instead of orbs.
          const warpX = fbm(nx * 1.6 + t * 0.7, ny * 1.4 - t * 0.35) * warpAmp;
          const warpY = fbm(nx * 1.3 - t * 0.45, ny * 1.7 + t * 0.55) * warpAmp;
          const n1 = fbm(nx * 2.2 + warpX + t, ny * 2.0 + warpY - t * 0.6);
          const n2 = fbm(
            nx * 3.1 - warpY * 0.8 - t * 0.4,
            ny * 2.6 + warpX * 0.7 + t * 0.5,
          );
          const field = n1 * 0.72 + n2 * 0.28;

          // Bias brightness toward lower-right like Multiverse hero frames.
          const bias = Math.pow(nx * 0.55 + ny * 0.7, vital ? 1.45 : 1.35);
          let tone = field * fieldContrast + bias * biasStrength - toneLift;
          // Vital: crush midtones so dark pools dominate; ridges stay bright.
          if (vital) {
            tone = Math.pow(Math.min(1, Math.max(0, tone)), 1.28);
          } else {
            tone = Math.min(1, Math.max(0, tone));
          }
          const [r, g, b] = palette(tone);

          const i = (y * COLS + x) * 4;
          data[i] = r;
          data[i + 1] = g;
          data[i + 2] = b;
          data[i + 3] = 255;
        }
      }

      ctx.putImageData(image, 0, 0);

      // Soft vignette for type contrast.
      ctx.globalCompositeOperation = "source-over";
      const vignette = ctx.createRadialGradient(
        COLS * 0.38,
        ROWS * 0.32,
        ROWS * 0.1,
        COLS * 0.45,
        ROWS * 0.5,
        Math.max(COLS, ROWS) * (vital ? 0.7 : 0.85),
      );
      vignette.addColorStop(0, "rgba(1, 2, 3, 0)");
      vignette.addColorStop(1, `rgba(1, 2, 3, ${vignetteAlpha})`);
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, COLS, ROWS);
    };

    let lastPaint = 0;
    const loop = (time: number) => {
      if (time - lastPaint >= frameMs) {
        paint(time);
        lastPaint = time;
      }
      if (running) {
        raf = window.requestAnimationFrame(loop);
      }
    };

    const syncRunning = () => {
      running = !offscreen && !reduced.matches && !document.hidden;
      window.cancelAnimationFrame(raf);
      if (running) {
        raf = window.requestAnimationFrame(loop);
      } else {
        paint(performance.now());
      }
    };

    // Stop painting while the canvas is scrolled out of view.
    const visibility =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver((entries) => {
            offscreen = !entries.some((entry) => entry.isIntersecting);
            syncRunning();
          })
        : null;
    visibility?.observe(canvas);

    resize();
    paint(0);
    syncRunning();

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", syncRunning);
    reduced.addEventListener("change", syncRunning);

    return () => {
      running = false;
      visibility?.disconnect();
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", syncRunning);
      reduced.removeEventListener("change", syncRunning);
    };
  }, [intensity]);

  return <canvas className={className} ref={canvasRef} aria-hidden />;
};

export default HeroAtmosphere;
