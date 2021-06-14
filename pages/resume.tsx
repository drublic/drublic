import Image from "next/image";
import React from "react";
import Layout from "../lib/components/Layout";

const Resume = () => (
  <Layout>
    <main id="main" role="main">
      <div className="main container">
        <div className="claim__me">
          <Image
            src="/img/me.jpg"
            alt="A picture of Hans Christian Reinl"
            width={750}
            height={750}
          />
        </div>

        <header className="resume-header">
          <h1>Hans Christian Reinl</h1>
          <h4>
            Director Technology &amp; Product for FYEO <br />
            at ProSiebenSat.1 Digital
          </h4>

          <address>
            50825 Cologne, Germany
            <br />
            <a href="https://drublic.de/">drublic.de</a>
            <br />
            <a href="mailto:info@drublic.de">info@drublic.de</a>
            <br />
            <a href="https://twitter.com/drublic">Twitter</a> &ndash;
            <a href="https://github.com/drublic">GitHub</a>
          </address>
        </header>

        <section>
          <h2>About</h2>

          <p>
            I work as Director Technology &amp; Product on{" "}
            <a href="https://www.fyeo.de/">FYEO</a> for
            <a href="https://www.prosiebensat1.com/">
              ProSiebenSat.1 Media SE
            </a>{" "}
            and am located in Cologne, Germany.
            <br />
            Agile development and Scrum have influenced my work since 2012. I
            have more than ten years of experience in developing scalable
            web-applications using cutting edge technologies including modern
            JavaScript and TypeScript (front-end and backend).
            <br />I love creating solid systems in a high-performance
            environment.
          </p>

          <p>
            My passion for JavaScript and CSS is as strong as my belief in agile
            methodologies, especially Scrum. Building teams and enabling
            co-workers to excellerate is what drives my daily work.
          </p>
        </section>

        <section>
          <h2>Work</h2>

          <p>
            In the past I worked on projects for a lot of different clients. You
            can find more about my list of clients on
            <a href="/portfolio">my portfolio</a>.
          </p>

          <h3>
            Director Technology &amp; Product for FYEO at ProSiebenSat.1 Digital
          </h3>
          <p>January 2021 – now</p>

          <h3>Director Technology for FYEO at ProSiebenSat.1 Digital</h3>
          <p>July 2020 – December 2020</p>

          <h3>Freelance Software Developer and Architect</h3>

          <p>April 2013 – July 2020</p>

          <ul>
            <li>Consulting for middle and large-scale web projects</li>
            <li>
              Analyses and improvement of new and existing software
              architectures
            </li>
            <li>
              Workshops for agencies to coach their developers and designers
            </li>
            <li>Scrum Master and technical project lead</li>
          </ul>

          <h3>Other</h3>

          <p>
            April 2010 – April 2013: Lead Frontend developer at /gebrüderheitz,
            Freiburg
            <br /> November 2011 – April 2014: Software developer and Co-Founder
            at colored.by
            <br />
            January 2019 – present: Software Developer and Co-Founder at ​Warhol
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

          <h2>Speaking</h2>
          <p>
            I am very happy to be invited to any conference in our scene and
            beyond.
          </p>

          <ul>
            <li>
              <a href="http://2015.modxpo.eu/">MODXpo</a> 2015; Munich, Germany
              – Workflow: Frontend Tooling – "Tool with it!"
            </li>
            <li>
              <a href="//socoded.com/">SoCoded</a> 2013; Hamburg, Germany –
              <a href="//drublic.github.io/socoded-init">
                Starting Front-End Projects
              </a>{" "}
              –<a href="//www.youtube.com/watch?v=a9IlYbgZbPk">Video</a>
            </li>
            <li>
              <a href="//2013.frontendconf.ch/">Frontend Conference</a> 2013;
              Zürich, Switzerland –
              <a href="//drublic.github.io/fec-styleguides/">
                Be Friends With You Designer And Style Guides – Updated
              </a>
              &bull;
              <a href="//www.ustream.tv/recorded/37954517">Video</a>
            </li>
            <li>
              <a href="//2013.beyondtellerrand.com/">Beyond Tellerrand</a> Side
              Stage 2013; Düsseldorf, Germany –
              <a href="//drublic.github.io/component-based-development/">
                Component Based Development
              </a>
            </li>
            <li>
              <a href="//2013.front-trends.com/">Front-Trends</a> 2013; Warsaw,
              Poland –
              <a href="//drublic.github.io/ft-styleguides">
                Be Friends With You Designer And Style Guides
              </a>{" "}
              &bull;
              <a href="//vimeo.com/68680321">Video</a>
            </li>
            <li>
              <a href="//uxmunich.com/">UX Munich</a> 2013; Munich, Germany –
              <a href="//slides.drublic.de/uxm-styleguides/">
                Be Friends With You Designer And Style Guides
              </a>{" "}
              &bull;
              <a href="//vimeo.com/65822198">Video</a>
            </li>
            <li>
              <a href="//takeoffconf.com/">TakeOff Conference</a> 2013; Lille,
              France –
              <a href="//slides.drublic.de/takeoff-awesome-code/">
                Writing Awesome Code – Extended Version
              </a>{" "}
              &bull;
              <a href="//www.youtube.com/watch?v=Rg_AW_FPWsY">Video</a>
            </li>
            {/* <li><a href="//fronteers.nl/congres/2012">Fronteers</a> 2012 Jam Session; Amsterdam, Netherlands – <a href="//slides.drublic.de/awesome-code/">Writing Awesome Code</a> &bull; <a href="//vimeo.com/51856235">Vimeo</a></li> */}
          </ul>
        </section>

        <section>
          <h2>Writings</h2>
          <p>
            I wrote some articles on the interwebz and offline. Here is a list.
            Hopefully more to come.
          </p>
          <ul>
            <li>
              <a href="http://workspiration.org/hans-christian-reinl">
                Interview: Work inspiration with Hans Christian Reinl
              </a>{" "}
              (Mar 5, 2015)
            </li>
            <li>
              <a href="https://medium.com/@drublic/css-naming-conventions-less-rules-more-fun-12af220e949b">
                CSS Naming Conventions: Less Rules, more Fun
              </a>{" "}
              on Medium.com (Jun 19, 2014)
            </li>
            <li>
              <a href="https://medium.com/programming-ideas-tutorial-and-experience/f98103d09ce1">
                A counter statement: Putting the CSS in the head
              </a>{" "}
              on Medium.com (Feb 3, 2014)
            </li>
            <li>
              <a href="https://www.webcoursesbangkok.com/blog/an-interview-with-hans-christian-reinl-web-developer-javascript-hacker-and-front-end-nerd/">
                Interview: Web developer, JavaScript hacker and front-end nerd
              </a>{" "}
              (Apr 21 2013)
            </li>
            <li>
              <a href="https://thenittygritty.co/shared-grunt-configuration">
                Shared Grunt Configuration
              </a>{" "}
              for The Nitty Gritty
            </li>
            <li>
              <a href="https://thenittygritty.co/reducing-boilerplate-code-front-end-init">
                Reducing Boilerplate Code in Front-End Projects
              </a>{" "}
              for The Nitty Gritty
            </li>
            <li>
              <a href="https://thenittygritty.co/decouple-css">
                Decoupling CSS from HTML with reusable modules
              </a>{" "}
              for The Nitty Gritty
            </li>
            <li>
              [de]
              <a href="//screengui.de/">SCREENGUIDE</a> – issue 15 – Neues für
              Webseitendrucker -
              <a href="//drublic.de/blog/printing-the-web/">
                Extended Version in English
              </a>
            </li>
            <li>
              [de]
              <a href="//screengui.de/">SCREENGUIDE</a> – issue 14 –
              Boilerplates – So starten Sie Ihre Projekte schneller und
              effizienter
            </li>
            <li>
              .net Magazine – issue 224 – .net HTML5 site of the month –
              Project: Haufe iDesk²
            </li>
            <li>
              [de]
              <a href="//maddesigns.de/box-sizing-1597.html">
                Box-Sizing – CSS3 Adventskalender
              </a>{" "}
              on maddesigns’ blog
            </li>
            <li>
              [de] Apple’s Navigation mit Flexbox – CSS3 Adventskalender in
              maddesigns’ blog
            </li>
          </ul>
          <p>
            Please
            <a href="/#hire-me">send me a mail</a> if you want me to write for
            you.
          </p>

          <h2>Other</h2>

          <ul>
            <li>
              Nomination as Young Developer Of The Year /
              <a href="//www.thenetawards.com/">.net-Awards 2013.</a>
            </li>
            <li>Certified Scrum Master</li>
            <li>
              Co-Organizer of
              <a href="//www.nightlybuild.io/">NightlyBuild.io</a> - a
              Web-developer conference in Cologne.
            </li>
            <li>
              Former Co-Organizer of
              <a href="//devsmeetup.de/">DevsMeetup</a> in Freiburg, Germany - a
              monthly Developer Usergroup.
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

      <div className="main container">
        <section>
          <h2>Core Skills</h2>

          <p>
            As a Frontend developer I worked on a lot of things over the years.
            Here are some skills I consider myself good at.
          </p>

          <ul>
            <li>
              Architecture
              <ul>
                <li>Component based development</li>
                <li>Micro-Service Oriented Architecture</li>
                <li>
                  Implementing Coding conventions and guidelines within teams
                </li>
                <li>
                  Building Pattern Libraries for better collaboration across
                  teams
                </li>
                <li>
                  Automation: Continuous Integration, build tools, regression
                  &amp; end-to-end testing
                </li>
              </ul>
            </li>
            <li>
              Development
              <ul>
                <li>JavaScript: TypeScript, React.js, Redux</li>
                <li>
                  Node.js: Deep knowledge of the platform, Express, TypeORM,
                  Sequelize
                </li>
                <li>Using TypeScript on the client- and server-side</li>
                <li>Working with Apache Kafka</li>
                <li>
                  Experience in Responsive ( web design | development | images |
                  UX )
                </li>
                <li>Accessibility and "SEO"</li>
              </ul>
            </li>
            <li>
              Working agile
              <ul>
                <li>
                  Setup and development of Scrum teams, experience with Scrum at
                  Scale
                </li>
                <li>Coaching for teams and change management</li>
                <li>Strong communication skills</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </main>
  </Layout>
);

export default Resume;