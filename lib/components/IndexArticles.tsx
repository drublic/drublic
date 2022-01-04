import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import ArticleTeaserSmall from "./ArticleTeaserSmall";

const IndexArticles = ({ posts }) => {
  const { data: wdPosts, error: wdPostsError } = useSWR(
    "/api/wd-posts",
    fetcher
  );

  return (
    <section className="container oss" id="oss">
      <h2>Articles</h2>

      <h3>From The Blog</h3>

      <ul className="posts__list posts__list--no-divider posts__list--no-top">
        {posts?.slice(0, 5).map(({ title, date, slug }) => (
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

      <h3>
        <span className="oss--wd-logo">
          <Image
            src="/img/wd.svg"
            alt="Working Draft Logo"
            width={32}
            height={32}
          />
        </span>
        Working Draft Podcast
      </h3>

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

      <h3>On other websites</h3>

      <ul className="posts__list posts__list--no-divider posts__list--no-top">
        <ArticleTeaserSmall
          title="CSS Naming Conventions: Less Rules, more Fun on Medium.com"
          url="https://medium.com/@drublic/css-naming-conventions-less-rules-more-fun-12af220e949b"
          date="19.06.2014"
          description=""
        />

        <ArticleTeaserSmall
          title="A counter statement: Putting the CSS in the head on Medium.com"
          url="https://medium.com/programming-ideas-tutorial-and-experience/f98103d09ce1"
          date="03.02.2014"
          description=""
        />

        <ArticleTeaserSmall
          title="Shared Grunt Configuration for The Nitty Gritty"
          url="https://thenittygritty.co/shared-grunt-configuration"
          date="09.06.2013"
          description=""
        />
      </ul>
    </section>
  );
};

export default IndexArticles;
