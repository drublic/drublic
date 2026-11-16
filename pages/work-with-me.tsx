import Image from "next/image";
import Link from "next/link";
import React from "react";
import AdvisoryCta from "../lib/components/AdvisoryCta";
import JsonLd, {
  PERSON_ID,
  absoluteUrl,
  breadcrumbJsonLd,
} from "../lib/components/JsonLd";
import Layout from "../lib/components/Layout";
import PageHeader from "../lib/components/PageHeader";
import PageShell from "../lib/components/PageShell";
import PathwayCards, { type PathwayItem } from "../lib/components/PathwayCards";
import { PageTransition } from "../lib/components/PageTransition";
import SectionLabel from "../lib/components/SectionLabel";

const workPathways: readonly PathwayItem[] = [
  {
    href: "#coaching",
    title: "AI Engineering Coaching",
    body: "Production patterns for engineers: RAG, MCP, guardrails, agentic SDLC.",
    className: "pathway__item--coaching",
    actionLabel: "See details",
  },
  {
    href: "#systems",
    title: "AI-Native Systems",
    body: "Strategy and hands-on build with Next.js, TypeScript, and the AI SDK.",
    className: "pathway__item--systems",
    actionLabel: "See details",
  },
  {
    href: "#workshops",
    title: "Team Workshops",
    body: "Focused sessions that close the gap between tools bought and systems shipped.",
    className: "pathway__item--workshops",
    actionLabel: "See details",
  },
  {
    href: "#speaking",
    title: "Conference Speaking",
    body: "Keynotes on agentic engineering, RAG, MCP, and leadership.",
    className: "pathway__item--speaking",
    actionLabel: "See details",
  },
  {
    href: "#leadership",
    title: "Engineering Leadership Advisory",
    body: "Metrics programs, team scaling, and org design when AI changes how work ships.",
    className: "pathway__item--leadership",
    actionLabel: "See details",
  },
];

type OfferDetail = {
  id: string;
  title: string;
  forWho: string;
  body: React.ReactNode;
  outcomes: string[];
};

const offerDetails: OfferDetail[] = [
  {
    id: "coaching",
    title: "AI Software Engineering Coaching",
    forWho:
      "Engineers, tech leads, and bootcamp cohorts who need production patterns—not demo prompts.",
    body: (
      <>
        Hands-on coaching for engineers and bootcamp participants on production
        AI patterns: resilient RAG pipelines, MCP integrations, vector stores,
        guardrails, and agentic engineering across the SDLC. I coach at Digitale
        Leute School and neuefische (English and German), and run the same
        curriculum as team enablement inside companies.
      </>
    ),
    outcomes: [
      "A shared vocabulary for agentic work across ticket, spec, build, and review",
      "Patterns your team can own without me in the loop",
      "Fewer fragile chat sessions; more repeatable delivery",
    ],
  },
  {
    id: "systems",
    title: "AI-Native Systems Advisory",
    forWho:
      "Product and engineering leaders shipping AI into real products and platforms.",
    body: (
      <>
        Strategy, architecture, and hands-on implementation of production-ready
        AI applications with Next.js, TypeScript, and the Vercel AI SDK. We move
        from ambition and pilots to systems with clear ownership, evaluation,
        and operational guardrails.
      </>
    ),
    outcomes: [
      "Architecture decisions tied to how you actually ship",
      "Working slices in production—not slideware",
      "A path from prototype to something your team can run",
    ],
  },
  {
    id: "workshops",
    title: "Team Workshops",
    forWho:
      "Existing engineering teams that already bought tools and need a shared practice.",
    body: (
      <>
        Focused sessions on RAG implementation, MCP integration, spec-driven
        agentic workflows, and modern AI development practices. Workshops are
        short, concrete, and built around your stack and constraints—not a
        generic tool tour.
      </>
    ),
    outcomes: [
      "One problem closed end-to-end in the room",
      "Agreed next tickets that are agent-ready",
      "Team norms for when humans take the keyboard back",
    ],
  },
  {
    id: "speaking",
    title: "Conference Speaking",
    forWho:
      "Conferences, summits, and company events that want substance over hype.",
    body: (
      <>
        Keynotes and talks on agentic engineering across the SDLC, RAG, MCP,
        AI-assisted development, engineering leadership, and platform
        architecture.{" "}
        <Link href="/about/speaking">See my speaking history</Link> and{" "}
        <Link href="/info">speaker kit</Link>.
      </>
    ),
    outcomes: [
      "A clear frame your audience can reuse on Monday",
      "Stories from production, not vendor demos",
      "Formats from 20-minute talks to deep-dive workshops",
    ],
  },
  {
    id: "leadership",
    title: "Engineering Leadership Advisory",
    forWho:
      "CTOs, VPs, and directors scaling teams and measuring what matters.",
    body: (
      <>
        Metrics programs, team scaling, and organizational design for
        engineering organizations—especially where AI adoption is changing how
        work is planned, reviewed, and shipped.
      </>
    ),
    outcomes: [
      "A light metrics program that improves flow and trust",
      "Clarity on roles when agents enter the SDLC",
      "Governance that enables delivery instead of blocking it",
    ],
  },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Coaching, advisory and speaking by Hans Christian Reinl",
  itemListElement: offerDetails.map((offer, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      "@id": absoluteUrl(`/work-with-me#${offer.id}`),
      name: offer.title,
      url: absoluteUrl(`/work-with-me#${offer.id}`),
      description: `For ${offer.forWho} Outcomes: ${offer.outcomes.join("; ")}.`,
      audience: { "@type": "Audience", audienceType: offer.forWho },
      provider: { "@id": PERSON_ID },
      areaServed: ["DE", "AT", "CH", "Europe"],
      availableLanguage: ["en", "de"],
    },
  })),
};

