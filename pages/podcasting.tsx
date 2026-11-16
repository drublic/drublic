import Image from "next/image";
import React from "react";
import useSWR from "swr";
import Layout from "../lib/components/Layout";
import PageHeader from "../lib/components/PageHeader";
import PageShell from "../lib/components/PageShell";
import fetcher from "../lib/utils/fetcher";
import SectionLabel from "../lib/components/SectionLabel";
import JsonLd, { breadcrumbJsonLd } from "../lib/components/JsonLd";
import { getCachedWdPosts, type WdPost } from "./api/wd-posts";

const WD_LIMIT = 7;

type Props = {
  initialWdPosts: WdPost[];
};

const favoriteEpisodes = [
  {
    href: "https://workingdraft.de/on-tour-codetalks-transformerjs-webgpu-lokale-ki-modelle/",
    title:
      "On Tour @ code.talks: Transformers.js, WebGPU und lokale KI-Modelle",
    date: "2026-11-08",
    dateLabel: "8 Nov 2026",
    note: "Recorded at code.talks in Hamburg with Nico Martin: running AI models locally in the browser with Transformers.js and WebGPU.",
  },
  {
    href: "https://workingdraft.de/716/",
    title: "Revision 716: Agentic Engineering statt Vibe Coding",
    date: "2026-06-16",
    dateLabel: "16 Jun 2026",
    note: "How AI-assisted development is shifting from vibe coding to orchestrating agents — the topic I spend most of my time on.",
  },
  {
    href: "https://workingdraft.de/711/",
    title: "Revision 711: LLMs zuhause betreiben",
    date: "2026-05-05",
    dateLabel: "5 May 2026",
    note: "Running current language and image models at home: realistic hardware, privacy, and cost control.",
  },
  {
    href: "https://workingdraft.de/706/",
    title: "Revision 706: v0 und Vercel, mit Leo Reuter",
    date: "2026-03-31",
    dateLabel: "31 Mar 2026",
    note: "With Leo Reuter from Vercel on how deployment platforms are turning into AI-powered development tools.",
  },
] as const;

