import { useRouter } from "next/router";
import React from "react";
import useSWR, { SWRConfig } from "swr";
import Post from "../../lib/blog/Post";
import fetcher from "../../lib/utils/fetcher";
import { POSTS_DIR, getPosts } from "../api/posts";
import { findPost, getFullPost } from "../api/posts/[id]";

const existingPages = ["engineering-leads-podcasts"];

const Article = () => {
  const router = useRouter();

  const hasPreview = !!router.query.preview;
  const { data: posts, error: postsError } = useSWR(
    `/api/posts${hasPreview ? "?preview=true" : ""}`,
    fetcher as any
  );
  const { data: post, error } = useSWR(
    `/api/posts/${router.query.id}${hasPreview ? "?preview=true" : ""}`,
    fetcher as any
  );

  if (!router.query.id) {
    return null;
  }

  if (!post || !post.entry) {
    return null;
  }

  return (
    <Post post={post} posts={posts}>
      <div dangerouslySetInnerHTML={{ __html: post.entry }}></div>
    </Post>
  );
};

const BlogPost = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Article />
    </SWRConfig>
  );
};

export const getStaticProps = async ({ params }) => {
  const hasPreview = process.env.NODE_ENV === "development";
  const posts = await getPosts(hasPreview, POSTS_DIR);
  const postData = findPost(posts, params.id);
  const post = await getFullPost(postData, POSTS_DIR);

  return {
    props: {
      fallback: {
        [`/api/posts`]: posts,
        [`/api/posts/${params.id}`]: post,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const hasPreview = process.env.NODE_ENV === "development";
  const posts = await getPosts(hasPreview, POSTS_DIR);

  return {
    paths: posts
      .filter(({ slug }) => !existingPages.includes(slug))
      .map(({ slug }) => ({ params: { id: slug } })),
    fallback: false,
  };
};

export default BlogPost;
