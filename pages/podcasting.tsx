import Image from "next/image";
import React from "react";
import useSWR from "swr";
import ArticleTeaserSmall from "../lib/components/ArticleTeaserSmall";
import Layout from "../lib/components/Layout";
import fetcher from "../lib/utils/fetcher";

const Podcasting = () => {
  const { data: wdPosts, error: wdPostsError } = useSWR(
    "/api/wd-posts?limit=7",
    fetcher as any
  );

  return (
    <Layout
      title="Podcasting"
      description="Hans Christian Reinl co-hosts Working Draft, the German-speaking web development podcast, together with Schepp, Peter Kröner, Vanessa Otto and Stefan Baumgartner since 2011."
    >
      <main id="content" role="main">
        <section className="container main">
          <h1>Podcasting</h1>

          <p>
            Since 2011, podcasting has been a passion of mine. The{" "}
            <a href="https://workingdraft.de/">Working Draft podcast</a> is my
            home — a weekly German-speaking show about web development and
            engineering, which I co-host with{" "}
            <a href="https://schepp.de/">Schepp</a>,{" "}
            <a href="https://www.peterkroener.de/">Peter Kröner</a>,{" "}
            <a href="https://vannsl.io/">Vanessa Otto</a> and{" "}
            <a href="https://fettblog.eu/">Stefan Baumgartner</a>. Together we
            educate and inform a broad technical audience on the latest in our
            industry.
          </p>
        </section>

        <div
          className="section--fullsize section--ratio"
          style={{ backgroundImage: "url(/img/podcasting.jpg)" }}
        ></div>

        <section className="container main" id="podcasting-equipment">
          <h2>Equipment for Recording</h2>

          <p>
            From time to time I get asked which equipment I use for recording
            Working Draft. Here is a pretty simple list of my equipment:
          </p>
          <ul>
            <li>
              Microphone:{" "}
              <a href="https://www.amazon.de/gp/product/B00AE4T0Q2/">
                Auna MIC-900B
              </a>{" "}
              with{" "}
              <a href="https://www.amazon.de/gp/product/B078MLBGRM/">
                Blue III radius broadcast arm
              </a>
            </li>
            <li>Headphones: Apple Air Pods</li>
          </ul>

          <p>
            For Working Draft's recording and post-production we use a couple of
            services and tools:
          </p>

          <ul>
            <li>Recording and Virtual Studio: Zencastr</li>
            <li>Virtual Studio: Google Meet as an alternative to Zencastr</li>
            <li>Local recording: Quick Time Player</li>
            <li>Post-Production: A specialist :)</li>
            <li>Post-Post-Production: Auphonic</li>
          </ul>
        </section>

        <section className="container main" id="podcasting-latest">
          <h2>
            <span className="oss--wd-logo">
              <Image
                src="/img/wd.svg"
                alt="Working Draft Logo"
                width={64}
                height={64}
              />
            </span>
            Working Draft
          </h2>

          <iframe
            src="https://open.spotify.com/embed/show/78iH7cIFzu1ejoB6aQUsIh?utm_source=generator&amp;theme=0"
            width="100%"
            height="232"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </section>

        <section className="container container--large">
          <h3 className="container">Latest Episodes</h3>

          <ul className="posts__list posts__list--no-divider posts__list--no-top">
            {wdPosts?.map(({ title, url, description, date }) => (
              <ArticleTeaserSmall
                key={url}
                title={title}
                url={url}
                date={date}
              />
            ))}

            <ArticleTeaserSmall
              title="and more…"
              url="https://workingdraft.de/"
              description=""
            />
          </ul>
        </section>

        <div className="container">
          <h3>Some special episodes</h3>

          <figure className="image image--block">
            <iframe
              width="470"
              height="268"
              src="https://www.youtube.com/embed/Mjk77icZ0Mk"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ marginRight: "1rem" }}
            ></iframe>

            <iframe
              width="470"
              height="268"
              src="https://www.youtube.com/embed/1Mz3JpGbjlk"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </figure>
        </div>
      </main>
    </Layout>
  );
};

export default Podcasting;
