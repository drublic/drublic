import Image from "next/image";
import React from "react";
import useSWR from "swr";
import ArticleTeaserSmall from "../lib/components/ArticleTeaserSmall";
import Layout from "../lib/components/Layout";
import fetcher from "../lib/utils/fetcher";

const Podcasting = () => {
  const { data: wdPosts, error: wdPostsError } = useSWR(
    "/api/wd-posts",
    fetcher
  );

  return (
    <Layout title="Podcasting">
      <main id="content" role="main">
        <section className="container main">
          <h1>Podcasting</h1>

          <p>
            Podcasting became a passion for me which I am happy to do since
            2012. The{" "}
            <a href="https://workingdraft.de/">Working Draft podcast</a> is my
            home and I am happy to host it with my knowledgable co-hosts.
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
            <li>Microphone: Auna MIC-900B with a Standard Boom</li>
            <li>Headphones: OneOdio DJ Headphones</li>
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
          <h2>Working Draft</h2>

          <iframe
            src="https://open.spotify.com/embed/show/78iH7cIFzu1ejoB6aQUsIh?utm_source=generator&amp;theme=0"
            width="100%"
            height="232"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>

          <h3>
            <span className="oss--wd-logo">
              <Image
                src="/img/wd.svg"
                alt="Working Draft Logo"
                width={32}
                height={32}
              />
            </span>
            Latest Episodes
          </h3>

          <ul className="posts__list posts__list--no-divider posts__list--no-top">
            {wdPosts?.map(({ title, url, description, date }) => (
              <ArticleTeaserSmall
                key={url}
                title={title}
                url={url}
                date={date}
                description={description}
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
          <h3 className="main">A Special Episode</h3>
          <figure className="image image--block">
            <iframe
              width="928"
              height="552"
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
