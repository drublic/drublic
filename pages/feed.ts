import fs from "fs";
import path from "path";
import { getPosts } from "./api/posts";

const template = (content: string, lastBuildDate: Date) => `
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>drublic – Software Architecture - Hans Christian Reinl, Cologne</title>
  <link href="https://drublic.de/blog/"/>
  <atom:link href="https://drublic.de/feed" rel="self" type="application/rss+xml"/>
  <language>en</language>
  <lastBuildDate>${lastBuildDate.toUTCString()}</lastBuildDate>
  <author>
    <name>Hans Christian Reinl</name>
    <email>info@drublic.de</email>
  </author>

  ${content}
  </channel>
</rss>
`;

const renderPosts = (posts: any[]) =>
  posts
    .map(
      ({ title, slug, date, abstract }) => `
<item>
  <guid>https://drublic.de/blog/${slug}/</guid>
  <title>${title}</title>
  <link>https://drublic.de/blog/${slug}/</link>
  <description><![CDATA[${abstract}]]></description>
  <pubDate>${new Date(date).toUTCString()}</pubDate>
</item>
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

  const feed = template(renderPosts(posts), new Date(posts[0].date));

  const filePath = path.join(__dirname, "../public/feed.xml");
  fs.writeFileSync("./public/feed.xml", feed);

  return {
    redirect: {
      destination: "/feed.xml",
      permanent: false,
    },
  };
};

export default Feed;
