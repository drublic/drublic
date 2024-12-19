import { POSTS_DIR, getDate, getPosts } from "./api/posts";

const template = (content: string, lastBuildDate: Date) =>
  `
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Hans Reinl – Engineering Management &amp; Software Architecture - drublic, Hans Christian Reinl, Cologne</title>
  <link href="https://www.hansreinl.de/blog/"/>
  <link href="https://www.hansreinl.de/feed/" rel="self" />
  <updated>${lastBuildDate?.toISOString()}</updated>
  <id>https://www.hansreinl.de/blog/</id>

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
  <id>https://www.hansreinl.de/blog/${slug}</id>
  <title>${title.replace(
    /[\u00A0-\u9999<>\&]/g,
    (i) => "&#" + i.charCodeAt(0) + ";"
  )}</title>
  <link href="https://www.hansreinl.de/blog/${slug}" />
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

  const posts: any[] = await getPosts(false, POSTS_DIR);

  const feed = template(renderPosts(posts), getDate(posts[0].date));

  res.setHeader("Content-Type", "text/xml");
  res.write(feed);
  res.end();

  return {
    props: {},
  };
};

export default Feed;
