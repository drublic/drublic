import React from "react";
import HeroAtmosphere from "./HeroAtmosphere";
import { TransitionLink } from "./TransitionLink";

const HEADLINE = "Every Team Has AI Tools. Few Master Production Systems.";

const HomeHero = () => {
  let charIndex = 0;
  const tokens = HEADLINE.split(/(\s+)/);

  return (
    <section className="home-hero" aria-label="Introduction">
      <div className="home-hero__stage">
        <div className="home-hero__media" aria-hidden="true">
          <HeroAtmosphere />
          <div className="home-hero__veil" />
        </div>


        <div className="home-hero__stage-inner">
          <h1 className="home-hero__headline">
            <span className="visuallyhidden">{HEADLINE}</span>
            <span className="home-hero__headline-anim" aria-hidden="true">
              {tokens.map((token, tokenIndex) => {
                if (/^\s+$/.test(token)) {
                  return (
                    <span
                      key={`space-${tokenIndex}`}
                      className="home-hero__space"
                    >
                      {" "}
                    </span>
                  );
                }

                return (
                  <span key={`word-${tokenIndex}`} className="home-hero__word">
                    {Array.from(token).map((char) => {
                      const i = charIndex++;
                      return (
                        <span
                          key={`${char}-${i}`}
                          className="home-hero__char"
                          style={{ ["--i" as string]: i }}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </span>
                );
              })}
            </span>
          </h1>

          <p className="home-hero__lead">
            The missing layer between the AI tools your team already has and the
            production systems that actually ship: RAG, MCP, guardrails, and
            agentic engineering across the SDLC.
          </p>

          <div className="button-group home-hero__actions">
            <TransitionLink
              href="/work-with-me"
              className="button button--large"
              title="Coaching, advisory and speaking"
              data-ga-category="WorkWithMe"
              data-ga-action="WorkWithMe"
              data-ga-label="WorkWithMe"
            >
              Work with me
            </TransitionLink>
            <TransitionLink
              href="/resume"
              className="button button--large button--outline home-hero__button-learn"
              title="About Hans Reinl"
              data-ga-category="Resume"
              data-ga-action="Resume"
              data-ga-label="Resume"
            >
              Learn more about me
            </TransitionLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
