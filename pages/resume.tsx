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
            <h4>
              Vice President Engineering <br />
              at Seven.One Entertainment Group
            </h4>

            <address>
              Cologne, Germany
              <br />
              <a href="https://www.hansreinl.de/">hansreinl.de</a> &bull;{" "}
              <a href="mailto:info@drublic.de">info@drublic.de</a>
            </address>
          </header>
        </div>

        <section>
          <h2>Summary</h2>

          <p>
            I am an Engineering Manager, Software Architect and Certified Scrum
            Master working as Vice President Engineering for{" "}
            <a href="https://www.prosiebensat1.com/">
              Seven.One Entertainment Group
            </a>{" "}
            (ProSiebenSat.1). Agile development and Scrum have influenced my
            work since 2012. I have 14 years of experience in developing
            scalable web-applications using cutting edge technologies. I love
            creating solid systems in a high-performance environment. My passion
            is to build teams that strive for excellence. Enabling team members
            to accelerate is what drives my daily work.
          </p>
        </section>

        <section>
          <h2>Work</h2>

          <p>
            In the past I worked on projects for clients such as{" "}
            <a href="https://www.axa.de/">AXA</a>,{" "}
            <a href="https://www.rewe-digital.com/">REWE digital</a>,{" "}
            <a href="https://www.vaillant-group.com/">
              Vaillant Group Business Services
            </a>
            , fashion retailer{" "}
            <a href="https://www.fashionette.de/">Fashionette</a> and others.
            More on <a href="/portfolio">my portfolio</a>.
          </p>

          <h3>Seven.One Entertainment Group GmbH</h3>

          <p>
            <b>Vice President Engineering, Streaming Platform</b>, October 2021
            – current
          </p>

          <p>
            Within the Seven.One Entertainment Group the multi-tenant Video on
            Demand Streaming Platform is the foundation for providing the
            content of the ProSiebenSat.1 brands to multiple channels including
            Web, iOS, Android and Smart TV. We deliver the experience of{" "}
            <a href="https://video.prosieben.de/">video.prosieben.de</a>,{" "}
            <a href="https://video.sat1.de/">video.sat1.de</a> and many more.
          </p>

          <p>
            <b>Director Technology &amp; Product, FYEO</b>, January – October
            2021
            <br />
            <b>Director Technology, FYEO</b>, July 2020 – December 2020
          </p>

          <p>
            FYEO was a podcasting app which focused on delivering high quality
            audio content next to established podcasting formats, with over 1.6
            million formats and over 40 million episodes in its database.
          </p>

          <h3>
            Freelance Software Architect &amp; Engineer, Engineering Manager
          </h3>

          <p>April 2013 – July 2020</p>

          <ul>
            <li>Consulting for middle and large-scale web projects</li>
            <li>
              Analysis and improvement of new and existing software
              architectures
            </li>
            <li>
              Workshops for agencies to coach their developers and designers
            </li>
            <li>
              Working on client projects using, configuring and developing for
              FirstSpirit, TYPO3 CMS, Magento and Hybris
            </li>
            <li>Scrum Master, Project and Engineering Manager </li>
          </ul>

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

      <div
        className="section--fullsize section--ratio"
        style={{ backgroundImage: "url(/img/speaking.jpg)" }}
      ></div>

      <div className="main container">
        <section>
          <h2>Open Source &amp; Community Engagement</h2>
          <p>
            <b>Mentor at The Mentoring Club</b>: The Mentoring Club is an open
            community which aims at supporting people who are keen to learn,
            grow and develop. I provide advice to mentees to advance in their
            career by sharing my knowledge in the areas of Engineering,
            Engineering Management &amp; Leadership, Agile Methodologies and
            more. <Link href="/blog/mentoring-club">More information here</Link>
            .
          </p>

          <p>
            <b>Co-host of Working Draft Podcast</b>: Strong influence on the
            German-speaking community while being a member of the weekly
            web-development and web-news podcast{" "}
            <a href="https://workingdraft.de/">Working Draft</a> since 2011.
          </p>

          <p>
            <b>NightlyBuild Conference</b>: Co-Organizer of the web development
            and design focused{" "}
            <a href="https://nightlybuild.io">NightlyBuild Conference</a> in
            Cologne from 2014 to 2017.
          </p>

          <p>
            <b>Former Core Developer of HTML5 Boilerplate</b>: Ongoing
            maintenance of HTML5 Boilerplate, a solid front-end template to
            start projects with.
          </p>

          <p>
            <b>Speaking engagements</b> at conferences across Europe (including
            Front-Trends in Warsaw and Frontend Conference in Zürich).
          </p>

          <p>
            Here you can find more information about my{" "}
            <Link href="/about/speaking">Public Speaking</Link> and{" "}
            <Link href="/about/writings">Writings</Link>.
          </p>
        </section>
      </div>

      <div
        className="section--fullsize section--ratio"
        style={{ backgroundImage: "url(/img/working.jpg)" }}
      >
        <p className="section__caption text--small">
          &copy;
          <a href="https://twitter.com/stn1978">Stefan Nitzsche</a>
        </p>
      </div>
    </main>
  </Layout>
);

export default Resume;
