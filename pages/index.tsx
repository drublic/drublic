import Layout from "../lib/components/Layout";
import Clients from "../lib/components/Clients";
import IndexArticles from "../lib/components/IndexArticles";
import IndexWorkingDraft from "../lib/components/IndexWorkingDraft";
import AdvisoryCta from "../lib/components/AdvisoryCta";
import AudioPlayer from "../lib/components/AudioPlayer";
import { TransitionLink } from "../lib/components/TransitionLink";
import { PageTransition } from "../lib/components/PageTransition";
import { POSTS_DIR, getPosts } from "./api/posts";

const Index = ({ posts }) => {
  return (
    <Layout
      title="AI-Native Systems Architect & Engineering Advisor - Cologne"
      description="Hans Christian Reinl — AI-Native Systems Architect, Engineering Advisor, and AI Software Engineering Coach in Cologne. Building AI-native products, coaching teams on RAG, MCP, and agentic engineering. Co-host of Working Draft."
    >
      <main id="content" className="main" role="main">
        <PageTransition delay={100}>
          <div className="container container--large claim__audio">
            <AudioPlayer src="/hi.wav" />
          </div>
        </PageTransition>

        <PageTransition delay={200}>
          <section className="claim">
            <div className="container">
              <div className="claim__desc">
                <h1 className="visuallyhidden">
                  Hans Reinl — AI-Native Systems Architect &amp; Engineering
                  Advisor
                </h1>
                <p>
                  Hi, I&apos;m Hans. I help engineering organizations transition
                  from legacy architectures to AI-native products and coach
                  teams on production AI patterns: RAG, MCP, guardrails, and
                  agentic engineering across the SDLC.
                </p>
                <div className="claim__tags">
                  {[
                    "AI-Native Systems",
                    "AI Engineering Coaching",
                    "Agentic Engineering",
                    "Engineering Advisory",
                    "Conference Speaking",
                  ].map((label) => (
                    <span key={label} className="tag">
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="button-group">
                <TransitionLink
                  href="/what-i-want-to-do"
                  className="button"
                  title="Advisory, coaching, and speaking"
                  data-ga-category="WorkWithMe"
                  data-ga-action="WorkWithMe"
                  data-ga-label="WorkWithMe"
                >
                  Work with me
                </TransitionLink>
                <TransitionLink
                  href="/resume"
                  className="button button--outline"
                  title="My skills, my background"
                  data-ga-category="Resume"
                  data-ga-action="Resume"
                  data-ga-label="Resume"
                >
                  Learn more about me
                </TransitionLink>
              </div>
            </div>
          </section>
        </PageTransition>

        <PageTransition delay={300}>
          <IndexArticles posts={posts} />
        </PageTransition>

        <PageTransition delay={400}>
          <AdvisoryCta />
        </PageTransition>

        <PageTransition delay={500}>
          <IndexWorkingDraft />
        </PageTransition>

        <PageTransition delay={600}>
          <section className="container container--large container--centered">
            <h2>Companies I worked for</h2>

            <div className="work__for">
              <Clients />
            </div>
          </section>
        </PageTransition>
      </main>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const posts = await getPosts(false, POSTS_DIR);

  return {
    props: {
      posts,
    },
  };
};

export default Index;
