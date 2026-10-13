import Link from "next/link";
import ArticleTeaserSmall from "./ArticleTeaserSmall";

const reading = [
  {
    slug: "spec-over-prompt-agentic-engineering",
    title: "Spec over Prompt: Agentic Engineering That Survives Production",
    date: "10.09.2026",
    image: "/assets/spec-over-prompt-agentic-engineering.jpg",
    tags: ["Agentic engineering", "OpenSpec", "Cursor"],
  },
  {
    slug: "ai-adoption-governance-roles-t3-cto-summit",
    title: "Beyond the Hype: AI Adoption, Governance, and Roles",
    date: "12.10.2026",
    image: "/assets/t3-cto-summit-ai-adoption-governance.jpg",
    tags: ["Ai", "Engineering leadership", "Governance"],
  },
  {
    slug: "agentic-engineering-across-the-software-development-lifecycle",
    title: "AI in Production: Agentic Engineering Across the SDLC",
    date: "08.05.2026",
    image: "/assets/ai-in-production-agentic-sdlc.jpg",
    tags: ["Agentic engineering", "SDLC", "Ai"],
  },
] as const;

const AdvisoryCta = () => (
  <>
    <div className="layout--darkened">
      <section className="container container--centered container--padded-bottom">
        <h2 className="typography--colored">
          AI-Native Systems &amp; Engineering Advisory
        </h2>

        <p className="typography--h4">
          I work with engineering teams on AI strategy, hands-on implementation
          with the Vercel AI SDK and Next.js, and advisory on engineering
          leadership and platform architecture. Available for conference talks
          and team workshops.
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
            href="https://www.linkedin.com/in/hansreinl/"
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

    <section
      className="advisory-reading container container--large"
      aria-labelledby="advisory-reading-heading"
    >
      <h2 id="advisory-reading-heading">Further reading</h2>

      <ul className="posts__list posts__list--no-divider posts__list--bound advisory-reading__list">
        {reading.map((post) => (
          <ArticleTeaserSmall
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            image={post.image}
            tags={[...post.tags]}
          />
        ))}
      </ul>

      <p className="text--centered text--padded">
        <Link href="/blog/" className="button">
          Read more on my Blog
        </Link>
      </p>
    </section>
  </>
);

export default AdvisoryCta;
