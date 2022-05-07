import { useRouter } from "next/router";
import React from "react";
import useSWR, { SWRConfig } from "swr";
import Post from "../../lib/blog/Post";
import fetcher from "../../lib/utils/fetcher";
import { getPosts } from "../api/posts";
import { getFullPost } from "../api/posts/[id]";

const existingPages = ["engineering-leads-podcasts"];

const Article = () => {
  const router = useRouter();

  const { data: posts, error: postsError } = useSWR(`/api/posts`, fetcher);
  const { data: post, error } = useSWR(
    `/api/posts/${router.query.id}`,
    fetcher
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
  const posts = await getPosts();
  const post = await getFullPost(posts, params.id);

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
  const posts = await getPosts();

  return {
    paths: posts
      .filter(({ slug }) => !existingPages.includes(slug))
      .map(({ slug }) => ({ params: { id: slug } })),
    fallback: false,
  };
};

export default BlogPost;
