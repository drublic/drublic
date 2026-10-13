import React from "react";
import Layout from "../lib/components/Layout";

const links = [
  { label: "Website", href: "https://hansreinl.de/", value: "hansreinl.de" },
  { label: "GitHub", href: "https://github.com/drublic", value: "drublic" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hansreinl/",
    value: "hansreinl",
  },
];

const miscFacts = [
  { label: "Location", value: "Cologne, Germany (Weißer Str. 9-11)" },
  { label: "Nearest airport", value: "Cologne Bonn Airport (CGN)" },
  {
    label: "Phone",
    value: "+49 176 44508482",
    href: "tel:+4917644508482",
  },
  { label: "T-shirt size", value: "Large" },
];

const Info = () => (
  <Layout
    title="Press & speaker information"
    description="Press and speaker information about Hans Christian Reinl — AI-Native Systems Architect & Engineering Advisor, based in Cologne, Germany."
  >
    <main id="main" className="main container" role="main">
      <header className="info-header">
        <p className="info-header__eyebrow">Press &amp; speaker kit</p>
        <h1 className="info-header__title">Information page</h1>
        <p className="info-header__lead">
          Here is some information about me in case you need it for conference
          programs, podcast intros, or press. Please{" "}
          <a href="mailto:hi@hansreinl.de">let me know</a> if anything essential
          is missing.
        </p>
      </header>

      <section className="info-section" aria-labelledby="info-bio-heading">
        <h2 id="info-bio-heading" className="info-section__title">
          Biography
        </h2>

        <div className="info-bio-grid">
          <article className="info-card">
            <h3 className="info-card__label">Very short</h3>
            <p className="info-card__text">
              AI-Native Systems Architect &amp; Engineering Advisor, founder of{" "}
              <a href="https://nplusone.app/">N+One</a>, co-host of{" "}
              <a href="https://workingdraft.de/">Working Draft</a>.
            </p>
          </article>

          <article className="info-card info-card--wide">
            <h3 className="info-card__label">Long</h3>
            <p className="info-card__text">
              Hans Christian Reinl is an AI-Native Systems Architect &amp;
              Engineering Advisor based in Cologne, Germany. With 15+ years of
              experience in web, mobile, and SmartTV application development at
              scale (11M+ MAU), he helps engineering organizations transition
              from legacy architectures to AI-native products. He is the
              founder of N+One, an AI-native coaching platform for cyclists,
              coach at Digitale Leute School, and former VP Engineering at
              ProSiebenSat.1 (Joyn). Hans speaks at conferences on engineering
              leadership and AI engineering, and has co-hosted the
              German-speaking web development podcast Working Draft since 2011.
            </p>
          </article>
        </div>
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
    </main>
  </Layout>
);

export default Info;
