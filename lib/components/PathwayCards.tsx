import React from "react";
import { TransitionLink } from "./TransitionLink";

export type PathwayItem = {
  href: string;
  title: string;
  body: string;
  className: string;
  actionLabel?: string;
};

export const defaultPathways: readonly PathwayItem[] = [
  {
    href: "/work-with-me#coaching",
    title: "AI Engineering Coaching",
    body: "Production patterns for engineers: RAG, MCP, guardrails, agentic SDLC.",
    className: "pathway__item--coaching",
  },
  {
    href: "/work-with-me#systems",
    title: "AI-Native Systems",
    body: "Strategy and hands-on build with Next.js, TypeScript, and the AI SDK.",
    className: "pathway__item--systems",
  },
  {
    href: "/work-with-me#workshops",
    title: "Team Workshops",
    body: "Focused sessions that close the gap between tools bought and systems shipped.",
    className: "pathway__item--workshops",
  },
  {
    href: "/about/speaking",
    title: "Conference Speaking",
    body: "Keynotes on agentic engineering, RAG, MCP, and leadership.",
    className: "pathway__item--speaking",
  },
];

type PathwayCardsProps = {
  heading?: string;
  intro?: string;
  items?: readonly PathwayItem[];
  actionLabel?: string;
  id?: string;
};

const PathwayCards = ({
  heading = "How I Close the Gap",
  intro = "Coaching, systems work, workshops, and talks: how I help teams close that gap.",
  items = defaultPathways,
  actionLabel = "Explore",
  id = "pathway-heading",
}: PathwayCardsProps) => (
  <section className="pathway" aria-labelledby={id}>
    <div className="container container--large">
      <div className="pathway__panel">
        <div className="pathway__inner">
          <h2 id={id} className="pathway__heading">
            {heading}
          </h2>
          {intro ? <p className="pathway__intro">{intro}</p> : null}

          <ul className="pathway__grid">
            {items.map((item) => {
              const label = item.actionLabel ?? actionLabel;
              const usePlainAnchor =
                item.href.startsWith("mailto:") ||
                item.href.startsWith("http") ||
                item.href.startsWith("#");

              return (
                <li
                  key={item.title}
                  className={`pathway__item ${item.className}`}
                >
                  {usePlainAnchor ? (
                    <a href={item.href} className="pathway__card">
                      <span className="pathway__title">{item.title}</span>
                      <span className="pathway__body">{item.body}</span>
                      <span className="pathway__action">{label}</span>
                    </a>
                  ) : (
                    <TransitionLink href={item.href} className="pathway__card">
                      <span className="pathway__title">{item.title}</span>
                      <span className="pathway__body">{item.body}</span>
                      <span className="pathway__action">{label}</span>
                    </TransitionLink>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default PathwayCards;
