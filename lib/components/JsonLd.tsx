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

export const PERSON_SAME_AS = [
  "https://www.linkedin.com/in/hansreinl/",
  "https://github.com/drublic",
  "https://nplusone.app/",
  "https://workingdraft.de/",
  "https://twitter.com/drublic",
] as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://hansreinl.de/#person",
  name: "Hans Christian Reinl",
  alternateName: "Hans Reinl",
  url: "https://hansreinl.de/",
  email: "hi@hansreinl.de",
  image: "https://hansreinl.de/img/me.jpg",
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
  "@id": "https://hansreinl.de/#website",
  name: "Hans Reinl",
  alternateName: "hansreinl.de",
  url: "https://hansreinl.de/",
  description:
    "Personal website of Hans Christian Reinl — AI-Native Systems Architect & Engineering Advisor. Writing on AI, leadership, and engineering.",
  publisher: { "@id": "https://hansreinl.de/#person" },
  author: { "@id": "https://hansreinl.de/#person" },
  inLanguage: "en",
};
