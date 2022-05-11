import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import ArticleTeaser from "./ArticleTeaser";
import ArticleTeaserSmall from "./ArticleTeaserSmall";

const IndexArticles = ({ posts }) => {
  const { data: wdPosts, error: wdPostsError } = useSWR(
    "/api/wd-posts",
    fetcher
  );

  return (
    <section className="container oss" id="oss">
      <h2>From the Blog</h2>

      {posts?.slice(0, 1).map(({ title, slug, date, abstract, tags }) => (
        <ArticleTeaser
          key={slug}
          title={title}
          date={date}
          slug={slug}
          abstract={abstract}
          tags={tags}
          variant="small"
        />
      ))}

      <ul className="posts__list posts__list--no-divider posts__list--no-top">
        {posts?.slice(1, 7).map(({ title, date, slug }) => (
          <ArticleTeaserSmall
            key={slug}
            title={title}
            date={date}
            slug={slug}
          />
        ))}
      </ul>

      <p className="text--centered text--padded">
        <Link href="/blog/">
          <a className="button">Read more on my Blog</a>
        </Link>
      </p>

      <h2>
        <span className="oss--wd-logo">
          <Image
            src="/img/wd.svg"
            alt="Working Draft Logo"
            width={64}
            height={64}
          />
        </span>
        Working Draft Podcast
      </h2>

      <p>Listen to the latest episode of the Working Draft podcast.</p>

      <iframe
        src="https://open.spotify.com/embed/show/78iH7cIFzu1ejoB6aQUsIh?utm_source=generator&amp;theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className="section--topped"
      ></iframe>

      <ul className="posts__list posts__list--no-divider section--topped">
        {wdPosts?.map(({ title, url, date }) => (
          <ArticleTeaserSmall
            key={url}
            title={title}
            url={url}
            date={date}
            description={undefined}
          />
        ))}

        <ArticleTeaserSmall
          title="and more…"
          url="https://workingdraft.de/"
          description=""
        />
      </ul>

      <p className="text--centered text--padded">
        <Link href="/podcasting">
          <a className="button">More about my Podcasting</a>
        </Link>
      </p>
    </section>
  );
};

export default IndexArticles;
