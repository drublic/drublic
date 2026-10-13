import Image from "next/image";
import Link from "next/link";
import React from "react";
import AdvisoryCta from "../../lib/components/AdvisoryCta";
import Layout from "../../lib/components/Layout";

type TalkLink = {
  label: string;
  href: string;
  external?: boolean;
};

type UpcomingTalk = {
  event: string;
  eventHref: string;
  format: string;
  meta: string;
  title: string;
  description: string;
};

type RecentTalk = {
  event: string;
  eventHref?: string;
  meta: string;
  title: string;
  links?: TalkLink[];
};

type ArchiveTalk = {
  event: string;
  eventHref: string;
  meta: string;
  title: string;
  titleHref?: string;
  links?: TalkLink[];
};

const upcoming: UpcomingTalk[] = [
  {
    event: "code.talks",
    eventHref: "https://codetalks.com/",
    format: "Conference talk · 20 min",
    meta: "4–5 Nov 2026 · Hamburg, Germany",
    title: "From Vibe Coding to Agentic Engineering: Designing the Modern SDLC",
    description:
      "One developer’s toolchain, from ticket to pull request — how agentic workflows reshape the day-to-day SDLC.",
  },
  {
    event: "Digitale Leute Summit",
    eventHref: "https://www.digitale-leute.de/summit/26/",
    format: "Deep dive · 60 min",
    meta: "Tue 17 Nov 2026, 10:20 · Cologne · AI in Engineering stage",
    title: "From Vibe Coding to Agentic Engineering: Designing the Modern SDLC",
    description:
      "Deep dive on mapping AI agents to discovery, delivery, and operations with clear ownership at each phase.",
  },
];

const recent: RecentTalk[] = [
  {
    event: "t3 CTO Summit",
    eventHref: "https://www.t3-summit.com/",
    meta: "Oct 2026 · CityCube Berlin · Roundtable",
    title: "Beyond the Hype: Driving Pragmatic AI Adoption and Team Governance",
    links: [
      {
        label: "Notes",
        href: "/blog/ai-adoption-governance-roles-t3-cto-summit",
      },
    ],
  },
  {
    event: "Digitale Leute School",
    meta: "2026 · Workshops",
    title: "RAG, MCP, and spec-driven agentic engineering (OpenSpec + Cursor)",
  },
  {
    event: "t3 CTO Summit",
    eventHref: "https://www.t3-summit.com/t3-berlin",
    meta: "2025 · Berlin · Panels",
    title: "Mobile and platform engineering",
  },
  {
    event: "LeadingEng Berlin",
    eventHref: "https://leaddev.com/leadingeng-berlin/",
    meta: "2024 · Berlin",
    title: "Engineering metrics and data-driven engineering leadership",
  },
];

const themes = [
  {
    label: "Agentic engineering",
    text: "How teams map AI agents across the SDLC — discovery, delivery, and operations — with clear ownership at each phase.",
  },
  {
    label: "AI adoption & governance",
    text: "Pragmatic rollout patterns, role design, and guidelines that protect the codebase without freezing teams.",
  },
  {
    label: "RAG & MCP workshops",
    text: "Hands-on sessions on retrieval systems and the Model Context Protocol — from indexing strategies to production connections.",
  },
  {
    label: "Engineering leadership",
    text: "Metrics programs, team scaling, and leadership practices for high-performing product organizations.",
  },
];

