import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import SectionLabel from "./SectionLabel";

import type { WdPost } from "../../pages/api/wd-posts";

export const WD_HOME_LIMIT = 7;

type Props = {
  initialPosts?: WdPost[];
};

const IndexWorkingDraft = ({ initialPosts }: Props) => {
  const { data: wdPosts } = useSWR<WdPost[]>(
    `/api/wd-posts?limit=${WD_HOME_LIMIT}`,
    fetcher as any,
    {
      fallbackData: initialPosts,
      revalidateOnMount: !initialPosts?.length,
      revalidateOnFocus: false,
    },
  );

  return (
    <section className="working-draft" aria-labelledby="working-draft-heading">
      <div className="container container--large">
        <div className="working-draft__panel">
          <div className="working-draft__inner">
            <SectionLabel>Podcast</SectionLabel>

            <h2 id="working-draft-heading" className="working-draft__heading">
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
              Co-hosted since 2011 with Schepp, Peter Kröner, Vanessa Otto and
              Stefan Baumgartner, educating the German-speaking web development
              community every week.
            </p>

            <iframe
              loading="lazy"
              src="https://open.spotify.com/embed/show/78iH7cIFzu1ejoB6aQUsIh?utm_source=generator&amp;theme=0"
              width="100%"
              height="152"
              allowFullScreen
              frameBorder={0}
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

            <p className="text--centered working-draft__cta">
              <Link href="/podcasting" className="button button--large">
                More about my Podcasting
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexWorkingDraft;
