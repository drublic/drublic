import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../lib/components/Layout";

const Resume = () => (
  <Layout>
    <main id="main" role="main">
      <div className="main container">
        <div className="claim-container">
          <div className="claim__me">
            <Image
              src="/img/me.jpg"
              alt="A picture of Hans Christian Reinl"
              width={750}
              height={750}
            />
          </div>

          <header className="resume-header">
            <h2>Hans Christian Reinl</h2>
            <h4>Self-employed Engineering Leader</h4>

            <address>
              Cologne, Germany
              <br />
              <a href="https://www.hansreinl.de/">hansreinl.de</a> &bull;{" "}
              <a href="mailto:hi@hansreinl.de">hi@hansreinl.de</a>
            </address>
          </header>
        </div>

        <section>
          <h2>Summary</h2>

          <p>
            Highly influential Engineering Leader and Software Architect (15+
            years) with deep expertise in web-application development,
            cloud-native, and high-scale platforms (11M+ MAU).en ability to
            define engineering vision, translate complex microservice and cloud
            architectures into strategic business value, and scale technical
            knowledge across large organizations. My experience extends beyond
            in-house leadership; as a consultant and influential co-host of the
            Working Draft Podcast, I excel at synthesizing complex engineering
            concepts into accessible, actionable guidance for a broad technical
            audience.
          </p>
        </section>

        <section>
          <h2>Work</h2>

          <h3>Engineering and Leadership Consultant, Self-employed</h3>
          <p>July 2025 – current</p>

          <p>
            Leveraging 15+ years of high-scale platform architecture and
            engineering leadership to consult with companies, focusing on
            enhancing their engineering capabilities and accelerating adoption
            of the AI-native web.
          </p>

          <ul>
            <li>
              Platform & AI Workloads: Hands-on architecture and implementation
              utilizing the Vercel AI SDK and Vercel AI Gateway, Next.js,
              Supabase, and Serverless architectures to build novel,
              production-ready AI applications.
            </li>
            <li>
              Reference Architecture Development: Designed and implemented a
              full-stack, conversational coach (
              <a href="https://nplusone.app/">N+One</a>) based on Next.js and
              the Vercel Edge Network for personalized training
              (cycling/fitness), demonstrating expertise in performant, stateful
              serverless applications.
            </li>
            <li>
              Agentic Systems & Automation: Developed an agentic-led, low-code
              crawling and indexing process to gather and structure fiber
              internet network information, showcasing proficiency in complex
              automation and LLM integration workflows.
            </li>
          </ul>

          <h3>Seven.One Entertainment Group GmbH</h3>

          <p>
            <b>Vice President Engineering, Streaming Platform</b>, October 2021
            – June 2025
          </p>

          <p>
            As Vice President Engineering, I was responsible for the strategic
            development and maintenance of the customer facing applications of
            the multi-tenant Streaming Platform{" "}
            <a href="https://joyn.de/">Joyn</a>. serving 11 million monthly
            active users.
          </p>

          <p>
            <b>Director Technology &amp; Product, FYEO</b>, January – October
            2021
            <br />
            <b>Director Technology, FYEO</b>, July 2020 – December 2020
          </p>

          <p>
            As Director of Technology & Product, I led the development and
            maintenance of FYEO, a podcasting app with over 1.6 million formats
            and 40 million episodes.
          </p>
        </section>
      </div>

      <figure className="section--fullsize">
        <Image
          src="/img/discussions.jpg"
          alt="Speaking and Discussions"
          width={1866}
          height={832}
          className="w-full h-full object-cover mt-1"
        />

        <figcaption className="image__caption">
          <span className="image__caption__copywrite">
            Droidcon & Fluttercon at The Cube, Berlin, 24-26 September 2025;
            www.tellingphotography.com
          </span>
        </figcaption>
      </figure>

      <div className="main container">
        <section>
          <h3>Software Architect & Engineer, Engineering Manager</h3>

          <p>April 2013 – July 2020</p>

          <p>
            I worked on projects for clients such as AXA, REWE digital, Vaillant
            Group and others where I served as Software Architect, Engineer and
            Engineering Manager.
          </p>

          <div className="flex space-between mt-1">
            <h4 className="mt-0 mb-0">
              AXA Deutschland, Lead Software Engineer and Software Architect
            </h4>
            <p className="mb-0">July 2018 – September 2019</p>
          </div>

          <p className="mt-0">
            Led the development and growth of an engineering team responsible
            for building online insurance tariff calculators for AXA Deutschland
            in a strongly regulated environment.
          </p>

          <div className="flex space-between mt-1">
            <h4 className="mt-0 mb-0">REWE digital, Software Engineer</h4>
            <p className="mb-0">July 2017 - June 2018</p>
          </div>
          <p className="mt-0">
            Contributed to the development of platform services that enhanced
            the web experience of REWE's online presence and online shop, one of
            the biggest retail chains in Europe.
          </p>

          <div className="flex space-between mt-1">
            <h4 className="mt-0 mb-0">
              Fashionette, Engineering Manager and Software Architect
            </h4>
            <p className="mb-0">November 2015 – August 2016</p>
          </div>
          <p className="mt-0">
            Spearheaded the transformation of the monolithic e-commerce platform
            to a scalable microservice architecture.
          </p>

          <h3>Other</h3>

          <p>
            January 2019 – July 2021: Software Developer and Co-Founder at ​
            <a href="https://warhol.io/">Warhol</a>
            <br />
            November 2011 – April 2014: Software developer and Co-Founder at
            colored.by
            <br />
            April 2010 – April 2013: Lead Frontend developer at /gebrüderheitz,
            Freiburg
          </p>
        </section>
      </div>

      <div className="main container">
        <figure className="image image--right">
          <Image
            src="/img/speaking-discussion.jpg"
            alt="Speaking and Discussions"
            width={1200}
            height={1800}
            className="w-full"
          />

          <figcaption className="image__caption">
            <span className="image__caption__copywrite">
              Droidcon & Fluttercon at The Cube, Berlin, 24-26 September 2025;
              www.tellingphotography.com
            </span>
          </figcaption>
        </figure>

        <section>
          <h2>Industry Influence &amp; Collaborative Initiatives</h2>
          <p>
            <b>Mentor at The Mentoring Club</b>:{" "}
            <a href="https://www.mentoring-club.com/">The Mentoring Club</a> is
            an open community which aims at supporting people who are keen to
            learn, grow and develop. I provide advice to mentees to advance in
            their career in the areas such as Engineering Management &amp;
            Leadership, Career building, Agile Methodologies and more{" "}
            <Link href="/blog/mentoring-club">More information here</Link>.
          </p>

          <p>
            <b>Co-host of Working Draft Podcast</b>: Strong influence on the
            German-speaking community while being a member of the weekly
            web-development and web-news podcast{" "}
            <a href="https://workingdraft.de/">Working Draft</a> since 2011.
          </p>

          <p>
            <b>Speaking engagements at conferences and webinars</b>: topics
            including Engineering Metrics, Design Systems and Component Based
            Development (e.g. Lead Dev Berlin, Front-Trends in Warsaw and
            Frontend Conference in Zürich).
          </p>

          <p>
            Here you can find more information about my{" "}
            <Link href="/about/speaking">Public Speaking</Link> and{" "}
            <Link href="/about/writings">Writings</Link>.
          </p>
        </section>
      </div>
    </main>
  </Layout>
);

export default Resume;
