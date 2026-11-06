import Link from "next/link";
import React from "react";
import Layout from "../lib/components/Layout";

const WorkWithMe = () => {
  return (
    <Layout
      title="Work with me"
      description="Hans Christian Reinl offers AI Software Engineering coaching, AI-native systems advisory, team workshops, and conference speaking. Get in touch for agentic engineering, RAG, MCP, and engineering leadership."
    >
      <main id="content" className="main container" role="main">
        <h1>Work with me</h1>
        <p>
          I am an AI-Native Systems Architect, Engineering Advisor, and AI
          Software Engineering Coach based in Cologne, Germany. I help
          engineering teams ship production-ready AI — and teach the patterns
          that keep those systems reliable.
        </p>

        <h2>What I offer</h2>
        <ul>
          <li>
            <b>AI Software Engineering Coaching</b> — Hands-on coaching for
            engineers and bootcamp participants on production AI patterns:
            resilient RAG pipelines, MCP integrations, vector stores,
            guardrails, and agentic engineering across the software development
            lifecycle. I coach at Digitale Leute School and neuefische (English
            and German), and run the same curriculum as team enablement inside
            companies.
          </li>
          <li>
            <b>AI-Native Systems Advisory</b> — Strategy, architecture, and
            hands-on implementation of production-ready AI applications with
            Next.js, TypeScript, and the Vercel AI SDK.
          </li>
          <li>
            <b>Team Workshops</b> — Focused sessions on RAG implementation, MCP
            integration, spec-driven agentic workflows, and modern AI
            development practices for existing engineering teams.
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
