import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../lib/components/Layout";

const Podcasting = () => {
  return (
    <Layout title="What I want to do">
      <main id="content" className="main container" role="main">
        <h1>What I want to do</h1>
        <p>
          I am currently searching a freelance role as a developer and architect
          in an agile environment.
          <br />
          My preferred role would be to help you and your team{" "}
          <b>
            migrate a monolithic platform to a future-proof micro-service
            oriented environment
          </b>
          . I got a track record in doing projects like this.
          <br />I am strong in Frontend technologies, especially <b>
            React
          </b>{" "}
          and worked a lot with <b>Node.js</b>.<br />
          I am available as of mid of July 2018.
          <br />
          Preferably in the Cologne, Düsseldorf area.
          <br />
          Contact me via <a href="mailto:hi@hansreinl.de">hi@hansreinl.de</a>.
        </p>

        <p>
          <a href="/#hire-me" className="button">
            Contact me
          </a>
        </p>

        <figure className="image image--block">
          <Image
            src="/img/monolith-to-microservice.png"
            alt="What you have vs. what you want"
            width="813"
            height="299"
          />
        </figure>

        <h2>About me</h2>

        <p>
          I am a frontend architect and software engineer located in Cologne,
          Germany.
          <br />
          Agile development and Scrum influence my daily work since 2012. I have
          ten years of experience in developing scalable web applications using
          cutting edge technologies based on Micro-Service Oriented Architecture
          including HTML/CSS and object-oriented JavaScript (frontend and
          backend), React is my Framework of choice. Within the last couple of
          years I worked a lot with Node.js.
        </p>

        <p>
          I love architecting systems in a high-performance environment with a
          focus on frontend development. My passion in JavaScript and CSS is as
          strong as my belief in agile methodologies.
        </p>

        <p>
          <Link href="/resume" className="button">
            My Résumé
          </Link>

          <Link href="/portfolio" className="button">
            My Projects
          </Link>
        </p>
      </main>
    </Layout>
  );
};

export default Podcasting;
