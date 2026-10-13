import React from "react";
import Layout from "../../lib/components/Layout";

const Speaking = () => (
  <Layout
    title="Public Speaking — RAG, MCP, Agentic Engineering"
    description="Hans Christian Reinl speaks at conferences (t3 CTO Summit, LeadingEng Berlin, and more) on agentic engineering across the SDLC, RAG, MCP, AI-assisted development, and engineering leadership."
  >
    <main id="content" className="main" role="main">
      <section className="container">
        <h1>Public Speaking</h1>
        <p>
          I speak at conferences, meetups, and company events about AI
          engineering, agentic workflows, engineering leadership, and building
          high-scale platforms. I am available for keynotes, conference talks,
          panel discussions, and team workshops.
        </p>

        <p>
          <a href="mailto:hi@hansreinl.de" className="button">
            Invite me to speak
          </a>
        </p>

        <h2>Upcoming</h2>
        <ul>
          <li>
            <a href="https://codetalks.com/">code.talks</a> 2026; Hamburg,
            Germany (4–5 Nov) —{" "}
            <em>
              From Vibe Coding to Agentic Engineering: Designing the Modern SDLC
            </em>
            ; One developer&apos;s toolchain, from ticket to pull request (20
            min)
          </li>
          <li>
            <a href="https://www.digitale-leute.de/summit/26/">
              Digitale Leute Summit
            </a>{" "}
            AI Deep Dive Day 2026; Cologne, Germany (Tue 17 Nov, 10:20, AI in
            Engineering stage) —{" "}
            <em>
              From Vibe Coding to Agentic Engineering: Designing the Modern SDLC
            </em>{" "}
            (60-minute deep dive)
          </li>
        </ul>

        <h2>Recent Talks</h2>
        <ul>
          <li>
            <a href="https://www.t3-summit.com/">t3 CTO Summit</a> 2026;
            CityCube Berlin — Hosted roundtable{" "}
            <em>
              Beyond the Hype: Driving Pragmatic AI Adoption and Team Governance
            </em>{" "}
            (
            <a href="/blog/ai-adoption-governance-roles-t3-cto-summit">notes</a>
            )
          </li>
          <li>
            Digitale Leute School, 2026 — Workshops on RAG, MCP, and spec-driven
            agentic engineering (OpenSpec + Cursor)
          </li>
          <li>
            <a href="https://www.t3-summit.com/t3-berlin">t3 CTO Summit</a>{" "}
            2025; Berlin, Germany — Panel discussions on mobile and platform
            engineering
          </li>
          <li>
            <a href="https://leaddev.com/leadingeng-berlin/">
              LeadingEng Berlin
            </a>{" "}
            2024 — Engineering Metrics and data-driven engineering leadership
          </li>
        </ul>

        <h2>Topics I Speak About</h2>
        <ul>
          <li>
            Implementing agentic engineering across the SDLC — how teams map AI
            agents to discovery, delivery, and operations with clear ownership
            at each phase
          </li>
          <li>
            AI adoption, governance, and role design for engineering
            organisations
          </li>
          <li>
            Spec-driven agentic workflows (OpenSpec, Cursor) that survive
            production review
          </li>
          <li>AI-assisted development workflows and production patterns</li>
          <li>
            RAG (Retrieval-Augmented Generation) implementation — from indexing
            and retrieval strategies to production-ready applications; workshops
            available
          </li>
          <li>
            MCP (Model Context Protocol) — connecting LLMs to tools, data, and
            external services; workshops available
          </li>
          <li>
            Building production-ready AI applications with Next.js and the
            Vercel AI SDK
          </li>
          <li>Engineering leadership and scaling high-performing teams</li>
          <li>Engineering metrics and data-driven decision making</li>
          <li>Design systems and component-based development</li>
        </ul>

        <h2>Earlier Talks</h2>
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
              Be Friends With You Designer And Style Guides – Updated
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

export default Speaking;
