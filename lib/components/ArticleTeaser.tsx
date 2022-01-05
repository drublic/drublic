import React from "react";
import Link from "next/link";

const ArticleTeaser = ({
  title,
  slug,
  date,
  abstract,
  variant = "default",
}) => {
  const Headline = (props) => {
    if (variant === "small") {
      return <h3 {...props} />;
    }

    return <h2 {...props} />;
  };

  return (
    <article className="posts__post">
      <header
        className={`posts__post__header${
          variant === "small" ? " posts__post__header--small" : ""
        }`}
      >
        <Headline itemProp="title">
          <Link href={`/blog/${slug}`}>
            <a>{title}</a>
          </Link>
        </Headline>

        <time className="posts__date">Published on {date}</time>
      </header>

      <div dangerouslySetInnerHTML={{ __html: abstract }} />

      <div className="posts__post__readmore clearfix">
        <Link href={`/blog/${slug}`}>
          <a className="button">Read more</a>
        </Link>
      </div>
    </article>
  );
};

export default ArticleTeaser;
