import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import React from "react";
import { getDate } from "../utils/date";
import { formatTag, tagHref } from "../utils/tags";
import SectionLabel from "./SectionLabel";

type Post = {
  title: string;
  slug: string;
  abstract?: string;
  image?: string;
  date?: string;
  tags?: string[];
};

type UpdatesArticleListProps = {
  posts: Post[];
  baseUrl?: string;
  startIndex?: number;
  className?: string;
  /** Full Multiverse rows (default) or dense editorial archive */
  variant?: "full" | "compact";
  /** Compact archive label (section-label) */
  label?: string;
  /** Compact archive heading */
  heading?: string;
};

const stripHtml = (value = "") =>
  value
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const formatPostDate = (date?: string) => {
  if (!date) {
    return null;
  }

  return getDate(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const dateTimeAttr = (date?: string) => {
  if (!date) {
    return undefined;
  }

  const parsed = getDate(date);
  if (Number.isNaN(parsed.getTime())) {
    return undefined;
  }

  return parsed.toISOString().slice(0, 10);
};

const UpdatesArticleList = ({
  posts,
  baseUrl = "/blog",
  startIndex = 0,
  className,
  variant = "full",
  label = "Earlier",
  heading = "More from the archive",
}: UpdatesArticleListProps) => {
  if (!posts?.length) {
    return null;
  }

  const isCompact = variant === "compact";

  if (isCompact) {
    return (
      <div className={classNames("updates-archive", className)}>
        <SectionLabel>{label}</SectionLabel>
        <h3 className="updates-archive__heading">{heading}</h3>

        <ul className="updates-archive__list">
          {posts.map(({ title, slug, abstract, image, date, tags }) => {
            const summary = stripHtml(abstract);
            const href = `${baseUrl}/${slug}`;
            const published = formatPostDate(date);
            const theme = tags?.[0];

            return (
              <li key={slug} className="updates-archive__item">
                <Link href={href} className="updates-archive__link">
                  <span
                    className={classNames(
                      "updates-archive__media",
                      !image && "updates-archive__media--empty",
                    )}
                  >
                    {image ? (
                      <Image
                        src={image}
                        alt=""
                        width={160}
                        height={160}
                        className="updates-archive__image"
                      />
                    ) : null}
                  </span>
                  <span className="updates-archive__text">
                    {(published || theme) && (
                      <span className="updates-archive__meta">
                        {published ? (
                          <time dateTime={dateTimeAttr(date)}>{published}</time>
                        ) : null}
                        {theme ? (
                          <span className="updates-archive__theme">
                            {formatTag(theme)}
                          </span>
                        ) : null}
                      </span>
                    )}
                    <span className="updates-archive__title">{title}</span>
                    {summary ? (
                      <span className="updates-archive__dek">{summary}</span>
                    ) : null}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <ul className={classNames("updates__list", className)}>
      {posts.map(({ title, slug, abstract, image, date, tags }, index) => {
        const summary = stripHtml(abstract);
        const href = `${baseUrl}/${slug}`;
        const number = String(startIndex + index + 1).padStart(2, "0");
        const published = formatPostDate(date);
        const themes = (tags ?? []).slice(0, 2);

        return (
          <li key={slug} className="updates__item">
            <article className="updates__card">
              <Link href={href} className="updates__media">
                {image ? (
                  <Image
                    src={image}
                    alt=""
                    width={1618}
                    height={1000}
                    className="updates__image"
                  />
                ) : (
                  <span className="updates__image updates__image--empty" />
                )}
              </Link>

              <div className="updates__body">
                <div className="updates__meta">
                  <p className="updates__index">{number}</p>
                  {published ? (
                    <time
                      className="updates__date"
                      dateTime={dateTimeAttr(date)}
                    >
                      {published}
                    </time>
                  ) : null}
                </div>
                <div className="updates__body-main">
                  <h3 className="updates__title">
                    <Link href={href}>{title}</Link>
                  </h3>
                  {summary ? (
                    <p className="updates__summary">{summary}</p>
                  ) : null}
                  {themes.length > 0 ? (
                    <ul className="updates__themes">
                      {themes.map((theme) => (
                        <li key={theme}>
                          <Link
                            href={tagHref(theme)}
                            className="updates__theme"
                          >
                            {formatTag(theme)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <Link href={href} className="updates__more">
                    Read more
                  </Link>
                </div>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export default UpdatesArticleList;
