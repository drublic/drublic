import SectionIntro from "./SectionIntro";

/** Google Calendar booking page for intro calls. */
export const BOOKING_URL = "https://calendar.app.google/m2JdVPdywhpyc3vS7";

const AdvisoryCta = () => (
  <section className="advisory-cta" aria-labelledby="advisory-cta-title">
    <div className="container container--large">
      <div className="advisory-cta__panel">
        <div className="advisory-cta__inner">
          <SectionIntro
            className="advisory-cta__copy"
            label="Work with me"
            title="Ready to Ship Production AI?"
            titleId="advisory-cta-title"
            titleClassName="advisory-cta__title"
            size="lg"
          >
            <p className="advisory-cta__body">
              I coach engineers and advise teams on RAG, MCP, guardrails, and
              agentic workflows: from strategy to hands-on implementation with
              Next.js and the Vercel AI SDK. Bootcamps, workshops, and
              conference talks included.
            </p>
          </SectionIntro>

          <div className="advisory-cta__actions">
            <a
              href={BOOKING_URL}
              title="Book a meeting in my calendar"
              className="button button--large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a meeting
            </a>
            <a
              href="mailto:hi@hansreinl.de"
              title="Get in touch"
              className="button button--large button--outline"
            >
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/hreinl/"
              title="LinkedIn"
              className="button button--large button--outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AdvisoryCta;
