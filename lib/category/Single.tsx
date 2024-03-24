import { useRouter } from "next/router";
import React, { FC } from "react";
import useSWR, { SWRConfig } from "swr";
import Post from "../../lib/blog/Post";
import fetcher from "../../lib/utils/fetcher";

type Props = {
  category: { name: string; slug: string; folder: string };
};

const Article: FC<Props> = ({ category }) => {
  const router = useRouter();

  const hasPreview = !!router.query.preview;
  const { data: posts, error: postsError } = useSWR(
    `/api/posts?folder=${category.folder}${hasPreview ? "&preview=true" : ""}`,
    fetcher as any
  );
  const { data: post, error } = useSWR(
    `/api/posts/${router.query.id}?folder=${category.folder}${
      hasPreview ? "&preview=true" : ""
    }`,
    fetcher as any
  );

  if (error) {
    console.error(error);
  }

  if (!router.query.id) {
    return null;
  }

  if (!post || !post.entry) {
    return null;
  }

  return (
    <Post post={post} posts={posts} category={category}>
      <div dangerouslySetInnerHTML={{ __html: post.entry }}></div>
    </Post>
  );
};

const Single: FC<{ fallback?: any } & Props> = ({ fallback, ...props }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Article {...props} />
    </SWRConfig>
  );
};

export default Single;
