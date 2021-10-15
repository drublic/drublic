import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import useSWR from "swr";
import Post from "../../lib/blog/post";
import fetcher from "../../lib/utils/fetcher";

const BlogPost = () => {
  const router = useRouter();

  const { data: posts, error: postsError } = useSWR("/api/posts", fetcher);
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

export default BlogPost;
