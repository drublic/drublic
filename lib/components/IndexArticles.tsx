import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import ArticleTeaser from "./ArticleTeaser";
import ArticleTeaserSmall from "./ArticleTeaserSmall";

const IndexArticles = ({ posts }) => {
  const withImages = posts.slice(1, 7).filter(({ image }) => !!image);
  const teaserLength = withImages.length % 3 === 0 ? 9 : 8;

  return (
    <section className="container">
      <h2>From the Blog</h2>

      {posts
        ?.slice(0, 1)
        .map(({ title, slug, date, abstract, image, tags }) => (
          <ArticleTeaser
            key={slug}
            title={title}
            date={date}
            slug={slug}
            abstract={abstract}
            tags={tags}
            variant="small"
            image={image}
          />
        ))}

      <ul className="posts__list posts__list--no-divider posts__list--no-top">
        {posts?.slice(1, teaserLength).map(({ title, date, slug, image }) => (
          <ArticleTeaserSmall
            key={slug}
            title={title}
            date={date}
            slug={slug}
            image={image}
          />
        ))}
      </ul>

      <p className="text--centered text--padded">
        <Link href="/blog/" className="button">
          Read more on my Blog
        </Link>
      </p>
    </section>
  );
};

export default IndexArticles;
