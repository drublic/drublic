import Blog from "../../../lib/blog/BlogIndex";
import {
  getAllBlogTags,
  getBlogIndexProps,
} from "../../../lib/blog/blogIndexData";

export const getStaticPaths = async () => ({
  paths: (await getAllBlogTags()).map((tag) => ({ params: { tag } })),
  // Unknown tags render on demand and 404 when nothing matches.
  fallback: "blocking" as const,
});

export const getStaticProps = async ({ params }) => {
  const props = await getBlogIndexProps(String(params?.tag ?? ""));

  if (!props) {
    return { notFound: true, revalidate: 3600 };
  }

  return { props };
};

export default Blog;
