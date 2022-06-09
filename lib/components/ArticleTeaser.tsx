import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";

const ArticleTeaser: FunctionComponent<{
  title: string;
  slug: string;
  date: string;
  abstract: string;
  tags?: [];
  image?: string;
  variant?: "default" | "small";
}> = ({ title, slug, date, abstract, tags, image, variant = "default" }) => {
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

        {tags && (
          <p>
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag).toLowerCase()}`}
              >
                <a className="tag">{tag}</a>
              </Link>
            ))}
          </p>
        )}
      </header>

      <div dangerouslySetInnerHTML={{ __html: abstract }} />

      <div className="posts__post__readmore clearfix">
        <Link href={`/blog/${slug}`}>
          <a className="button">Read this Article</a>
        </Link>
      </div>
    </article>
  );
};

export default ArticleTeaser;