const archive: ArchiveTalk[] = [
  {
    event: "MODXpo",
    eventHref: "http://2015.modxpo.eu/",
    meta: "2015 · Munich",
    title: "Workflow: Frontend Tooling — “Tool with it!”",
  },
  {
    event: "SoCoded",
    eventHref: "https://socoded.com/",
    meta: "2013 · Hamburg",
    title: "Starting Front-End Projects",
    titleHref: "https://drublic.github.io/socoded-init",
    links: [
      {
        label: "Video",
        href: "https://www.youtube.com/watch?v=a9IlYbgZbPk",
        external: true,
      },
    ],
  },
  {
    event: "Frontend Conference",
    eventHref: "https://2013.frontendconf.ch/",
    meta: "2013 · Zürich",
    title: "Be Friends With You Designer And Style Guides — Updated",
    titleHref: "https://drublic.github.io/fec-styleguides/",
    links: [
      {
        label: "Video",
        href: "https://www.ustream.tv/recorded/37954517",
        external: true,
      },
    ],
  },
  {
    event: "Beyond Tellerrand",
    eventHref: "https://2013.beyondtellerrand.com/",
    meta: "2013 · Düsseldorf · Side stage",
    title: "Component Based Development",
    titleHref: "https://drublic.github.io/component-based-development/",
  },
  {
    event: "Front-Trends",
    eventHref: "https://2013.front-trends.com/",
    meta: "2013 · Warsaw",
    title: "Be Friends With You Designer And Style Guides",
    titleHref: "https://drublic.github.io/ft-styleguides",
    links: [
      {
        label: "Video",
        href: "https://vimeo.com/68680321",
        external: true,
      },
    ],
  },
  {
    event: "UX Munich",
    eventHref: "https://uxmunich.com/",
    meta: "2013 · Munich",
    title: "Be Friends With You Designer And Style Guides",
    titleHref: "https://slides.drublic.de/uxm-styleguides/",
    links: [
      {
        label: "Video",
        href: "https://vimeo.com/65822198",
        external: true,
      },
    ],
  },
  {
    event: "TakeOff Conference",
    eventHref: "https://takeoffconf.com/",
    meta: "2013 · Lille",
    title: "Writing Awesome Code — Extended Version",
    titleHref: "https://slides.drublic.de/takeoff-awesome-code/",
    links: [
      {
        label: "Video",
        href: "https://www.youtube.com/watch?v=Rg_AW_FPWsY",
        external: true,
      },
    ],
  },
  {
    event: "Fronteers",
    eventHref: "https://fronteers.nl/congres/2012",
    meta: "2012 · Amsterdam · Jam Session",
    title: "Writing Awesome Code",
    titleHref: "https://slides.drublic.de/awesome-code/",
    links: [
      {
        label: "Video",
        href: "https://vimeo.com/51856235",
        external: true,
      },
    ],
  },
];

const ExternalLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <a
    href={href}
    className={className}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const TalkLinks = ({ links }: { links?: TalkLink[] }) => {
  if (!links?.length) {
    return null;
  }

  return (
    <ul className="speaking-talk__links">
      {links.map((link) => (
        <li key={`${link.label}-${link.href}`}>
          {link.external || link.href.startsWith("http") ? (
            <ExternalLink href={link.href}>{link.label}</ExternalLink>
          ) : (
            <Link href={link.href}>{link.label}</Link>
          )}
        </li>
      ))}
    </ul>
  );
};

