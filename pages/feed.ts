import fs from "fs";
import path from "path";
import { getDate, getPosts } from "./api/posts";

export const PUBLIC_DIR =
  process.env.NODE_ENV === "production"
    ? path.join(__dirname, "public")
    : path.join(__dirname, "../../../public");

const template = (content: string, lastBuildDate: Date) =>
  `
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>drublic - Engineering Management &amp; Software Architecture - Hans Christian Reinl, Cologne</title>
  <link href="https://drublic.de/blog/"/>
  <link href="https://drublic.de/feed/" rel="self" />
  <updated>${lastBuildDate?.toISOString()}</updated>
  <id>https://drublic.de/blog/</id>

  <author>
    <name>Hans Christian Reinl</name>
    <email>info@drublic.de</email>
  </author>

  ${content}
</feed>
`.trim();

const renderPosts = (posts: any[]) =>
  posts
    .map(
      ({ title, slug, date, abstract }) => `
<entry>
  <id>https://drublic.de/blog/${slug}/</id>
  <title>${title.replace(
    /[\u00A0-\u9999<>\&]/g,
    (i) => "&#" + i.charCodeAt(0) + ";"
  )}</title>
  <link href="https://drublic.de/blog/${slug}/" />
  <content type="html">${abstract.replace(
    /[\u00A0-\u9999<>\&]/g,
    (i) => "&#" + i.charCodeAt(0) + ";"
  )}></content>
  <updated>${getDate(date).toISOString()}</updated>
</entry>
`
    )
    .join("");

const Feed = () => "Feed";

export const getServerSideProps = async (context) => {
  const res = context.res;

  if (!res) {
    return;
  }

  const posts: any[] = await getPosts();

  const feed = template(renderPosts(posts), getDate(posts[0].date));

  const filePath = path.join(PUBLIC_DIR, "feed.xml");
  fs.writeFileSync(filePath, feed);

  return {
    redirect: {
      destination: "/feed.xml",
      permanent: false,
    },
  };
};

export default Feed;
