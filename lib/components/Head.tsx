import React from "react";
import NextHead from "next/head";

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet="utf-8" />

    <title>{title}</title>

    <link rel="dns-prefetch" href="//ajax.googleapis.com/" />
    <link rel="dns-prefetch" href="//fonts.googleapis.com/" />
    <link rel="dns-prefetch" href="//fonts.gstatic.com/" />
    <link rel="dns-prefetch" href="//www.google-analytics.com/" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="crossorigin"
    />

    <meta name="description" content={description} />

    <link
      rel="alternate"
      type="application/rss+xml"
      title="drublic Blog"
      href="/feed"
    />

    <meta property="twitter:domain" content="drublic.de" />
    <meta property="twitter:url" content="https://drublic.de/" />
    <meta name="twitter:site" content="@drublic" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:image" content="https://drublic.de/img/logo.png" />

    <meta property="og:url" content="https://drublic.de/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="https://drublic.de/img/logo.png" />

    <link type="text/plain" rel="author" href="/humans.txt" />
    <meta name="author" content="Hans Christian Reinl" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta name="application-name" content="drublic" />
    <meta name="theme-color" content="#316eae" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="shortcut icon" href="/favicon.png" />

    <link
      rel="index"
      href="/"
      title="drublic - State of the Art Webdesign - HTML, CSS, JavaScript - Hans Christian Reinl"
    />
  </NextHead>
);

export default Head;
