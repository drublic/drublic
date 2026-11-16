import Blog from "../../lib/blog/BlogIndex";
import { getBlogIndexProps } from "../../lib/blog/blogIndexData";

export const getStaticProps = async () => ({
  props: await getBlogIndexProps(),
});

export default Blog;
