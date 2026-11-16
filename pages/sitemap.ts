import { SITE_URL } from "../lib/components/JsonLd";
import {
  POSTS_AI_DIR,
  POSTS_LEADERSHIP_DIR,
  POSTS_DIR,
  getDate,
  getPosts,
} from "./api/posts";

const template = (content: string) =>
  `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${content}
  </urlset>
`.trim();

const renderUrl = (loc: string, priority = "0.6", changefreq = "monthly") => `
  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;

const renderPosts = (posts: any[], basePath = "/blog") =>
  posts
    .map(
      ({ slug, date }) => `
  <url>
    <loc>${SITE_URL}${basePath}/${slug}</loc>
    <lastmod>${getDate(date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
`
    )
    .join("");

/** Every public page. Keep in sync when adding a page under /pages. */
const KEY_PAGES = [
  { path: "/", priority: "1.0" },
  { path: "/resume", priority: "0.9" },
  { path: "/work-with-me", priority: "0.9" },
  { path: "/about/speaking", priority: "0.8" },
  { path: "/about/writings", priority: "0.7" },
  { path: "/podcasting", priority: "0.7" },
  { path: "/blog", priority: "0.8" },
  { path: "/ai", priority: "0.8" },
  { path: "/leadership", priority: "0.8" },
  { path: "/engineering-metrics-program", priority: "0.7" },
  { path: "/info", priority: "0.7" },
  { path: "/portfolio", priority: "0.7" },
  { path: "/legal", priority: "0.3" },
  { path: "/privacy", priority: "0.3" },
];

const renderKeyPages = () =>
  KEY_PAGES.map(({ path, priority }) =>
    renderUrl(`${SITE_URL}${path}`, priority)
  ).join("");

const Sitemap = () => "Feed";

export const getServerSideProps = async (context) => {
  const res = context.res;

  if (!res) {
    return;
  }

  const posts: any[] = await getPosts(false, POSTS_DIR);
  const postsAi: any[] = await getPosts(false, POSTS_AI_DIR);
  const postsLeadership: any[] = await getPosts(false, POSTS_LEADERSHIP_DIR);

  const feed = template(
    [
      renderKeyPages(),
      renderPosts(posts),
      renderPosts(postsAi, "/ai"),
      renderPosts(postsLeadership, "/leadership"),
    ].join("")
  );

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );
  res.write(feed);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
