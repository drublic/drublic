import React from "react";
import Layout from "../../lib/components/Layout";

const Resume = () => (
  <Layout title="Public Speaking">
    <main id="content" className="main" role="main">
      <section className="container">
        <h1>Public Speaking</h1>
        <p>
          I am very happy to be invited to any conference in our scene and
          beyond.
        </p>

        <ul>
          <li>
            <a href="http://2015.modxpo.eu/">MODXpo</a> 2015; Munich, Germany –
            Workflow: Frontend Tooling – "Tool with it!"
          </li>
          <li>
            <a href="//socoded.com/">SoCoded</a> 2013; Hamburg, Germany –
            <a href="//drublic.github.io/socoded-init">
              Starting Front-End Projects
            </a>{" "}
            – <a href="//www.youtube.com/watch?v=a9IlYbgZbPk">Video</a>
          </li>
          <li>
            <a href="//2013.frontendconf.ch/">Frontend Conference</a> 2013;
            Zürich, Switzerland –{" "}
            <a href="//drublic.github.io/fec-styleguides/">
              Be Friends With You Designer And Style Guides – Updated
            </a>{" "}
            &bull; <a href="//www.ustream.tv/recorded/37954517">Video</a>
          </li>
          <li>
            <a href="//2013.beyondtellerrand.com/">Beyond Tellerrand</a> Side
            Stage 2013; Düsseldorf, Germany –{" "}
            <a href="//drublic.github.io/component-based-development/">
              Component Based Development
            </a>
          </li>
          <li>
            <a href="//2013.front-trends.com/">Front-Trends</a> 2013; Warsaw,
            Poland –{" "}
            <a href="//drublic.github.io/ft-styleguides">
              Be Friends With You Designer And Style Guides
            </a>{" "}
            &bull; <a href="//vimeo.com/68680321">Video</a>
          </li>
          <li>
            <a href="//uxmunich.com/">UX Munich</a> 2013; Munich, Germany –{" "}
            <a href="//slides.drublic.de/uxm-styleguides/">
              Be Friends With You Designer And Style Guides
            </a>{" "}
            &bull; <a href="//vimeo.com/65822198">Video</a>
          </li>
          <li>
            <a href="//takeoffconf.com/">TakeOff Conference</a> 2013; Lille,
            France –{" "}
            <a href="//slides.drublic.de/takeoff-awesome-code/">
              Writing Awesome Code – Extended Version
            </a>{" "}
            &bull; <a href="//www.youtube.com/watch?v=Rg_AW_FPWsY">Video</a>
          </li>
          <li>
            <a href="//fronteers.nl/congres/2012">Fronteers</a> 2012 Jam
            Session; Amsterdam, Netherlands –{" "}
            <a href="//slides.drublic.de/awesome-code/">Writing Awesome Code</a>{" "}
            &bull; <a href="//vimeo.com/51856235">Vimeo</a>
          </li>
        </ul>
      </section>

      <div
        className="section--fullsize section--ratio"
        style={{ backgroundImage: "url(/img/speaking.jpg)" }}
      ></div>
    </main>
  </Layout>
);

export default Resume;
