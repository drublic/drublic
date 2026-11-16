import React from "react";
import Head from "next/head";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

const JsonLd = ({ data }: JsonLdProps) => (
  <Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  </Head>
);

export default JsonLd;

/** Primary origin — the apex domain 308-redirects here. */
export const SITE_URL = "https://www.hansreinl.de";

export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`}`;

export const PERSON_ID = `${SITE_URL}/#person`;

type Crumb = { name: string; path: string };

/** BreadcrumbList starting at Home. */
export const breadcrumbJsonLd = (crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map(
    (crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })
  ),
});

export const PERSON_SAME_AS = [
  "https://www.linkedin.com/in/hreinl/",
  "https://github.com/drublic",
  "https://nplusone.app/",
  "https://workingdraft.de/",
  "https://twitter.com/drublic",
] as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.hansreinl.de/#person",
  name: "Hans Christian Reinl",
  alternateName: "Hans Reinl",
  url: "https://www.hansreinl.de/",
  email: "hi@hansreinl.de",
  image: "https://www.hansreinl.de/img/me.jpg",
  jobTitle: "AI-Native Systems Architect & Engineering Advisor",
  description:
    "AI-Native Systems Architect & Engineering Advisor based in Cologne, Germany. Founder of N+One, co-host of Working Draft. Helps engineering organizations move from legacy architectures to AI-native products.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cologne",
    addressCountry: "DE",
  },
  sameAs: [...PERSON_SAME_AS],
  knowsAbout: [
    "AI-native systems",
    "Agentic engineering",
    "RAG",
    "Model Context Protocol",
    "Engineering leadership",
    "Next.js",
    "TypeScript",
    "Vercel AI SDK",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.hansreinl.de/#website",
  name: "Hans Reinl",
  alternateName: "hansreinl.de",
  url: "https://www.hansreinl.de/",
  description:
    "Personal website of Hans Christian Reinl, AI-Native Systems Architect & Engineering Advisor. Writing on AI, leadership, and engineering.",
  publisher: { "@id": "https://www.hansreinl.de/#person" },
  author: { "@id": "https://www.hansreinl.de/#person" },
  inLanguage: "en",
};
