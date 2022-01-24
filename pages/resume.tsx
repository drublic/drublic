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
              <a href="https://drublic.de/">drublic.de</a> &bull;{" "}
              <a href="mailto:info@drublic.de">info@drublic.de</a>
            </address>
          </header>
        </div>

        <section>
          <h2>About</h2>

          <p>
            I am an Engineering Manager, Software Architect and Certified Scrum
            Master working as Vice President Engineering for{" "}
            <a href="https://www.prosiebensat1.com/">
              Seven.One Entertainment Group
            </a>{" "}
            located in Cologne, Germany.
          </p>
          <p>
            Agile development and Scrum have influenced my work since 2012. I
            have more than ten years of experience in developing scalable
            web-applications using cutting edge technologies. I love creating
            solid systems in a high-performance environment. My passion is to
            build teams that strive for excellence. Enabling team members to
            excellerate is what drives my daily work.
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
            <b>Vice President Engineering, Consumer Products</b>, October 2021 –
            current
            <br />
            <b>Director Technology &amp; Product, FYEO</b>, January – October
            2021
            <br />
            <b>Director Technology, FYEO</b>, July 2020 – December 2020
          </p>

          <h3>Freelance Software Architect &amp; Engineer</h3>

          <p>April 2013 – July 2020</p>

          <ul>
            <li>
              Consulting for middle and large-scale web projects in the
              front-end section
            </li>
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
            <li>Scrum Master and project manager</li>
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
            Co-host of Working Draft Podcast: Strong influence on the
            German-speaking community while being a member of the weekly
            web-development and web-news podcast{" "}
            <a href="https://workingdraft.de/">​Working Draft​</a> since 2011.
          </p>

          <p>
            Co-Organizer of the web development and design focused{" "}
            <a href="https://nightlybuild.io">​NightlyBuild​ Conference</a> in
            Cologne from 2014 to 2017.
          </p>
        </section>

        <section>
          <h2>Noteworthy</h2>

          <ul>
            <li>
              Several speaking engagements at conferences in Europe (including
              Front-Trends in Warsaw and Frontend Conference in Zürich)
            </li>
            <li>
              Nomination as Young Developer Of The Year /
              <a href="https://www.thenetawards.com/">.net-Awards 2013</a>
            </li>
            <li>Certified Scrum Master</li>
            <li>
              Former Core Developer of HTML5 Boilerplate: Ongoing maintenance of{" "}
              <a href="https://html5boilerplate.com/">HTML5 Boilerplate</a>, a
              solid front-end template to start projects with
            </li>
          </ul>
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

      <section className="main container section--topped">
        Here you can find more information about my{" "}
        <Link href="/about/speaking">
          <a>Public Speaking</a>
        </Link>{" "}
        and{" "}
        <Link href="/about/writings">
          <a>Writings</a>
        </Link>
        .
      </section>
    </main>
  </Layout>
);

export default Resume;
