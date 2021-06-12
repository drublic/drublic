import Image from "next/image";
import React from "react";
import Clients from "../lib/components/Clients";
import Layout from "../lib/components/Layout";
import Community from "../lib/components/portfolio/Community";
import Projects from "../lib/components/portfolio/Projects";

const Legal = () => (
  <Layout title="Imprint">
    <main id="content" className="main container" role="main">
      <section className="work" id="work">
        <h1>Work I do</h1>

        <h2>Clients</h2>

        <p>In the past I have worked for several clients small and large.</p>

        <div className="work__for">
          <Clients />
        </div>

        <div>
          <h2>My own projects</h2>

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

export default Legal;
