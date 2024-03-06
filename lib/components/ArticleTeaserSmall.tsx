import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";
type Props = {
  baseUrl?: string;
  basePath?: string;
  url?: string;
  slug?: string;
  title: string;
  date?: string;
  description?: string;
  image?: string;
};

const ArticleTeaserSmall: FunctionComponent<Props> = ({
  baseUrl = "",
  basePath = "/blog",
  url,
  slug,
  title,
  date,
  description,
  image,
}) => (
  <li className={image ? "post__item--with-image" : ""}>
    <Link href={url ?? `${baseUrl}${basePath}/${slug}/`}>
      <>
        {image && (
          <figure className="image posts__teaser-image">
            <Image
              src={image}
              alt={`Image for ${title}`}
              width={2000}
              height={855}
            />
          </figure>
        )}

        <span className="posts__teaser-title">{title}</span>

        {date && <time className="posts__date">{date}</time>}

        {description && (
          <span
            className="posts__description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </>
    </Link>
  </li>
);

export default ArticleTeaserSmall;
