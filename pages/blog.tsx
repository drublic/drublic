import React from "react";
import ArticleTeaserSmall from "../lib/components/ArticleTeaserSmall";
import ArticleTeaser from "../lib/components/ArticleTeaser";
import BlogMessage from "../lib/components/BlogMessage";
import Layout from "../lib/components/Layout";
import { getPosts } from "./api/posts";

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <main
        id="main"
        className="main container"
        role="main"
        itemScope
        itemType="http://schema.org/Blog"
      >
        {posts?.slice(0, 1).map(({ title, slug, date, abstract }) => (
          <ArticleTeaser
            key={slug}
            title={title}
            date={date}
            slug={slug}
            abstract={abstract}
          />
        ))}

        <BlogMessage />

        {posts?.slice(1, 5).map(({ title, slug, date, abstract }) => (
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

export const getServerSideProps = async ({ query }) => {
  const posts = await getPosts(!!query.preview);

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
