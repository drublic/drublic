import React from "react";
import HeroAtmosphere from "./HeroAtmosphere";
import SectionIntro from "./SectionIntro";

type StoryModuleProps = {
  label?: string;
  title?: string;
  body?: string;
};

const checklist = [
  { label: "Licences bought", status: "done" as const },
  { label: "Pilots launched", status: "done" as const },
  { label: "Models wired in", status: "done" as const },
  { label: "Guardrails in place", status: "pending" as const },
  { label: "Systems shipping", status: "pending" as const },
];

/**
 * Production-gap story — atmosphere stage with a floating checklist card.
 */
const StoryModule = ({
  label = "The production gap",
  title = "You Bought AI. The Systems Never Showed Up.",
  body = "Licences sit unused, pilots stall, gains stay theoretical. The bottleneck isn’t the models. It’s that nobody equipped the team to ship reliable AI in production.",
}: StoryModuleProps) => (
  <section className="story-module" aria-labelledby="story-module-title">
    <div className="story-module__inner">
      <SectionIntro
        className="story-module__copy"
        label={label}
        title={title}
        titleId="story-module-title"
        titleClassName="story-module__title"
      >
        <p className="story-module__body">{body}</p>
      </SectionIntro>

      <div className="story-module__visual" aria-hidden="true">
        <div className="story-module__field">
          <HeroAtmosphere className="story-module__canvas" />
          <div className="story-module__veil" />

          <div className="story-module__card">
            <p className="story-module__card-title">Production gap</p>

            <ul className="story-module__checklist">
              {checklist.map(({ label: itemLabel, status }) => (
                <li
                  key={itemLabel}
                  className={`story-module__check story-module__check--${status}`}
                >
                  <span className="story-module__check-label">{itemLabel}</span>
                  <span className="story-module__check-status">
                    {status === "done" ? (
                      <svg
                        viewBox="0 0 16 16"
                        width="12"
                        height="12"
                        aria-hidden
                      >
                        <path
                          d="M3.5 8.2 6.4 11l6.1-6.4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <span className="story-module__check-open" />
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StoryModule;
