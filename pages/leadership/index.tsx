import React, { FunctionComponent } from "react";
import { POSTS_LEADERSHIP_DIR, getPosts } from "../api/posts";
import List from "../../lib/category/List";

type Props = {
  posts: any[];
};

const Blog: FunctionComponent<Props> = ({ posts }) => {
  return (
    <List
      title="Engineering Leadership"
      posts={posts}
      category={{ name: "Engineering Leadership", link: "/leadership" }}
      baseUrl="/leadership"
    />
  );
};

export const getServerSideProps = async ({ query }) => {
  const posts = await getPosts(!!query.preview, POSTS_LEADERSHIP_DIR);

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
