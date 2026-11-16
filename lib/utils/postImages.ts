import fs from "fs";
import path from "path";

// Bundled with Next.js — reads dimensions from the file header only.
const { imageSize } = require("next/dist/compiled/image-size");

// Build-time only: keep the bundler from tracing the whole project.
const PUBLIC_DIR = path.join(/*turbopackIgnore: true*/ process.cwd(), "public");

const sizeCache = new Map<string, { width: number; height: number } | null>();

const readSize = (src: string, fallbackDir?: string) => {
  const key = `${src}|${fallbackDir ?? ""}`;
  if (sizeCache.has(key)) return sizeCache.get(key);

  const clean = decodeURIComponent(src.split(/[?#]/)[0]);
  const candidates = [path.join(/*turbopackIgnore: true*/ PUBLIC_DIR, clean)];
  // Post assets live next to the article and are copied to /public/assets at build.
  if (fallbackDir && clean.startsWith("/assets/")) {
    candidates.push(
      path.join(/*turbopackIgnore: true*/ fallbackDir, clean.slice("/assets/".length))
    );
  }

  let result: { width: number; height: number } | null = null;
  for (const file of candidates) {
    try {
      const { width, height } = imageSize(
        fs.readFileSync(/*turbopackIgnore: true*/ file)
      );
      if (width && height) {
        result = { width, height };
        break;
      }
    } catch {
      // try the next candidate
    }
  }

  sizeCache.set(key, result);
  return result;
};

/**
 * Adds intrinsic width/height (prevents layout shift) plus lazy loading and
 * async decoding to local <img> tags in rendered post HTML. Images that
 * already declare a width are left alone, apart from lazy loading.
 */
export const enhancePostImages = (html: string, postDir?: string): string =>
  html.replace(/<img\b([^>]*?)\s*\/?>/gi, (tag, attrs: string) => {
    let next = attrs;
    const src = attrs.match(/\ssrc=["']([^"']+)["']/i)?.[1];

    if (src?.startsWith("/") && !/\swidth=/i.test(attrs)) {
      const size = readSize(src, postDir);
      if (size) next += ` width="${size.width}" height="${size.height}"`;
    }
    if (!/\sloading=/i.test(next)) next += ` loading="lazy"`;
    if (!/\sdecoding=/i.test(next)) next += ` decoding="async"`;

    return `<img${next} />`;
  });
