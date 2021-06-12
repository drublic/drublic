import React from "react";
import Link from "next/link";

const ArticleTeaser = ({ title, slug, date, abstract }) => (
  <article className="posts__post">
    <header className="posts__post__header">
      <h2 itemProp="title">
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
      </h2>
      <time className="posts__date">{date}</time>
    </header>

    <div dangerouslySetInnerHTML={{ __html: abstract }} />

    <div className="posts__post__readmore clearfix">
      <Link href={`/blog/${slug}`}>
        <a className="button">Read more</a>
      </Link>
    </div>
  </article>
);

export default ArticleTeaser;
