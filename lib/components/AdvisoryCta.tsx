const AdvisoryCta = () => (
  <div className="layout--darkened">
    <section className="container container--centered container--padded-bottom">
      <h2 className="typography--colored">
        AI Coaching, Systems &amp; Engineering Advisory
      </h2>

      <p className="typography--h4">
        I coach engineers on production AI patterns — RAG, MCP, guardrails, and
        agentic workflows — and work with teams on AI strategy, hands-on
        implementation with the Vercel AI SDK and Next.js, and engineering
        leadership. Available for bootcamp-style coaching, team workshops, and
        conference talks.
      </p>

      <div className="button-group button-group--centered">
        <a
          href="mailto:hi@hansreinl.de"
          title="Get in touch"
          className="button"
        >
          Get in touch
        </a>
        <a
          href="https://www.linkedin.com/in/hreinl/"
          title="LinkedIn"
          className="button button--outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  </div>
);

export default AdvisoryCta;
