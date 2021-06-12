import React from "react";
import useSWR from "swr";
import ArticleTeaserSmall from "../lib/components/ArticleTeaserSmall";
import ArticleTeaser from "../lib/components/ArticleTeaser";
import BlogMessage from "../lib/components/BlogMessage";
import Layout from "../lib/components/Layout";
import fetcher from "../lib/utils/fetcher";

const Blog = () => {
  const { data: posts, error: postsError } = useSWR("/api/posts", fetcher);

  return (
    <Layout>
      <BlogMessage />

      <main
        id="main"
        className="main container"
        role="main"
        itemScope
        itemType="http://schema.org/Blog"
      >
        {posts?.slice(0, 5).map(({ title, slug, date, abstract }) => (
          <ArticleTeaser
            key={slug}
            title={title}
            date={date}
            slug={slug}
            abstract={abstract}
          />
        ))}

        <ul className="posts__list">
          {posts?.slice(5, -1).map(({ title, slug, date }) => (
            <ArticleTeaserSmall
              key={slug}
              title={title}
              date={date}
              slug={slug}
            />
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default Blog;
