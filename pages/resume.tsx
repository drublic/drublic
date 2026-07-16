import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import AdvisoryCta from "../lib/components/AdvisoryCta";
import Layout from "../lib/components/Layout";

const MAX_TILT = 8;
/** Extra pixels around the card that still count as "near" for the glow. */
const NEAR_PADDING = 120;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const Resume = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const offsetX = clamp(
        (e.clientX - centerX) / (rect.width / 2),
        -1,
        1
      );
      const offsetY = clamp(
        (e.clientY - centerY) / (rect.height / 2),
        -1,
        1
      );

      setTransform(
        `rotateX(${-offsetY * MAX_TILT}deg) rotateY(${offsetX * MAX_TILT}deg) translateZ(8px)`
      );

      const near =
        e.clientX >= rect.left - NEAR_PADDING &&
        e.clientX <= rect.right + NEAR_PADDING &&
        e.clientY >= rect.top - NEAR_PADDING &&
        e.clientY <= rect.bottom + NEAR_PADDING;
      setIsNear(near);
    };

    const onMouseLeave = () => {
      setTransform("");
      setIsNear(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
  <Layout
    title="Résumé — AI-Native Systems Architect & Engineering Advisor"
    description="Résumé of Hans Christian Reinl — AI-Native Systems Architect & Engineering Advisor in Cologne. 15+ years building high-scale platforms (Joyn 11M+ MAU). Founder of N+One. Co-host of Working Draft."
  >
    <main id="main" className="resume" role="main">
      <div className="main container">
        <div className="resume-card">
          <div
            ref={cardRef}
            className={`resume-card__inner${isNear ? " resume-card__inner--hovered" : ""}`}
            style={transform ? { transform } : undefined}
          >
            <div className="resume-card__photo">
              <Image
                src="/img/me.jpg"
                alt="A picture of Hans Christian Reinl"
                width={750}
                height={750}
              />
            </div>

            <header className="resume-card__content">
              <h1 className="resume-card__name">Hans Christian Reinl</h1>
              <p className="resume-card__title">
                AI-Native Systems Architect &amp; Engineering Advisor
              </p>

              <address className="resume-card__contact">
                <span>Cologne, Germany</span>
                <span className="resume-card__contact-links">
                  <a href="https://www.hansreinl.de/">hansreinl.de</a>
                  <a href="mailto:hi@hansreinl.de">hi@hansreinl.de</a>
                  <a href="tel:+4917644508482">+49 176 44508482</a>
                </span>
              </address>
            </header>
          </div>
        </div>

        <section>
          <h2>Summary</h2>

          <p>
            Highly influential Engineering Leader and Software Architect (15+
            years) with deep expertise in Web-, Mobile- and SmartTV-application
            development, cloud-native, and high-scale platforms (11M+ MAU). I
            have the ability to define engineering vision, translate complex
            microservice and cloud architectures into strategic business value,
            and leading transformation initiatives in media and entertainment. I
            excel at building and establishing technical departments while
            fostering innovation and agile cultures. My experience extends
            beyond in-house leadership; as a consultant and influential co-host
            of the Working Draft Podcast, I excel at synthesizing complex
            engineering concepts into accessible, actionable guidance for a broad
            technical audience.
          </p>
        </section>

        <section>
          <h2>Work</h2>

          <h3>AI-Native Systems Architect &amp; Engineering Advisor</h3>
          <p>July 2025 – Present &bull; Self-employed</p>

          <p>
            Helping engineering organizations transition from legacy
            architectures to AI-native products. I don&apos;t just consult; I
            bridge the gap between high-scale architecture and the agentic
            future.
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
              conversational coach (
              <a href="https://nplusone.app/">N+One</a>) based on Next.js and
              Vercel Edge Network for personalized training, demonstrating
              expertise in performant serverless applications and AI-powered
              experiences.
            </li>
            <li>
              Agentic Systems &amp; Data Processing: Developed agentic-led,
              low-code crawling and indexing processes for fiber internet
              network information, showcasing proficiency in automation, LLM
              integration, and data structuring.
            </li>
          </ul>

          <h3>Founder at N+One</h3>
          <p>April 2026 – Present</p>

          <p>
            Building an AI-native coaching platform for cyclists. N+One analyzes
            training load, recovery, and performance data to dynamically adapt
            training plans, identify limiters, and optimize race preparation.
            The goal: deliver the outcomes of a high-quality coach — at scale,
            and accessible to every athlete.
          </p>

          <h3>Fractional CTO at Fiberfone GmbH</h3>
          <p>October 2023 – February 2026</p>

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

          <h3>Vice President Engineering at ProSiebenSat.1</h3>
          <p>October 2021 – June 2025</p>

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
              playbooks for multi-tenant platform, accelerating tenant rollouts
              and ensuring cross-platform consistency.
            </li>
            <li>
              Established data-driven decision-making with product-led metrics,
              resulting in ~4% increase in user engagement and 20% reduction in
              technical debt. Utilized DORA metrics and Core Web Vitals.
            </li>
            <li>
              Successfully introduced AI engineering practices by piloting GitHub
              Copilot, enhancing developer productivity and code quality.
            </li>
          </ul>

          <h3>Director Technology &amp; Product, FYEO at ProSiebenSat.1</h3>
          <p>July 2020 – September 2021</p>

          <p>
            As Director of Technology &amp; Product, I led the development and
            maintenance of FYEO, a podcasting app with over 1.6 million formats
            and 40 million episodes.
          </p>

          <ul>
            <li>
              Built and led an agile, cross-functional team of 13 members,
              overseeing career development and recruitment.
            </li>
            <li>
              Led transformation by replacing external agency with internal
              development and design personnel, demonstrating change management
              capabilities.
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
      </div>

      <figure className="section--fullsize">
        <Image
          src="/img/discussions.jpg"
          alt="Speaking and Discussions"
          width={1866}
          height={832}
          className="w-full h-full object-cover mt-1"
        />

        <figcaption className="image__caption">
          <span className="image__caption__copywrite">
            Droidcon & Fluttercon at The Cube, Berlin, 24-26 September 2025;
            www.tellingphotography.com
          </span>
        </figcaption>
      </figure>

      <div className="main container">
        <section>
          <h3>Software Architect &amp; Engineer, Engineering Manager</h3>

          <p>April 2013 – June 2020 &bull; Self-employed</p>

          <p>
            I worked on projects for clients such as AXA, REWE digital, Vaillant
            Group and others where I served as Software Architect, Engineer and
            Engineering Manager.
          </p>

          <div className="flex space-between mt-1">
            <h4 className="mt-0 mb-0">
              AXA Deutschland, Lead Software Engineer and Software Architect
            </h4>
            <p className="mb-0">July 2018 – September 2019</p>
          </div>

          <p className="mt-0">
            Led the development and growth of an engineering team responsible
            for building online insurance tariff calculators for AXA Deutschland
            in a strongly regulated environment. Developed services using
            Node.js and Java, guided adoption of React/TypeScript, and
            architected deployments on Kubernetes and Docker — increasing
            annual application delivery velocity from 2 to 6. Expanded the team
            from four to 14 developers.
          </p>

          <div className="flex space-between mt-1">
            <h4 className="mt-0 mb-0">REWE digital, Software Engineer</h4>
            <p className="mb-0">July 2017 – June 2018</p>
          </div>
          <p className="mt-0">
            Built microservices with Node.js, transforming the backend from
            on-premise to cloud-native on Google Cloud Platform using Kubernetes
            and Docker. Implemented Apache Kafka for data streaming and employed
            a micro-frontend architecture with React.js.
          </p>

          <div className="flex space-between mt-1">
            <h4 className="mt-0 mb-0">
              Fashionette, Engineering Manager and Software Architect
            </h4>
            <p className="mb-0">November 2015 – August 2016</p>
          </div>
          <p className="mt-0">
            Spearheaded the transformation of the monolithic e-commerce platform
            to a scalable microservice architecture. Led the relaunch resulting
            in market rollouts across Europe, UK and US. Expanded the team to
            14 software engineers.
          </p>

          <div className="flex space-between mt-1">
            <h4 className="mt-0 mb-0">
              Vaillant Group, Front-end Architect
            </h4>
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
            April 2010 – April 2013: Lead Front-end Developer at /gebrüderheitz,
            Freiburg
          </p>
        </section>
      </div>

      <div className="main container">
        <figure className="image image--right">
          <Image
            src="/img/speaking-discussion.jpg"
            alt="Speaking and Discussions"
            width={1200}
            height={1800}
            className="w-full"
          />

          <figcaption className="image__caption">
            <span className="image__caption__copywrite">
              Droidcon & Fluttercon at The Cube, Berlin, 24-26 September 2025;
              www.tellingphotography.com
            </span>
          </figcaption>
        </figure>

        <section>
          <h2>Industry Influence &amp; Collaborative Initiatives</h2>

          <p>
            <b>Mentor at The Mentoring Club</b>:{" "}
            <a href="https://www.mentoring-club.com/">The Mentoring Club</a> is
            an open community which aims at supporting people who are keen to
            learn, grow and develop. I provide advice to mentees to advance in
            their career in the areas such as Engineering Management &amp;
            Leadership, Career building, Agile Methodologies and more.{" "}
            <Link href="/blog/mentoring-club">More information here</Link>.
          </p>

          <p>
            <b>Co-host of Working Draft Podcast</b>: Strong influence on the
            German-speaking community while being a member of the weekly
            web-development and web-news podcast{" "}
            <a href="https://workingdraft.de/">Working Draft</a> since 2011.
          </p>

          <p>
            <b>Speaking engagements at conferences and webinars</b>: topics
            including Agentic Engineering across the SDLC, Engineering Metrics,
            Design Systems and Component Based Development (e.g. Lead Dev
            Berlin, Front-Trends in Warsaw and Frontend Conference in Zürich).{" "}
            <Link href="/about/speaking">More about my speaking</Link>.
          </p>
        </section>
      </div>

      <AdvisoryCta />
    </main>
  </Layout>
  );
};

export default Resume;
