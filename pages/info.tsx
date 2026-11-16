import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../lib/components/Layout";
import PageHeader from "../lib/components/PageHeader";
import PageShell from "../lib/components/PageShell";
import JsonLd, { breadcrumbJsonLd } from "../lib/components/JsonLd";
import { BOOKING_URL } from "../lib/components/AdvisoryCta";

const links = [
  {
    label: "Website",
    href: "https://www.hansreinl.de/",
    value: "hansreinl.de",
  },
  { label: "GitHub", href: "https://github.com/drublic", value: "drublic" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hreinl/",
    value: "hreinl",
  },
];

const miscFacts: Array<{ label: string; value: string; href?: string }> = [
  { label: "Location", value: "Cologne, Germany" },
  { label: "Nearest airport", value: "Cologne Bonn Airport (CGN)" },
  { label: "T-shirt size", value: "Large" },
];

const Info = () => (
  <Layout
    title="Press & speaker information"
    description="Press and speaker information about Hans Christian Reinl — AI-Native Systems Architect & Engineering Advisor, based in Cologne, Germany."
  >
    <JsonLd
      data={breadcrumbJsonLd([{ name: "Press & Speaker Kit", path: "/info" }])}
    />
    <main id="content" className="main" role="main">
      <PageShell>
        <PageHeader
          label="Press & speakers"
          title="Press & Speaker Kit"
          lead={
            <p>
              Here is some information about me in case you need it for
              conference programs, podcast intros, or press. Please{" "}
              <a href="mailto:hi@hansreinl.de">let me know</a> if anything
              essential is missing.
            </p>
          }
        />

        <section className="info-section" aria-labelledby="info-bio-heading">
          <h2 id="info-bio-heading" className="info-section__title">
            Biography
          </h2>

          <div className="info-bio-layout">
            <figure className="info-portrait">
              <Image
                className="info-portrait__img"
                src="/img/hans-reinl-portrait.jpg"
                alt="Portrait of Hans Christian Reinl"
                width={1500}
                height={2000}
                sizes="(min-width: 48em) 16rem, 60vw"
                priority
              />
              <figcaption className="info-portrait__caption">
                <a href="/img/hans-reinl-portrait.jpg" download>
                  Download portrait (JPG, 1500 × 2000)
                </a>
              </figcaption>
            </figure>

            <div className="info-bio-grid">
              <article className="info-card">
                <h3 className="info-card__label">Very short</h3>
                <p className="info-card__text">
                  Hans Reinl is an AI-native systems architect and engineering
                  advisor based in Cologne, founder of{" "}
                  <a href="https://nplusone.app/">N+One</a> and co-host of the{" "}
                  <a href="https://workingdraft.de/">Working Draft</a> podcast.
                </p>
              </article>

              <article className="info-card">
                <h3 className="info-card__label">Short</h3>
                <p className="info-card__text">
                  Hans Reinl is an AI-native systems architect and engineering
                  advisor based in Cologne. With more than 15 years of
                  experience building high-scale platforms, he helps engineering
                  organisations move from legacy architectures to production AI
                  products. Formerly VP Engineering at ProSiebenSat.1 (Joyn, 11
                  million monthly active users), he is the founder of{" "}
                  <a href="https://nplusone.app/">N+One</a>, coaches on AI
                  Software Engineering bootcamps, and has co-hosted the{" "}
                  <a href="https://workingdraft.de/">Working Draft</a> podcast
                  since 2011. He works in English and German.
                </p>
              </article>

              <article className="info-card info-card--wide">
                <h3 className="info-card__label">Long</h3>
                <p className="info-card__text">
                  Hans Reinl is an AI-native systems architect and engineering
                  advisor based in Cologne. He has more than 15 years of
                  experience building high-scale platforms, and he helps
                  engineering organisations move from legacy architectures to
                  production AI products. His hands-on work covers agentic
                  engineering, cloud-native systems and modern web stacks. He
                  combines practical implementation with senior engineering
                  leadership.
                </p>
                <p className="info-card__text">
                  From 2021 to 2025 he was Vice President Engineering at
                  ProSiebenSat.1, where he was responsible for the
                  customer-facing applications of the Joyn streaming platform,
                  which serves 11 million monthly active users. He led six
                  engineering teams of 55 people and guided change management
                  and transformation during the Joyn and ProSiebenSat.1 merger.
                  Between October 2023 and February 2026 he was also Fractional
                  CTO at Fiberfone GmbH, where he led technical strategy and an
                  infrastructure handling more than 23 million data points for
                  location-based order management. Earlier roles included
                  Director of Technology &amp; Product for the FYEO podcasting
                  app and several years as a self-employed software architect
                  and engineering manager. Clients in that period included AXA
                  Deutschland, REWE digital and Vaillant Group.
                </p>
                <p className="info-card__text">
                  He is founder of <a href="https://nplusone.app/">N+One</a>, an
                  AI coaching platform for cyclists built on Next.js and the
                  Vercel Edge Network. He also coaches on the AI Software
                  Engineering and Vibe Coding bootcamps run with Digitale Leute
                  School and neuefische, covering RAG pipelines, MCP
                  integrations and guardrails for production systems. He has
                  co-hosted the{" "}
                  <a href="https://workingdraft.de/">Working Draft Podcast</a>{" "}
                  since 2011 and has spoken on agentic engineering, engineering
                  metrics and design systems at events including the t3 CTO
                  Summit and LeadDev Berlin. He works in English and German.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="info-section" aria-labelledby="info-talks-heading">
          <h2 id="info-talks-heading" className="info-section__title">
            Talks
          </h2>
          <p className="info-section__intro">
            Talk titles, abstracts, slides, and recordings — upcoming and past —
            are on the <Link href="/about/speaking">speaking page</Link>. For a
            talk or workshop invitation,{" "}
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              book a meeting
            </a>{" "}
            or email <a href="mailto:hi@hansreinl.de">hi@hansreinl.de</a>.
          </p>
        </section>

        <section className="info-section" aria-labelledby="info-links-heading">
          <h2 id="info-links-heading" className="info-section__title">
            Links
          </h2>

          <dl className="info-dl info-dl--grid">
            {links.map(({ label, href, value }) => (
              <div key={label} className="info-dl__row">
                <dt className="info-dl__term">{label}</dt>
                <dd className="info-dl__desc">
                  <a href={href}>{value}</a>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="info-section" aria-labelledby="info-misc-heading">
          <h2 id="info-misc-heading" className="info-section__title">
            Misc
          </h2>

          <p className="info-section__intro">
            Sometimes you might want to know this stuff, too:
          </p>

          <dl className="info-dl">
            {miscFacts.map(({ label, value, href }) => (
              <div key={label} className="info-dl__row">
                <dt className="info-dl__term">{label}</dt>
                <dd className="info-dl__desc">
                  {href ? <a href={href}>{value}</a> : value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </PageShell>
    </main>
  </Layout>
);

export default Info;
