import fs from "fs";
import { getDate, getPosts } from "./api/posts";

const template = (content: string) =>
  `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${content}
  </urlset>
`.trim();

const renderPosts = (posts: any[]) =>
  posts
    .map(
      ({ slug, date }) => `
  <url>
    <loc>https://drublic.de/blog/${slug}/</loc>
    <lastmod>${getDate(date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
`
    )
    .join("");

const renderPages = () => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://drublic.de",
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
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
        "about",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath.replace(".tsx", "")}`;
    });

  return staticPages
    .map((url) => {
      return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
    })
    .join("");
};

const Sitemap = () => "Feed";

export const getServerSideProps = async (context) => {
  const res = context.res;

  if (!res) {
    return;
  }

  const posts: any[] = await getPosts();

  const feed = template([renderPages(), renderPosts(posts)].join(""));

  res.setHeader("Content-Type", "text/xml");
  res.write(feed);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
