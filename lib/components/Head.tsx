import React from "react";
import NextHead from "next/head";
import { usePathname } from "next/navigation";
import { toAbsoluteOgImageUrl } from "../utils/socialImage";
import { SITE_URL } from "./JsonLd";

const DEFAULT_OG_IMAGE = `${SITE_URL}/img/og-default.png`;

const Head = ({
  title,
  description,
  image,
  noIndex = false,
  ogType = "website",
  articlePublishedTime,
  articleAuthor,
}) => {
  const pathname = usePathname() ?? "/";
  // Canonical drops query strings and trailing slashes; www is the primary host.
  const canonicalPath =
    pathname === "/" ? "/" : pathname.replace(/\/+$/, "") || "/";
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const resolvedImage =
    image && String(image).trim()
      ? toAbsoluteOgImageUrl(String(image).trim())
      : undefined;

  return (
    <NextHead>
      <meta charSet="utf-8" />

      <title>{title}</title>

      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, follow" />}

      <link
        rel="alternate"
        type="application/rss+xml"
        title="Hans Reinl Blog"
        href="/feed"
      />

      <meta property="twitter:domain" content="www.hansreinl.de" />
      <meta name="twitter:site" content="@drublic" />
      <meta name="twitter:creator" content="@drublic" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Hans Reinl" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogType === "article" && articlePublishedTime ? (
        <meta
          property="article:published_time"
          content={articlePublishedTime}
        />
      ) : null}
      {ogType === "article" && articleAuthor ? (
        <meta property="article:author" content={articleAuthor} />
      ) : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={resolvedImage ?? DEFAULT_OG_IMAGE} />
      <meta property="og:image" content={resolvedImage ?? DEFAULT_OG_IMAGE} />
      {resolvedImage ? null : (
        <>
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image:alt"
            content="Hans Reinl — AI-Native Systems Architect & Engineering Advisor"
          />
        </>
      )}

      <link type="text/plain" rel="author" href="/humans.txt" />
      <link type="text/plain" href="/llms.txt" title="llms.txt" />
      <link
        type="text/plain"
        href="/.well-known/llms.txt"
        title="llms.txt (well-known)"
      />
      <meta name="author" content="Hans Christian Reinl" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="application-name" content="drublic" />
      <meta name="theme-color" content="#6236ff" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
      <link rel="icon" href="/favicon.png" type="image/png" sizes="130x130" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      <link
        rel="index"
        href="/"
        title="Hans Reinl - AI-Native Systems Architect & Engineering Advisor"
      />

      {noIndex ? null : <link rel="canonical" href={canonicalUrl} />}
    </NextHead>
  );
};

export default Head;
