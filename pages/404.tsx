import Link from "next/link";
import React from "react";
import Layout from "../lib/components/Layout";
import PageHeader from "../lib/components/PageHeader";
import PageShell from "../lib/components/PageShell";

const NotFound = () => (
  <Layout
    title="Page Not Found"
    description="The page you were looking for does not exist."
    noIndex
  >
    <main
      id="content"
      className="main"
      role="main"
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "calc(100vh - 180px - 200px)",
      }}
    >
      <PageShell>
        <PageHeader
          label="404"
          title="Page Not Found"
          lead={
            <p>
              Sorry, but the page you were trying to view does not exist.{" "}
              <Link href="/">Back to the homepage</Link>
            </p>
          }
        />
      </PageShell>
    </main>
  </Layout>
);

export default NotFound;
