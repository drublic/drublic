import Image from "next/image";
import React from "react";
import Clients from "../lib/components/Clients";
import Layout from "../lib/components/Layout";
import Community from "../lib/components/portfolio/Community";
import Projects from "../lib/components/portfolio/Projects";

const Portfolio = () => (
  <Layout
    title="Portfolio"
    description="Projects and clients by Hans Christian Reinl — including N+One, Warhol, Working Draft, and open source contributions."
  >
    <main id="content" className="main" role="main">
      <section className="work container" id="work">
        <h1>Work I do</h1>

        <p>
          From AI-native product development to open source and community
          building — here is a selection of projects I have built and
          contributed to.
        </p>

        <h2>Clients</h2>

        <p>
          Over 15 years I have worked with companies from startups to
          enterprise, including AXA, REWE digital, Vaillant Group, Joyn, and
          more.
        </p>

        <div className="work__for">
          <Clients />
        </div>

        <div>
          <h2>My own projects</h2>

          <div className="work__element">
            <div className="work__element__content">
              <h3>
                <a href="https://nplusone.app/">N+One</a>
              </h3>
              <p>
                AI-native coaching platform for cyclists. Analyzes training
                load, recovery, and performance data to dynamically adapt
                training plans, identify limiters, and optimize race
                preparation.
              </p>
              <p className="work__element__date">Founder, since April 2026</p>
            </div>
          </div>

          <div className="work__element">
            <div className="work__element__content">
              <h3>Fiberfone GmbH</h3>
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
            <a href="https://warhol.io/" className="work__element__image">
              <Image
                src="/img/work/warhol.svg"
                alt="Warhol"
                width="150"
                height="150"
              />
            </a>

            <div className="work__element__content">
              <h3>Warhol</h3>
              <p>
                <a href="https://warhol.com/">Warhol</a> automates UI and web
                design testing with laser focus on speed, efficiency, and
                developer productivity. Warhol's algorithms turn your existing
                pattern library into tests that can verify component
                implementation and design consistency on your production web
                interface.
              </p>

              <p>
                Together with{" "}
                <a href="https://www.peterkroener.de/">Peter Kröner</a> I worked
                on this tool and we love to make web development more easy.
              </p>
              <p className="work__element__date">Development since 2018</p>
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
