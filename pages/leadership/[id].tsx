import React from "react";
import { POSTS_LEADERSHIP_DIR, getPosts } from "../api/posts";
import { findPost, getFullPost } from "../api/posts/[id]";
import Single from "../../lib/category/Single";

const BlogPost = ({ fallback }) => (
  <Single
    fallback={fallback}
    category={{
      name: "Engineering Leadership",
      slug: "/leadership",
      folder: "leadership",
    }}
  />
);

export const getStaticProps = async ({ params }) => {
  const hasPreview = process.env.NODE_ENV === "development";
  const posts = await getPosts(hasPreview, POSTS_LEADERSHIP_DIR);
  const postData = findPost(posts, params.id);
  const post = await getFullPost(postData, POSTS_LEADERSHIP_DIR);

  return {
    props: {
      fallback: {
        [`/api/posts?folder=leadership`]: posts,
        [`/api/posts/${params.id}?folder=leadership`]: post,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const hasPreview = process.env.NODE_ENV === "development";
  const posts = await getPosts(hasPreview, POSTS_LEADERSHIP_DIR);

  return {
    paths: posts.map(({ slug }) => ({ params: { id: slug } })),
    fallback: false,
  };
};

export default BlogPost;
