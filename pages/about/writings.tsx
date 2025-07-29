import React from "react";
import Layout from "../../lib/components/Layout";

const Resume = () => (
  <Layout title="Public Speaking">
    <main id="content" className="main" role="main">
      <section className="container">
        <h1>Writings</h1>

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
            [de] <a href="//screengui.de/">SCREENGUIDE</a> – issue 15 – Neues
            für Webseitendrucker -
            <a href="//hansreinl.de/blog/printing-the-web/">
              Extended Version in English
            </a>
          </li>
          <li>
            [de] <a href="//screengui.de/">SCREENGUIDE</a> – issue 14 –
            Boilerplates – So starten Sie Ihre Projekte schneller und
            effizienter
          </li>
          <li>
            .net Magazine – issue 224 – .net HTML5 site of the month – Project:
            Haufe iDesk²
          </li>
          <li>
            [de]{" "}
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
          Please <a href="mailto:hi@hansreinl.de">send me a mail</a> if you want{" "}
          me to write for you.
        </p>
      </section>

      <div
        className="section--fullsize section--ratio"
        style={{ backgroundImage: "url(/img/speaking.jpg)" }}
      ></div>
    </main>
  </Layout>
);

export default Resume;
