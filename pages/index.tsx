import Layout from "../lib/components/Layout";
import Clients from "../lib/components/Clients";
import IndexArticles from "../lib/components/IndexArticles";
import IndexWorkingDraft from "../lib/components/IndexWorkingDraft";
import AudioPlayer from "../lib/components/AudioPlayer";
import { TransitionLink } from "../lib/components/TransitionLink";
import { PageTransition } from "../lib/components/PageTransition";
import { POSTS_DIR, getPosts } from "./api/posts";

const Index = ({ posts }) => {
  return (
    <Layout>
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
                <p>
                  Hi, I'm Hans. I'm an Engineering Leader passionate about
                  building high-performing teams and driving technical
                  excellence.
                </p>
                <p className="claim__desc--small">
                  AI Engineering __ Engineering Leadership __ Software
                  Architecture __ Mentor __ Product Management
                </p>
              </div>

              <p>
                <TransitionLink
                  href="/resume"
                  className="button"
                  title="My skills, my background"
                  data-ga-category="Resume"
                  data-ga-action="Resume"
                  data-ga-label="Resume"
                  style={{ marginTop: "1rem" }}
                >
                  Learn more about me
                </TransitionLink>
              </p>
            </div>
          </section>
        </PageTransition>

        <PageTransition delay={300}>
          <IndexArticles posts={posts} />
        </PageTransition>

        <PageTransition delay={400}>
          <div className="layout--darkened">
            <section className="container container--centered container--padded-bottom">
              <h2 className="typography--colored">Connect on LinkedIn</h2>

              <p className="typography--h4">
                Receive regular updates of my thoughts and achievements unlocked
                by my teams and me.
              </p>

              <p>
                <a
                  href="https://www.linkedin.com/in/hreinl/"
                  title="LinkedIn"
                  className="button button--outline"
                  target="_blank"
                >
                  Connect on LinkedIn
                </a>
              </p>
            </section>
          </div>
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
