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
      description="Writing by Hans Christian Reinl on engineering leadership, team scaling, metrics programs, and organizational design."
      posts={posts}
      category={{ name: "Engineering Leadership", link: "/leadership" }}
      baseUrl="/leadership"
    />
  );
};

export const getStaticProps = async () => {
  // Hidden drafts are listed in local development only.
  const posts = await getPosts(process.env.NODE_ENV === "development", POSTS_LEADERSHIP_DIR);

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
