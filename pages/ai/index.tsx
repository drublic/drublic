import React, { FunctionComponent } from "react";
import { POSTS_AI_DIR, getPosts } from "../api/posts";
import List from "../../lib/category/List";

type Props = {
  posts: any[];
};

const Blog: FunctionComponent<Props> = ({ posts }) => {
  return (
    <List
      title="AI"
      description="Articles by Hans Christian Reinl on AI-native systems, agentic engineering, RAG, MCP, and building LLM-powered products."
      posts={posts}
      category={{ name: "AI", link: "/ai" }}
      baseUrl="/ai"
    />
  );
};

export const getStaticProps = async () => {
  // Hidden drafts are listed in local development only.
  const posts = await getPosts(process.env.NODE_ENV === "development", POSTS_AI_DIR);

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
