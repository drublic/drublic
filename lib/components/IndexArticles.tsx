import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import useSWR from "swr";
import ArticleTeaserSmall from "./ArticleTeaserSmall";
import fetcher from "../utils/fetcher";

const IndexArticles: FunctionComponent = () => {
  const { data: posts, error: postsError } = useSWR(
    "/api/posts?limit=5",
    fetcher
  );
  const { data: wdPosts, error: wdPostsError } = useSWR(
    "/api/wd-posts",
    fetcher
  );

  return (
    <section className="container oss" id="oss">
      <h2>Articles</h2>

      <h3>From The Blog</h3>

      <ul className="posts__list posts__list--no-divider posts__list--no-top">
        {posts?.map(({ title, url, date, slug }) => (
          <ArticleTeaserSmall title={title} url={url} date={date} />
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

      <ul className="posts__list posts__list--no-divider posts__list--no-top">
        {wdPosts?.map(({ title, url, date }) => (
          <ArticleTeaserSmall
            title={title}
            url={url}
            date={date}
            description={undefined}
          />
        ))}
        <li>
          <ArticleTeaserSmall
            title="and more…"
            url="https://workingdraft.de/"
            description=""
          />
        </li>
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
