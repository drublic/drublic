import Link from "next/link";
import React from "react";
import Layout from "../lib/components/Layout";

const WorkWithMe = () => {
  return (
    <Layout
      title="Work with me"
      description="Hans Christian Reinl offers AI-native systems advisory, team workshops, and conference speaking. Get in touch for agentic engineering, platform architecture, and engineering leadership."
    >
      <main id="content" className="main container" role="main">
        <h1>Work with me</h1>
        <p>
          I am an AI-Native Systems Architect &amp; Engineering Advisor based in
          Cologne, Germany. I help engineering teams and companies transition
          from legacy architectures to AI-native product development.
        </p>

        <h2>What I offer</h2>
        <ul>
          <li>
            <b>AI-Native Systems Advisory</b> — Strategy, architecture, and
            hands-on implementation of production-ready AI applications with
            Next.js, TypeScript, and the Vercel AI SDK.
          </li>
          <li>
            <b>Workshops &amp; Team Training</b> — Hands-on sessions on RAG
            implementation, MCP integration, agentic workflows, and modern AI
            development practices.
          </li>
          <li>
            <b>Conference Speaking</b> — Keynotes and talks on implementing
            agentic engineering across the SDLC, RAG implementation, MCP,
            AI-assisted development, engineering leadership, and platform
            architecture.{" "}
            <Link href="/about/speaking">See my speaking history</Link>.
          </li>
          <li>
            <b>Engineering Leadership Advisory</b> — Metrics programs, team
            scaling, and organizational design for engineering organizations.
          </li>
        </ul>

        <div className="button-group">
          <a href="mailto:hi@hansreinl.de" className="button">
            Get in touch
          </a>
          <Link href="/resume" className="button button--outline">
            My Résumé
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default WorkWithMe;