const Podcasting = ({ initialWdPosts }: Props) => {
  const { data: wdPosts } = useSWR<WdPost[]>(
    `/api/wd-posts?limit=${WD_LIMIT}`,
    fetcher as any,
    {
      fallbackData: initialWdPosts,
      revalidateOnMount: !initialWdPosts?.length,
      revalidateOnFocus: false,
    },
  );

  return (
    <Layout
      title="Podcasting"
      description="Hans Christian Reinl co-hosts Working Draft, the German-speaking web development podcast, together with Schepp, Peter Kröner, Vanessa Otto and Stefan Baumgartner since 2011."
    >
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Podcasting", path: "/podcasting" }])}
      />
      <main id="content" className="main" role="main">
        <PageShell>
          <PageHeader
            label="Working Draft since 2011"
            title="Podcasting"
            lead={
              <p>
                Since 2011, podcasting has been a passion of mine. The{" "}
                <a href="https://workingdraft.de/">Working Draft podcast</a> is
                my home: a weekly German-speaking show about web development and
                engineering, which I co-host with{" "}
                <a href="https://schepp.de/">Schepp</a>,{" "}
                <a href="https://www.peterkroener.de/">Peter Kröner</a>,{" "}
                <a href="https://vannsl.io/">Vanessa Otto</a> and{" "}
                <a href="https://fettblog.eu/">Stefan Baumgartner</a>. Together
                we educate and inform a broad technical audience on the latest
                in our industry.
              </p>
            }
          />
        </PageShell>

        <div
          className="section--fullsize section--ratio"
          style={{ backgroundImage: "url(/img/podcasting.jpg)" }}
        ></div>

        <section
          className="working-draft"
          id="podcasting-latest"
          aria-labelledby="podcasting-wd-heading"
        >
          <div className="container container--large">
            <div className="working-draft__panel">
              <div className="working-draft__inner">
                <SectionLabel>Episodes</SectionLabel>

                <h2
                  id="podcasting-wd-heading"
                  className="working-draft__heading"
                >
                  <span className="oss--wd-logo">
                    <Image
                      src="/img/wd.svg"
                      alt="Working Draft Logo"
                      width={32}
                      height={32}
                    />
                  </span>
                  Working Draft Podcast
                </h2>

                <p className="working-draft__intro">
                  Latest revisions and conversations from the show.
                </p>

                <iframe
                  loading="lazy"
                  src="https://open.spotify.com/embed/show/78iH7cIFzu1ejoB6aQUsIh?utm_source=generator&amp;theme=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  className="working-draft__embed"
                  title="Working Draft Podcast on Spotify"
                ></iframe>

                <ul className="working-draft__episodes">
                  {wdPosts?.slice(1).map(({ title, url, date, duration }) => (
                    <li key={url} className="working-draft__episode">
                      <div className="working-draft__episode-row">
                        <div className="working-draft__episode-main">
                          <h3 className="working-draft__episode-title">
                            <a href={url} rel="noopener noreferrer">
                              {title}
                            </a>
                          </h3>

                          {(date || duration) && (
                            <p className="working-draft__episode-meta">
                              {date && (
                                <time className="working-draft__episode-date">
                                  {date}
                                </time>
                              )}
                              {date && duration ? (
                                <span
                                  className="working-draft__episode-sep"
                                  aria-hidden
                                >
                                  ·
                                </span>
                              ) : null}
                              {duration && (
                                <span className="working-draft__episode-duration">
                                  {duration}
                                </span>
                              )}
                            </p>
                          )}
                        </div>

                        <a
                          className="button button--outline working-draft__episode-button"
                          href={url}
                          rel="noopener noreferrer"
                        >
                          Listen
                        </a>
                      </div>
                    </li>
                  ))}

                  <li className="working-draft__episode working-draft__episode--more">
                    <div className="working-draft__episode-row">
                      <div className="working-draft__episode-main">
                        <h3 className="working-draft__episode-title">
                          <a
                            href="https://workingdraft.de/"
                            rel="noopener noreferrer"
                          >
                            All episodes on workingdraft.de
                          </a>
                        </h3>
                        <p className="working-draft__episode-meta">
                          Full archive of revisions and on-air conversations.
                        </p>
                      </div>
                      <a
                        className="button button--outline working-draft__episode-button"
                        href="https://workingdraft.de/"
                        rel="noopener noreferrer"
                      >
                        Archive
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="container podcast-favorites"
          aria-labelledby="podcast-favorites-heading"
        >
          <SectionLabel>Favorites</SectionLabel>
          <h2 id="podcast-favorites-heading">My Favorite Episodes</h2>
          <p className="podcast-favorites__intro">
            A few recent conversations I keep pointing people to. All episodes
            are in German.
          </p>

          <ul className="podcast-favorites__list">
            {favoriteEpisodes.map((episode) => (
              <li key={episode.href} className="podcast-favorites__item">
                <p className="podcast-favorites__meta">
                  <time dateTime={episode.date}>{episode.dateLabel}</time>
                </p>
                <h3 className="podcast-favorites__title">
                  <a href={episode.href}>{episode.title}</a>
                </h3>
                <p className="podcast-favorites__note">{episode.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="container"
          aria-labelledby="podcasting-special-heading"
        >
          <SectionLabel>Highlights</SectionLabel>
          <h2 id="podcasting-special-heading">Some Special Episodes</h2>

          <div className="video-grid">
            <div className="video-grid__item">
              <iframe
                src="https://www.youtube.com/embed/Mjk77icZ0Mk"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Working Draft special episode"
              ></iframe>
            </div>
            <div className="video-grid__item">
              <iframe
                src="https://www.youtube.com/embed/1Mz3JpGbjlk"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Working Draft special episode"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const getStaticProps = async () => ({
  props: {
    initialWdPosts: (await getCachedWdPosts()).slice(0, WD_LIMIT),
  },
  revalidate: 3600,
});

export default Podcasting;
