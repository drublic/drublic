import Image from "next/image";
import Link from "next/link";
import AdvisoryCta from "../lib/components/AdvisoryCta";
import Layout from "../lib/components/Layout";
import PageHeader from "../lib/components/PageHeader";
import PageShell from "../lib/components/PageShell";
import SectionIntro from "../lib/components/SectionIntro";
import JsonLd, {
  PERSON_ID,
  absoluteUrl,
  breadcrumbJsonLd,
} from "../lib/components/JsonLd";

const Resume = () => {
  return (
    <Layout
      title="About Me — AI-Native Systems Architect & Engineering Advisor"
      description="About Hans Christian Reinl — AI-Native Systems Architect, Engineering Advisor, and AI Software Engineering Coach in Cologne. 15+ years building high-scale platforms (Joyn 11M+ MAU). Coach at Digitale Leute School and neuefische. Founder of N+One."
    >
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            url: absoluteUrl("/resume"),
            mainEntity: { "@id": PERSON_ID },
          },
          breadcrumbJsonLd([{ name: "About me", path: "/resume" }]),
        ]}
      />
      <main id="content" className="main resume" role="main">
        <PageShell className="page-shell--header">
          <PageHeader
            label="Background"
            title="About Me"
            lead={
              <p>
                AI-Native Systems Architect, Engineering Advisor, and AI
                Software Engineering Coach in Cologne. Fifteen-plus years
                building high-scale platforms.
              </p>
            }
          />
        </PageShell>

        <div className="resume-card-band">
          <div className="container container--large">
            <div className="resume-card">
              <div className="resume-card__inner">
                <div className="resume-card__photo">
                  <Image
                    src="/img/me.jpg"
                    alt="A picture of Hans Christian Reinl"
                    width={750}
                    height={750}
                  />
                </div>

                <header className="resume-card__content">
                  <h2 className="resume-card__name">Hans Christian Reinl</h2>
                  <p className="resume-card__title">
                    AI-Native Systems Architect &amp; Engineering Advisor
                  </p>

                  <address className="resume-card__contact">
                    <span>Cologne, Germany</span>
                    <span className="resume-card__contact-links">
                      <a href="https://www.hansreinl.de/">hansreinl.de</a>
                      <a href="mailto:hi@hansreinl.de">hi@hansreinl.de</a>
                    </span>
                  </address>

                  <div className="resume-card__actions button-group">
                    <Link
                      href="/about/speaking"
                      className="button"
                      title="Speaking engagements"
                    >
                      Speaking
                    </Link>
                    <Link
                      href="/podcasting"
                      className="button button--outline"
                      title="Podcasting"
                    >
                      Podcasting
                    </Link>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </div>

        <PageShell className="page-shell--follow">
          <section>
            <h2>Summary</h2>

            <p>
              AI-Native Systems Architect &amp; Engineering Advisor with 15+
              years of experience building high-scale platforms (11M+ MAU). I
              help engineering organisations transition from legacy
              architectures to production-ready AI products, and advise on
              technical strategy at scale. Hands-on with agentic engineering,
              cloud-native systems, and modern web stacks; proven at defining
              engineering vision, leading transformation, and turning complex
              architectures into business value. As a consultant, coach, and
              co-host of the Working Draft Podcast, I synthesise technical depth
              into clear, actionable guidance.
            </p>
          </section>

          <section aria-labelledby="work-heading">
            <h2 id="work-heading">Work</h2>

            <ol className="resume-timeline resume-timeline--compact">
              <li className="resume-timeline__item">
                <span className="resume-timeline__dot" aria-hidden="true" />
                <div className="resume-timeline__year">2013–20</div>
                <div className="resume-timeline__body">
                  <strong className="resume-timeline__title">
                    Software Architect &amp; Engineering Manager
                  </strong>
                  <span className="resume-timeline__meta">
                    Self-employed · AXA, Vaillant, REWE digital
                  </span>
                </div>
                <div className="resume-timeline__logos" aria-label="Clients">
                  <img
                    className="resume-logo resume-logo--mark"
                    src="/img/work/axa.svg"
                    alt="AXA"
                    width={277}
                    height={277}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    className="resume-logo resume-logo--wide"
                    src="/img/work/vaillant.svg"
                    alt="Vaillant"
                    width={576}
                    height={164}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    className="resume-logo resume-logo--wide"
                    src="/img/work/rewe.svg"
                    alt="REWE"
                    width={725}
                    height={235}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </li>

              <li className="resume-timeline__item">
                <span className="resume-timeline__dot" aria-hidden="true" />
                <div className="resume-timeline__year">2020–21</div>
                <div className="resume-timeline__body">
                  <strong className="resume-timeline__title">
                    Director Technology &amp; Product · FYEO
                  </strong>
                  <span className="resume-timeline__meta">ProSiebenSat.1</span>
                </div>
                <div
                  className="resume-timeline__logos"
                  aria-label="ProSiebenSat.1"
                >
                  <Image
                    className="resume-logo resume-logo--wide"
                    src="/img/work/p7s1.png"
                    alt="ProSiebenSat.1"
                    width={600}
                    height={120}
                  />
                </div>
              </li>

              <li className="resume-timeline__item">
                <span className="resume-timeline__dot" aria-hidden="true" />
                <div className="resume-timeline__year">2021–25</div>
                <div className="resume-timeline__body">
                  <strong className="resume-timeline__title">
                    Vice President Engineering · Joyn
                  </strong>
                  <span className="resume-timeline__meta">
                    ProSiebenSat.1 · 11M MAU
                  </span>
                </div>
                <div
                  className="resume-timeline__logos"
                  aria-label="Joyn and ProSiebenSat.1"
                >
                  <img
                    className="resume-logo resume-logo--wide"
                    src="/img/work/joyn.svg"
                    alt="Joyn"
                    width={68}
                    height={30}
                    loading="lazy"
                    decoding="async"
                  />
                  <Image
                    className="resume-logo resume-logo--wide"
                    src="/img/work/p7s1.png"
                    alt="ProSiebenSat.1"
                    width={600}
                    height={120}
                  />
                </div>
              </li>

              <li className="resume-timeline__item">
                <span className="resume-timeline__dot" aria-hidden="true" />
                <div className="resume-timeline__year">since 2025</div>
                <div className="resume-timeline__body">
                  <strong className="resume-timeline__title">
                    AI Advisor · Founder N+One · Coaching
                  </strong>
                  <span className="resume-timeline__meta">
                    Fiberfone · N+One · Digitale Leute School · neuefische
                  </span>
                </div>
                <div
                  className="resume-timeline__logos"
                  aria-label="Current stations"
                >
                  <Image
                    className="resume-logo resume-logo--wide"
                    src="/img/work/fiberfone.png"
                    alt="Fiberfone"
                    width={500}
                    height={116}
                  />
                  <img
                    className="resume-logo resume-logo--mark"
                    src="/img/work/n-plus.svg"
                    alt="N+One"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    className="resume-logo resume-logo--mark"
                    src="/img/work/dl-school.svg"
                    alt="Digitale Leute School"
                    width={64}
                    height={64}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </li>
            </ol>

            <p className="resume-work-detail">Selected roles</p>

            <div className="resume-role__head">
              <h3>AI-Native Systems Architect &amp; Engineering Advisor</h3>
            </div>
            <p className="resume-role__date">
              July 2025 – Present &bull; Self-employed
            </p>

            <p>
              Helping engineering organizations transition from legacy
              architectures to AI-native products. I don&apos;t just consult; I
              bridge the gap between high-scale architecture and the agentic
              future. Ran in parallel with Fractional CTO at Fiberfone until
              February 2026.
            </p>

            <ul>
              <li>
                AI &amp; Machine Learning: Hands-on architecture and
                implementation using Vercel AI SDK, Next.js, Supabase, and
                serverless architectures to build production-ready AI
                applications.
              </li>
              <li>
                Reference Architecture: Designed and implemented a full-stack,
                conversational coach (<a href="https://nplusone.app/">N+One</a>)
                based on Next.js and Vercel Edge Network for personalized
                training, demonstrating expertise in performant serverless
                applications and AI-powered experiences.
              </li>
              <li>
                Agentic Systems &amp; Data Processing: Developed agentic-led,
                low-code crawling and indexing processes for fiber internet
                network information, showcasing proficiency in automation, LLM
                integration, and data structuring.
              </li>
            </ul>

            <div className="resume-role__head">
              <h3>Founder at N+One</h3>
              <div className="resume-role__logos">
                <img
                  className="resume-logo resume-logo--mark"
                  src="/img/work/n-plus.svg"
                  alt=""
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <p className="resume-role__date">April 2026 – Present</p>

            <p>
              Building an AI-native coaching platform for cyclists: a
              conversational Dynamic Coach that turns training and recovery data
              into the next session decision, available daily instead of a
              static calendar. Designed and shipped a full-stack, chat-first
              coaching experience on Next.js and the Vercel Edge Network, with
              agentic workflows that adapt plans in real time to readiness,
              load, and life constraints. Built integrations with Garmin,
              Strava, Whoop, and intervals.icu so sleep, HRV, and ride data feed
              coaching recommendations without manual data entry.
            </p>

            <div className="resume-role__head">
              <h3>Coach at Digitale Leute School &amp; neuefische</h3>
              <div className="resume-role__logos">
                <img
                  className="resume-logo resume-logo--mark"
                  src="/img/work/dl-school.svg"
                  alt=""
                  width={64}
                  height={64}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <p className="resume-role__date">March 2026 – Present</p>

            <p>
              Coaching AI Software Engineering and Vibe Coding bootcamp
              participants through 3-month courses in English and German on
              production AI patterns: resilient RAG pipelines, MCP integrations,
              vector stores, guardrails, and agentic engineering across the
              software development lifecycle — including spec-driven workflows
              with OpenSpec and Cursor.
            </p>

            <div className="resume-role__head">
              <h3>Fractional CTO at Fiberfone GmbH</h3>
              <div className="resume-role__logos">
                <Image
                  className="resume-logo resume-logo--wide"
                  src="/img/work/fiberfone.png"
                  alt=""
                  width={500}
                  height={116}
                />
              </div>
            </div>
            <p className="resume-role__date">October 2023 – February 2026</p>

            <ul>
              <li>
                Directed technical strategy and investor relations while leading
                the development of a 23M+ data point infrastructure for
                automated location-based order management.
              </li>
              <li>
                Architected and implemented agentic AI systems and low-code
                crawling processes using Vercel AI SDK and Next.js.
              </li>
              <li>
                Managed external partners and successfully launched the core
                checkout experience for the brand&apos;s comparison portal.
              </li>
            </ul>

            <div className="resume-role__head">
              <h3>Vice President Engineering at ProSiebenSat.1</h3>
              <div className="resume-role__logos">
                <img
                  className="resume-logo resume-logo--wide"
                  src="/img/work/joyn.svg"
                  alt=""
                  width={68}
                  height={30}
                  loading="lazy"
                  decoding="async"
                />
                <Image
                  className="resume-logo resume-logo--wide"
                  src="/img/work/p7s1.png"
                  alt=""
                  width={600}
                  height={120}
                />
              </div>
            </div>
            <p className="resume-role__date">October 2021 – June 2025</p>

            <p>
              As Vice President Engineering, I was responsible for the strategic
              development and maintenance of the customer facing applications of
              the multi-tenant Streaming Platform{" "}
              <a href="https://joyn.de/">Joyn</a>, serving 11 million monthly
              active users.
            </p>

            <ul>
              <li>
                Led six distributed engineering teams (55 individuals) including
                Engineering Managers and Staff Engineers, reporting to the CTO.
                Established a collaborative, innovation-friendly, and agile
                culture.
              </li>
              <li>
                Directed engineering vision and budget planning. Led change
                management and transformation during the Joyn and ProSiebenSat.1
                merger.
              </li>
              <li>
                Created standardized reference architectures and deployment
                playbooks for multi-tenant platform, accelerating tenant
                rollouts and ensuring cross-platform consistency.
              </li>
              <li>
                Established data-driven decision-making with product-led
                metrics, resulting in ~4% increase in user engagement and 20%
                reduction in technical debt. Utilized DORA metrics and Core Web
                Vitals.
              </li>
              <li>
                Successfully introduced AI engineering practices by piloting
                GitHub Copilot, enhancing developer productivity and code
                quality.
              </li>
            </ul>

            <div className="resume-role__head">
              <h3>Director Technology &amp; Product, FYEO at ProSiebenSat.1</h3>
              <div className="resume-role__logos">
                <Image
                  className="resume-logo resume-logo--wide"
                  src="/img/work/p7s1.png"
                  alt=""
                  width={600}
                  height={120}
                />
              </div>
            </div>
            <p className="resume-role__date">July 2020 – September 2021</p>

            <p>
              As Director of Technology &amp; Product, I led the development and
              maintenance of FYEO, a podcasting app with over 1.6 million
              formats and 40 million episodes.
            </p>

            <ul>
              <li>
                Built and led an agile, cross-functional team of 13 members,
                overseeing career development and recruitment.
              </li>
              <li>
                Led transformation by replacing external agency with internal
                development and design personnel, demonstrating change
                management capabilities.
              </li>
              <li>
                Developed and aligned business strategy with business owners and
                management, reporting to the CTO.
              </li>
              <li>
                Implemented engineering and product vision, executed product
                roadmap, and established data-driven planning processes.
              </li>
              <li>
                Significantly increased KPIs including retention, reach, and
                technical stability, improving audience engagement.
              </li>
            </ul>
          </section>
        </PageShell>

        <figure className="section--fullsize">
          <Image
            src="/img/discussions.jpg"
            alt="Speaking and Discussions"
            width={1866}
            height={832}
            className="resume-discussions__image w-full h-full object-cover mt-1"
          />

          <figcaption className="image__caption">
            <span className="image__caption__copywrite">
              Droidcon & Fluttercon at The Cube, Berlin, 24-26 September 2025;
              www.tellingphotography.com
            </span>
          </figcaption>
        </figure>

        <div className="container">
          <section>
            <h3>Software Architect &amp; Engineer, Engineering Manager</h3>

            <p>April 2013 – June 2020 &bull; Self-employed</p>

            <p>
              I worked on projects for clients such as AXA, REWE digital,
              Vaillant Group and others where I served as Software Architect,
              Engineer and Engineering Manager.
            </p>

            <div className="flex space-between mt-1">
              <h4 className="mt-0 mb-0">
                AXA Deutschland, Lead Software Engineer and Software Architect
              </h4>
              <p className="mb-0">July 2018 – September 2019</p>
            </div>

            <p className="mt-0">
              Led the development and growth of an engineering team responsible
              for building online insurance tariff calculators for AXA
              Deutschland in a strongly regulated environment. Developed
              services using Node.js and Java, guided adoption of
              React/TypeScript, and architected deployments on Kubernetes and
              Docker — increasing annual application delivery velocity from 2 to
              6. Expanded the team from four to 14 developers.
            </p>

            <div className="flex space-between mt-1">
              <h4 className="mt-0 mb-0">REWE digital, Software Engineer</h4>
              <p className="mb-0">July 2017 – June 2018</p>
            </div>
            <p className="mt-0">
              Built microservices with Node.js, transforming the backend from
              on-premise to cloud-native on Google Cloud Platform using
              Kubernetes and Docker. Implemented Apache Kafka for data streaming
              and employed a micro-frontend architecture with React.js.
            </p>

            <div className="flex space-between mt-1">
              <h4 className="mt-0 mb-0">
                Fashionette, Engineering Manager and Software Architect
              </h4>
              <p className="mb-0">November 2015 – August 2016</p>
            </div>
            <p className="mt-0">
              Spearheaded the transformation of the monolithic e-commerce
              platform to a scalable microservice architecture. Led the relaunch
              resulting in market rollouts across Europe, UK and US. Expanded
              the team to 14 software engineers.
            </p>

            <div className="flex space-between mt-1">
              <h4 className="mt-0 mb-0">Vaillant Group, Front-end Architect</h4>
              <p className="mb-0">October 2013 – January 2015</p>
            </div>
            <p className="mt-0">
              Played a pivotal role in shaping the online presence for Vaillant
              Group and its subsidiaries. Contributed to expanding a team from
              seven to 40 members in a Scrum environment and pioneered an agile
              transformation within the organization.
            </p>

            <h3>Other</h3>

            <p>
              January 2019 – July 2021: Software Developer and Co-Founder at{" "}
              <a href="https://warhol.io/">Warhol</a>
              <br />
              November 2011 – April 2014: Software Developer and Co-Founder at
              colored.by
              <br />
              April 2010 – April 2013: Lead Front-end Developer at
              /gebrüderheitz, Freiburg
            </p>
          </section>
        </div>

        <section
          className="resume-influence"
          aria-labelledby="resume-influence-heading"
        >
          <div className="resume-influence__inner">
            <SectionIntro
              className="resume-influence__copy"
              label="Community"
              title="Industry Influence & Collaborative Initiatives"
              titleId="resume-influence-heading"
              titleClassName="resume-influence__title"
            >
              <p>
                <b>Former Mentor at The Mentoring Club</b>:{" "}
                <a href="https://www.mentoring-club.com/">The Mentoring Club</a>{" "}
                is an open community supporting people keen to learn, grow and
                develop. I advised mentees on Engineering Management &amp;
                Leadership, career building, Agile methodologies and more.{" "}
                <Link href="/blog/mentoring-club">More information here</Link>.
              </p>

              <p>
                <b>Co-host of Working Draft Podcast</b>: Strong influence on the
                German-speaking community while being a member of the weekly
                web-development and web-news podcast{" "}
                <a href="https://workingdraft.de/">Working Draft</a> since 2011.
              </p>

              <p>
                <b>AI Software Engineering Coach</b>: Coaching bootcamp
                participants at Digitale Leute School and neuefische on
                production AI patterns — RAG, MCP, guardrails, and agentic
                engineering across the SDLC.{" "}
                <Link href="/work-with-me">Work with me</Link>.
              </p>

              <p>
                <b>Speaking engagements at conferences and webinars</b>: topics
                including Agentic Engineering, AI adoption and governance,
                Engineering Metrics, Design Systems and Component Based
                Development (e.g. code.talks Hamburg, Digitale Leute Summit AI
                Deep Dive Day, t3 CTO Summit, LeadingEng Berlin, Front-Trends in
                Warsaw and Frontend Conference in Zürich).{" "}
                <Link href="/about/speaking">More about my speaking</Link>.
              </p>
            </SectionIntro>

            <div className="resume-influence__visual">
              <figure className="resume-influence__field">
                <Image
                  src="/img/speaking-discussion.jpg"
                  alt="Speaking and discussion at Droidcon and Fluttercon Berlin"
                  width={1200}
                  height={1800}
                  className="resume-influence__image"
                />
                <figcaption className="resume-influence__caption">
                  Droidcon &amp; Fluttercon at The Cube, Berlin, 24–26 September
                  2025; www.tellingphotography.com
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <AdvisoryCta />
      </main>
    </Layout>
  );
};

export default Resume;
