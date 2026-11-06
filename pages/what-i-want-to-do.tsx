import Link from "next/link";
import React from "react";
import AdvisoryCta from "../lib/components/AdvisoryCta";
import Layout from "../lib/components/Layout";
import { PageTransition } from "../lib/components/PageTransition";

type Offer = {
  title: string;
  body: React.ReactNode;
};

const offers: Offer[] = [
  {
    title: "AI Software Engineering Coaching",
    body: (
      <>
        Hands-on coaching for engineers and bootcamp participants on production
        AI patterns: resilient RAG pipelines, MCP integrations, vector stores,
        guardrails, and agentic engineering across the SDLC. I coach at Digitale
        Leute School and neuefische (English and German), and run the same
        curriculum as team enablement inside companies.
      </>
    ),
  },
  {
    title: "AI-Native Systems Advisory",
    body: (
      <>
        Strategy, architecture, and hands-on implementation of production-ready
        AI applications with Next.js, TypeScript, and the Vercel AI SDK.
      </>
    ),
  },
  {
    title: "Team Workshops",
    body: (
      <>
        Focused sessions on RAG implementation, MCP integration, spec-driven
        agentic workflows, and modern AI development practices for existing
        engineering teams.
      </>
    ),
  },
  {
    title: "Conference Speaking",
    body: (
      <>
        Keynotes and talks on agentic engineering across the SDLC, RAG, MCP,
        AI-assisted development, engineering leadership, and platform
        architecture.{" "}
        <Link href="/about/speaking">See my speaking history</Link>.
      </>
    ),
  },
  {
    title: "Engineering Leadership Advisory",
    body: (
      <>
        Metrics programs, team scaling, and organizational design for
        engineering organizations.
      </>
    ),
  },
];

const WorkWithMe = () => {
  return (
    <Layout
      title="Work with me"
      description="Hans Christian Reinl offers AI Software Engineering coaching, AI-native systems advisory, team workshops, and conference speaking. Get in touch for agentic engineering, RAG, MCP, and engineering leadership."
    >
      <main id="content" className="main" role="main">
        <div className="container container--large">
          <PageTransition delay={80}>
            <header className="info-header">
              <p className="info-header__eyebrow">
                Coaching, advisory &amp; speaking
              </p>
              <h1 className="info-header__title">Work with me</h1>
              <p className="info-header__lead">
                I am an AI-Native Systems Architect, Engineering Advisor, and AI
                Software Engineering Coach based in Cologne, Germany. I help
                engineering teams ship production-ready AI — and teach the
                patterns that keep those systems reliable.
              </p>

              <div className="button-group work-with-me__actions">
                <a href="mailto:hi@hansreinl.de" className="button">
                  Get in touch
                </a>
                <Link href="/resume" className="button button--outline">
                  My Résumé
                </Link>
              </div>
            </header>
          </PageTransition>

          <section
            className="info-section"
            aria-labelledby="work-with-me-offers-heading"
          >
            <h2
              id="work-with-me-offers-heading"
              className="info-section__title"
            >
              What I offer
            </h2>

            <ul className="work-with-me__offers">
              {offers.map((offer) => (
                <li key={offer.title} className="work-with-me__offer">
                  <h3 className="work-with-me__offer-title">{offer.title}</h3>
                  <p className="work-with-me__offer-body">{offer.body}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <AdvisoryCta />
      </main>
    </Layout>
  );
};

export default WorkWithMe;
