import { format } from "date-fns";
import type { NextApiRequest, NextApiResponse } from "next";
const Parser = require("rss-parser");

export type WdPost = {
  title: string;
  url: string;
  date?: string;
  duration?: string;
  description?: string;
};

const FEED_URL = "https://workingdraft.de/feed/";
/** In-memory cache lifetime per server instance. */
const CACHE_TTL_MS = 60 * 60 * 1000;

const stripHtml = (value = "") =>
  value
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const truncate = (value = "", max = 140) => {
  if (value.length <= max) return value;
  const clipped = value.slice(0, max - 1);
  const lastSpace = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, lastSpace > 80 ? lastSpace : max - 1).trim()}…`;
};

const normalizeTitle = (value = "") => value.replace(/\s+/g, " ").trim();

export const getWdPosts = async (): Promise<WdPost[]> => {
  const parser = new Parser({
    timeout: 8000,
    customFields: {
      item: [["itunes:duration", "duration"]],
    },
  });

  try {
    const feed: any = await parser.parseURL(FEED_URL);

    return feed.items.map((item: any) => {
      const rawDescription =
        item.contentSnippet ||
        item.itunes?.subtitle ||
        item.description ||
        item.content ||
        "";

      return {
        title: normalizeTitle(item.title),
        url: item.link,
        date: format(new Date(item.isoDate), "dd.MM.yyyy"),
        duration: item.duration || item.itunes?.duration || null,
        description: truncate(stripHtml(rawDescription)),
      };
    });
  } catch (error) {
    console.error("cannot load Working Draft feed", error);
    return [];
  }
};

let cache: { posts: WdPost[]; fetchedAt: number } | null = null;

/** Feed with a one-hour in-memory cache; a failed refresh keeps stale data. */
export const getCachedWdPosts = async (): Promise<WdPost[]> => {
  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
    return cache.posts;
  }

  const posts = await getWdPosts();
  if (posts.length > 0 || !cache) {
    cache = { posts, fetchedAt: Date.now() };
  }
  return cache.posts;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = await getCachedWdPosts();
  const limit = Math.max(1, parseInt(String(req.query.limit ?? 5), 10) || 5);

  // CDN caches for an hour and serves stale for a day while revalidating.
  res.setHeader(
    "Cache-Control",
    posts.length
      ? "public, s-maxage=3600, stale-while-revalidate=86400"
      : "no-store"
  );
  res.status(200).json(posts.slice(0, limit));
}