const WorkWithMe = () => {
  return (
    <Layout
      title="Work with me"
      description="Hans Christian Reinl offers AI Software Engineering coaching, AI-native systems advisory, team workshops, and conference speaking. Get in touch for agentic engineering, RAG, MCP, and engineering leadership."
    >
      <JsonLd
        data={[
          servicesJsonLd,
          breadcrumbJsonLd([{ name: "Work with me", path: "/work-with-me" }]),
        ]}
      />
      <main id="content" className="main" role="main">
        <PageShell>
          <PageTransition delay={80}>
            <PageHeader
              label="Coaching, advisory & speaking"
              title="Work with Me"
              lead={
                <p>
                  Most engineering organizations already have AI tools. The gap
                  is turning ambition into systems that ship: reliable RAG, MCP,
                  guardrails, and agentic workflows in production. I am an
                  AI-Native Systems Architect, Engineering Advisor, and AI
                  Software Engineering Coach in Cologne. Here is how we close
                  that gap together.
                </p>
              }
              media={
                <figure className="work-with-me__photo">
                  <Image
                    src="/assets/code-talks-sponsor-conversation.jpg"
                    alt="Hans Christian Reinl talking with a sponsor at code.talks in Hamburg"
                    width={1024}
                    height={704}
                    className="work-with-me__photo-image"
                    sizes="(min-width: 56em) 28rem, 100vw"
                  />
                  <figcaption className="image__caption image__caption--no-border work-with-me__photo-caption">
                    A sponsor conversation between sessions. Kinopolis Hamburg, 5
                    November 2026.{" "}
                    <Link href="/blog/from-vibe-coding-agentic-engineering-code-talks">
                      Notes from the talk
                    </Link>
                    <span className="image__caption__copywrite">code.talks</span>
                  </figcaption>
                </figure>
              }
            >
              <div className="button-group work-with-me__actions">
                <a
                  href="mailto:hi@hansreinl.de"
                  className="button button--large"
                >
                  Get in touch
                </a>
                <Link
                  href="/resume"
                  className="button button--large button--outline"
                >
                  About me
                </Link>
              </div>
            </PageHeader>
          </PageTransition>
        </PageShell>

        <PageTransition delay={140}>
          <PathwayCards
            id="work-pathway-heading"
            heading="Ways In"
            items={workPathways}
            intro="Five paths. Pick one for who it is for, how we work, and what you leave with—more than the homepage overview."
            actionLabel="See details"
          />
        </PageTransition>

        <section
          className="work-details"
          aria-labelledby="work-details-heading"
        >
          <div className="container">
            <SectionLabel>In depth</SectionLabel>
            <h2 id="work-details-heading" className="work-details__heading">
              What Working Together Looks Like
            </h2>
            <p className="work-details__intro">
              The homepage shows the shape of the offer. Here is the substance:
              audience, approach, and outcomes for each engagement.
            </p>

            <div className="work-details__stack">
              {offerDetails.map((offer) => (
                <article
                  key={offer.id}
                  id={offer.id}
                  className="work-details__offer"
                >
                  <h3 className="work-details__title">{offer.title}</h3>
                  <p className="work-details__for">
                    <span className="work-details__for-label">For</span>{" "}
                    {offer.forWho}
                  </p>
                  <div className="work-details__columns">
                    <p className="work-details__body">{offer.body}</p>
                    <div className="work-details__outcomes">
                      <p className="work-details__outcomes-label">
                        You leave with
                      </p>
                      <ul>
                        {offer.outcomes.map((outcome) => (
                          <li key={outcome}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="work-details__cta">
                    <a
                      href="mailto:hi@hansreinl.de"
                      className="work-details__contact"
                    >
                      Get in touch
                    </a>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <AdvisoryCta />
      </main>
    </Layout>
  );
};

export default WorkWithMe;