const Speaking = () => (
  <Layout
    title="Public Speaking — RAG, MCP, Agentic Engineering"
    description="Hans Christian Reinl speaks at conferences (t3 CTO Summit, LeadingEng Berlin, and more) on agentic engineering across the SDLC, RAG, MCP, AI-assisted development, and engineering leadership."
  >
    <main id="content" className="main" role="main">
      <div className="container">
        <header className="info-header">
          <p className="info-header__eyebrow">Conferences, workshops &amp; panels</p>
          <h1 className="info-header__title">Public Speaking</h1>
          <p className="info-header__lead">
            I speak about AI engineering, agentic workflows, engineering
            leadership, and building high-scale platforms. Available for
            keynotes, conference talks, panel discussions, and team workshops.
          </p>

          <div className="button-group speaking-header__actions">
            <a href="mailto:hi@hansreinl.de" className="button">
              Invite me to speak
            </a>
            <Link href="/info" className="button button--outline">
              Speaker kit
            </Link>
            <a
              href="https://www.linkedin.com/in/hansreinl/"
              className="button button--outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </header>

        <section
          className="info-section speaking-upcoming"
          aria-labelledby="speaking-upcoming-heading"
        >
          <h2 id="speaking-upcoming-heading" className="info-section__title">
            Upcoming
          </h2>

          <div className="speaking-upcoming__grid">
            {upcoming.map((talk) => (
              <article key={`${talk.event}-${talk.meta}`} className="event-card">
                <p className="event-card__eyebrow">{talk.format}</p>
                <ExternalLink
                  href={talk.eventHref}
                  className="event-card__brand"
                >
                  <span>{talk.event}</span>
                </ExternalLink>
                <p className="event-card__meta">{talk.meta}</p>
                <p className="event-card__title">{talk.title}</p>
                <div className="event-card__desc">
                  <p>{talk.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="info-section"
          aria-labelledby="speaking-recent-heading"
        >
          <h2 id="speaking-recent-heading" className="info-section__title">
            Recent Talks
          </h2>

          <ul className="speaking-talk-list">
            {recent.map((talk) => (
              <li
                key={`${talk.event}-${talk.meta}-${talk.title}`}
                className="speaking-talk"
              >
                <p className="speaking-talk__meta">
                  {talk.eventHref ? (
                    <ExternalLink href={talk.eventHref}>
                      {talk.event}
                    </ExternalLink>
                  ) : (
                    <span>{talk.event}</span>
                  )}
                  <span aria-hidden="true"> · </span>
                  {talk.meta}
                </p>
                <p className="speaking-talk__title">{talk.title}</p>
                <TalkLinks links={talk.links} />
              </li>
            ))}
          </ul>
        </section>

        <section
          className="info-section"
          aria-labelledby="speaking-themes-heading"
        >
          <h2 id="speaking-themes-heading" className="info-section__title">
            Topics I Speak About
          </h2>
          <p className="info-section__intro">
            Flagship themes for keynotes, deep dives, and workshops. For bio and
            press assets, see the{" "}
            <Link href="/info">speaker information page</Link>.
          </p>

          <div className="speaking-themes">
            {themes.map((theme) => (
              <article key={theme.label} className="info-card">
                <h3 className="info-card__label">{theme.label}</h3>
                <p className="info-card__text">{theme.text}</p>
              </article>
            ))}
          </div>
        </section>

        <figure className="speaking-photo">
          <Image
            src="/img/speaking-discussion.jpg"
            alt="Hans Christian Reinl in discussion at Droidcon and Fluttercon, Berlin"
            width={1200}
            height={1800}
            className="speaking-photo__image"
            sizes="(min-width: 48em) 40rem, 100vw"
          />
          <figcaption className="image__caption image__caption--no-border">
            Conversations between sessions — Droidcon &amp; Fluttercon at The
            Cube, Berlin, 24–26 September 2025.
            <span className="image__caption__copywrite">
              www.tellingphotography.com
            </span>
          </figcaption>
        </figure>

        <section
          className="info-section"
          aria-labelledby="speaking-archive-heading"
        >
          <details className="speaking-archive">
            <summary id="speaking-archive-heading">
              Earlier talks (2012–2015)
            </summary>
            <p className="speaking-archive__intro">
              Front-end tooling, style guides, and component-based development —
              mostly with slides and video where available.
            </p>
            <ul className="speaking-talk-list speaking-talk-list--compact">
              {archive.map((talk) => (
                <li
                  key={`${talk.event}-${talk.meta}-${talk.title}`}
                  className="speaking-talk"
                >
                  <p className="speaking-talk__meta">
                    <ExternalLink href={talk.eventHref}>
                      {talk.event}
                    </ExternalLink>
                    <span aria-hidden="true"> · </span>
                    {talk.meta}
                  </p>
                  <p className="speaking-talk__title">
                    {talk.titleHref ? (
                      <ExternalLink href={talk.titleHref}>
                        {talk.title}
                      </ExternalLink>
                    ) : (
                      talk.title
                    )}
                  </p>
                  <TalkLinks links={talk.links} />
                </li>
              ))}
            </ul>
          </details>
        </section>
      </div>

      <AdvisoryCta />
    </main>
  </Layout>
);

export default Speaking;
