import Link from "next/link";
import React, { FunctionComponent } from "react";
type Props = {
  baseUrl?: string;
  url?: string;
  slug?: string;
  title: string;
  date?: string;
  description?: string;
};

const ArticleTeaserSmall: FunctionComponent<Props> = ({
  baseUrl,
  url,
  slug,
  title,
  date,
  description,
}) => (
  <li>
    <Link href={url ?? `${baseUrl ?? ""}/blog/${slug}/`}>
      <a>
        <span className="posts__teaser-title">{title}</span>

        {date && <time className="posts__date">{date}</time>}

        {description && (
          <span
            className="posts__description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </a>
    </Link>
  </li>
);

export default ArticleTeaserSmall;
