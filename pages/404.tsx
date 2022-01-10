import React from "react";
import Layout from "../lib/components/Layout";

const Error = () => (
  <Layout title="Imprint">
    <main
      id="content"
      className="main container"
      role="main"
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "calc(100vh - 180px - 200px)",
      }}
    >
      <div>
        <h1>Page Not Found</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
      </div>
    </main>
  </Layout>
);

export default Error;
