import Image from "next/image";
import SectionIntro from "./SectionIntro";

const strengths = [
  {
    title: "Coach Production Patterns",
    body: "I teach engineers the practices that survive contact with production: RAG, MCP, guardrails, and agentic workflows they can own without me.",
  },
  {
    title: "Embed and Ship",
    body: "I sit with your team through architecture and implementation until reliable systems are live, not another pilot that never leaves the lab.",
  },
  {
    title: "Workshops That Stick",
    body: "I run focused sessions that change how people work the next day, so the production gap closes in the team, not just in a slide deck.",
  },
] as const;

const EngagementSteps = () => (
  <section
    className="engagement-steps"
    aria-labelledby="engagement-steps-title"
  >
    <div className="container">
      <div className="engagement-steps__inner">
        <div className="engagement-steps__head">
          <SectionIntro
            className="engagement-steps__intro"
            label="Upskilling"
            title="Why Teams Bring Me In"
            titleId="engagement-steps-title"
            titleClassName="engagement-steps__title"
            size="lg"
          >
            <p className="engagement-steps__lede">
              I close the production gap by equipping people, not by handing
              over a black-box demo. RAG, MCP, guardrails, and agentic SDLC
              become skills your engineers can ship with.
            </p>
          </SectionIntro>

          <figure className="engagement-steps__photo">
            <Image
              src="/img/speaking-discussion.jpg"
              alt="Hans Christian Reinl in conversation with engineers at Droidcon and Fluttercon in Berlin"
              width={1200}
              height={1800}
              sizes="(min-width: 48em) 50vw, 100vw"
              className="engagement-steps__photo-image"
            />
            <span className="engagement-steps__photo-credit">
              www.tellingphotography.com
            </span>
          </figure>
        </div>

        <ol className="engagement-steps__list">
          {strengths.map((item, index) => (
            <li key={item.title} className="engagement-steps__item">
              <span className="engagement-steps__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="engagement-steps__step-title">{item.title}</h3>
              <p className="engagement-steps__step-body">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default EngagementSteps;
