import Image from "next/image";
import React from "react";
import Clients from "../lib/components/Clients";
import Layout from "../lib/components/Layout";
import Community from "../lib/components/portfolio/Community";
import Projects from "../lib/components/portfolio/Projects";

const Portfolio = () => (
  <Layout
    title="Portfolio"
    description="Projects and clients by Hans Christian Reinl — including N+One, Fiberfone, Joyn, Digitale Leute School, Warhol, Working Draft, and open source contributions."
  >
    <main id="content" className="main" role="main">
      <section className="work container" id="work">
        <h1>Work I do</h1>

        <p>
          From AI-native product development to open source and community
          building — here is a selection of projects I have built and
          contributed to.
        </p>

        <h2>Companies I worked with</h2>

        <p>
          Over 15 years with startups and enterprise — Joyn / ProSiebenSat.1,
          Fiberfone, AXA, REWE digital, Vaillant Group, and more.
        </p>

        <div className="work__for">
          <Clients />
        </div>

        <div>
          <h2>My own projects</h2>

          <div className="work__element">
            <a href="https://nplusone.app/" className="work__element__image">
              <Image
                src="/img/work/n-plus.svg"
                alt="N+One"
                width={150}
                height={150}
              />
            </a>

            <div className="work__element__content">
              <h3>
                <a href="https://nplusone.app/">N+One</a>
              </h3>
              <p>
                AI-native coaching platform for cyclists. Chat-first Dynamic
                Coach that turns training and recovery data into the next
                session decision — with integrations for Garmin, Strava, Whoop,
                and intervals.icu.
              </p>
              <p className="work__element__date">Founder, since April 2026</p>
            </div>
          </div>

          <div className="work__element">
            <a href="https://fiberfone.de/" className="work__element__image">
              <Image
                src="/img/work/fiberfone.png"
                alt="Fiberfone"
                width={300}
                height={70}
              />
            </a>

            <div className="work__element__content">
              <h3>
                <a href="https://fiberfone.de/">Fiberfone GmbH</a>
              </h3>
              <p>
                Fractional CTO leading technical strategy and a 23M+ data point
                infrastructure for automated location-based order management.
                Architected agentic AI systems and low-code crawling processes.
              </p>
              <p className="work__element__date">
                Fractional CTO, October 2023 – February 2026
              </p>
            </div>
          </div>

          <div className="work__element">
            <a
              href="https://school.digitale-leute.de/"
              className="work__element__image"
            >
              <Image
                src="/img/work/dl-school.svg"
                alt="Digitale Leute School"
                width={150}
                height={150}
              />
            </a>

            <div className="work__element__content">
              <h3>
                <a href="https://school.digitale-leute.de/">
                  Digitale Leute School
                </a>
              </h3>
              <p>
                Coach for AI Software Engineering and Vibe Coding bootcamps —
                production AI patterns including resilient RAG pipelines, MCP
                integrations, vector stores, guardrails, and spec-driven
                agentic workflows with OpenSpec and Cursor.
              </p>
              <p className="work__element__date">Coach, since June 2026</p>
            </div>
          </div>

          <div className="work__element">
            <a href="https://warhol.io/" className="work__element__image">
              <Image
                src="/img/work/warhol.svg"
                alt="Warhol"
                width={150}
                height={150}
              />
            </a>

            <div className="work__element__content">
              <h3>Warhol</h3>
              <p>
                <a href="https://warhol.com/">Warhol</a> automates UI and web
                design testing with laser focus on speed, efficiency, and
                developer productivity. Warhol&apos;s algorithms turn your
                existing pattern library into tests that can verify component
                implementation and design consistency on your production web
                interface.
              </p>

              <p>
                Together with{" "}
                <a href="https://www.peterkroener.de/">Peter Kröner</a> I worked
                on this tool and we love to make web development more easy.
              </p>
              <p className="work__element__date">
                Co-founder, January 2019 – July 2021
              </p>
            </div>
          </div>
        </div>

        <div>
          <Community />
        </div>

        <div>
          <Projects />
        </div>
      </section>
    </main>
  </Layout>
);

export default Portfolio;
