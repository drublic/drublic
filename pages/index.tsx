import Layout from "../lib/components/Layout";
import Clients from "../lib/components/Clients";
import IndexArticles from "../lib/components/IndexArticles";
import IndexWorkingDraft, {
  WD_HOME_LIMIT,
} from "../lib/components/IndexWorkingDraft";
import AdvisoryCta from "../lib/components/AdvisoryCta";
import EngagementSteps from "../lib/components/EngagementSteps";
import HomeHero from "../lib/components/HomeHero";
import PathwayCards from "../lib/components/PathwayCards";
import StoryModule from "../lib/components/StoryModule";
import { PageTransition } from "../lib/components/PageTransition";
import { POSTS_DIR, getPosts } from "./api/posts";
import { getCachedWdPosts } from "./api/wd-posts";

const Index = ({ posts, wdPosts }) => {
  return (
    <Layout
      title="AI-Native Systems Architect & Engineering Advisor - Cologne"
      description="Hans Christian Reinl, AI-Native Systems Architect, Engineering Advisor, and AI Software Engineering Coach in Cologne. Building AI-native products, coaching teams on RAG, MCP, and agentic engineering. Co-host of Working Draft."
    >
      <main id="content" className="main main--home" role="main">
        <HomeHero />

        <PageTransition delay={100}>
          <StoryModule />
        </PageTransition>

        <section
          className="work__for-section work__for-section--compact"
          aria-labelledby="companies-heading"
        >
          <h2 id="companies-heading">Companies I Worked For</h2>

          <div className="work__for">
            <Clients />
          </div>
        </section>

        <PageTransition delay={160}>
          <PathwayCards />
        </PageTransition>

        <PageTransition delay={240}>
          <IndexArticles posts={posts} />
        </PageTransition>

        <PageTransition delay={320}>
          <AdvisoryCta />
        </PageTransition>

        <PageTransition delay={380}>
          <EngagementSteps />
        </PageTransition>

        <PageTransition delay={440}>
          <IndexWorkingDraft initialPosts={wdPosts} />
        </PageTransition>

      </main>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const [posts, wdPosts] = await Promise.all([
    getPosts(false, POSTS_DIR),
    getCachedWdPosts(),
  ]);

  return {
    props: {
      // Only the three teasers are rendered — keep the page payload small.
      posts: posts.slice(0, 3),
      wdPosts: wdPosts.slice(0, WD_HOME_LIMIT),
    },
    // Hourly refresh picks up new podcast episodes without a redeploy.
    revalidate: 3600,
  };
};

export default Index;
