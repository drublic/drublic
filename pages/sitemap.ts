import fs from "fs";
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
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;

const renderPosts = (posts: any[], basePath = "/blog") =>
  posts
    .map(
      ({ slug, date }) => `
  <url>
    <loc>https://hansreinl.de${basePath}/${slug}</loc>
    <lastmod>${getDate(date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
`
    )
    .join("");

/** Explicit key routes that must always appear (filesystem scan misses dirs / index). */
const KEY_PAGES = [
  { path: "/", priority: "1.0" },
  { path: "/resume", priority: "0.9" },
  { path: "/what-i-want-to-do", priority: "0.9" },
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
  { path: "/llms.txt", priority: "0.5" },
  { path: "/llms-full.txt", priority: "0.5" },
  { path: "/.well-known/llms.txt", priority: "0.5" },
];

const renderKeyPages = () =>
  KEY_PAGES.map(({ path, priority }) =>
    renderUrl(`https://hansreinl.de${path === "/" ? "" : path}`, priority)
  ).join("");

const renderPages = () => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://hansreinl.de",
  }[process.env.NODE_ENV];

  const pagesDir =
    process.env.NODE_ENV === "production" ? "./.next/server/pages" : "./pages";

  const keyPaths = new Set(
    KEY_PAGES.map(({ path }) =>
      path === "/" ? `${baseUrl}` : `${baseUrl}${path}`
    )
  );

  const staticPages = fs
    .readdirSync(pagesDir)
    .filter((staticPage) => {
      return ![
        "__pnl",
        "_app.tsx",
        "_document.tsx",
        "_error.tsx",
        "404.tsx",
        "sitemap.ts",
        "sitemap.xml.ts",
        "feed.ts",
        "feed.xml.ts",
        "api",
        "blog",
        "ai",
        "ai.js",
        "about",
        "sitemap.js",
        "sitemap.xml.js",
        "feed.js",
        "feed.xml.js",
        "index.js",
        "blog.js",
        "_error.js",
        "404.js",
        "404.html",
        "_app.js",
        "_document.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath.replace(".tsx", "").replace(".js", "")}`;
    })
    .filter((url) => !keyPaths.has(url));

  return staticPages
    .map((url) => renderUrl(url, "0.6"))
    .join("");
};

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
      renderPages(),
      renderPosts(posts),
      renderPosts(postsAi, "/ai"),
      renderPosts(postsLeadership, "/leadership"),
    ].join("")
  );

  res.setHeader("Content-Type", "text/xml");
  res.write(feed);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
