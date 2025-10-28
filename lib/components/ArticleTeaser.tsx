import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { getDate } from "../utils/date";

const ArticleTeaser: FunctionComponent<{
  title: string;
  slug: string;
  date: string;
  abstract: string;
  tags?: [];
  image?: string;
  variant?: "default" | "small";
  baseUrl?: string;
}> = ({
  title,
  slug,
  date,
  abstract,
  tags,
  image,
  variant = "default",
  baseUrl = "/blog",
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
          <Link href={`${baseUrl}/${slug}`}>{title}</Link>
        </Headline>

        <time className="posts__date">
          Published on{" "}
          {getDate(date).toLocaleDateString("de-DE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </time>

        {tags && (
          <p>
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`${baseUrl}?tag=${encodeURIComponent(tag).toLowerCase()}`}
                className="tag"
              >
                {tag}
              </Link>
            ))}
          </p>
        )}
      </header>

      {image && (
        <Link href={`${baseUrl}/${slug}`}>
          <figure className="image image--block">
            <Image
              src={image}
              alt={`Title Image: ${title}`}
              width={2000}
              height={855}
            />
          </figure>
        </Link>
      )}

      <div dangerouslySetInnerHTML={{ __html: abstract }} />

      <div className="posts__post__readmore clearfix">
        <Link href={`${baseUrl}/${slug}`} className="button">
          Read this Article
        </Link>
      </div>
    </article>
  );
};

export default ArticleTeaser;
