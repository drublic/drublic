import { POSTS_DIR, getPosts } from "../../pages/api/posts";
import type { BlogIndexProps } from "./BlogIndex";

const occurrences = (input: string[]) =>
  input.reduce(
    (acc, curr) => {
      return (acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc);
    },
    {} as Record<string, number>,
  );

// Hidden drafts are listed in local development only.
const SHOW_DRAFTS = process.env.NODE_ENV === "development";

export const getAllBlogTags = async (): Promise<string[]> => {
  const posts = await getPosts(SHOW_DRAFTS, POSTS_DIR);
  return Array.from(
    new Set<string>(
      posts.flatMap((post) =>
        (post.tags ?? []).map((t: string) => t.toLowerCase()),
      ),
    ),
  );
};

/** Props for /blog (no tag) and /blog/tag/[tag]; null when the tag has no posts. */
export const getBlogIndexProps = async (
  tag?: string,
): Promise<BlogIndexProps | null> => {
  const posts = await getPosts(SHOW_DRAFTS, POSTS_DIR);
  const wanted = tag?.toLowerCase();
  const matchingPosts = wanted
    ? posts.filter((post) =>
        post?.tags?.some((t: string) => t?.toLowerCase() === wanted),
      )
    : posts;

  if (wanted && matchingPosts.length === 0) {
    return null;
  }

  const matchingTag =
    wanted &&
    matchingPosts[0]?.tags?.find((t: string) => t?.toLowerCase() === wanted);
  const tags = matchingPosts
    .flatMap((post) => (post.tags ? post.tags : []))
    .sort();

  return {
    posts: matchingPosts,
    tag: matchingTag || null,
    tags: occurrences(tags) as any,
  };
};

