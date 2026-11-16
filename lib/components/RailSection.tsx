import React, { type ReactNode } from "react";
import SectionLabel from "./SectionLabel";

type RailSectionProps = {
  /** Visible eyebrow in the left rail */
  label: ReactNode;
  /** Visually hidden h2 that names the section for assistive tech */
  heading: ReactNode;
  headingId: string;
  /** Extra modifier on the section, e.g. "updates--page" */
  className?: string;
  children: ReactNode;
};

/**
 * Two-column "updates" layout: label rail on the left, content on the right.
 * Styles: styles/module/updates.css.
 */
const RailSection = ({
  label,
  heading,
  headingId,
  className,
  children,
}: RailSectionProps) => (
  <section
    className={["updates", className].filter(Boolean).join(" ")}
    aria-labelledby={headingId}
  >
    <div className="container container--large updates__layout">
      <div className="updates__rail">
        <SectionLabel>{label}</SectionLabel>
      </div>

      <div className="updates__main">
        <h2 id={headingId} className="visuallyhidden">
          {heading}
        </h2>

        {children}
      </div>
    </div>
  </section>
);

export default RailSection;
