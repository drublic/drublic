import React from "react";
import Layout from "../lib/components/Layout";

const Info = () => (
  <Layout title="Information page">
    <main id="main" className="main container" role="main">
      <h1>Information page</h1>

      <p>
        Here is some information about me in case you need it.
        <br />
        Please <a href="/#hire-me">let me know</a> if anything essential is
        missing.
      </p>

      <h2>Biography</h2>
      <p>
        <strong>Very short:</strong> Front-end developer, contributor to{" "}
        <a href="http://html5boilerplate.com/">HTML5 Boilerplate</a>, co-host{" "}
        <a href="http://workingdraft.de/">Working Draft</a>.
      </p>
      <p>
        <strong>Long:</strong> Hans Christian Reinl is a Front-End Developer
        contributing to the{" "}
        <a href="http://html5boilerplate.com/">HTML5 Boilerplate</a> as a member
        of the core development team and other{" "}
        <a href="https://github.com/drublic">Open Source projects</a>. He is
        co-host of the weekly web-news podcast{" "}
        <a href="http://workingdraft.de/">Working Draft</a>.
      </p>

      <h2>Links</h2>
      <p>
        <strong>Website:</strong> <a href="//hansreinl.de/">hansreinl.de</a>
        <br />
        <strong>GitHub:</strong> <a href="//github.com/drublic">drublic</a>
        <br />
        <strong>Twitter:</strong> <a href="//twitter.com/drublic">@drublic</a>
      </p>

      <h2>Misc</h2>
      <p>Sometimes you might want to know this stuff, too:</p>
      <p>
        I live in Cologne, Germany.
        <br />
        The nearest airport is Cologne Bonn Airport (CGN).
        <br />
        My t-shirt size is Large.
      </p>
    </main>
  </Layout>
);

export default Info;
