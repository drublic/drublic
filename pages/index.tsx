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
      description="Hans Christian Reinl — AI-Native Systems Architect & Engineering Advisor in Cologne. Building AI-native products, advising engineering organizations, speaking on RAG, MCP, and agentic engineering. Co-host of Working Draft."
    >
      <main id="content" className="main" role="main">
        <PageTransition delay={100}>
          <div className="container container--large">
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
                  from legacy architectures to AI-native products — bridging
                  high-scale platform engineering with the agentic future.
                </p>
                <div className="claim__tags">
                  {[
                    "AI-Native Systems",
                    "Agentic Engineering",
                    "Engineering Advisory",
                    "Conference Speaking",
                    "Engineering Leadership",
                  ].map((label) => (
                    <span key={label} className="tag">
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="button-group">
                <TransitionLink
                  href="/resume"
                  className="button"
                  title="My skills, my background"
                  data-ga-category="Resume"
                  data-ga-action="Resume"
                  data-ga-label="Resume"
                >
                  Learn more about me
                </TransitionLink>
                <a
                  href="mailto:hi@hansreinl.de"
                  className="button button--outline"
                  title="Get in touch for consulting or speaking"
                >
                  Work with me
                </a>
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
