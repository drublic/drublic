import React, { type ReactNode } from "react";
import SectionLabel from "./SectionLabel";

type SectionIntroProps = {
  label: ReactNode;
  title: ReactNode;
  /** id for the h2, so the parent section can use aria-labelledby */
  titleId: string;
  /** "lg" for standalone modules (CTA, steps), "md" next to a visual */
  size?: "md" | "lg";
  /** Module hook on the wrapper, e.g. "advisory-cta__copy" */
  className?: string;
  /** Module hook on the h2, used for per-module max-width */
  titleClassName?: string;
  children?: ReactNode;
};

/**
 * Label-top / headline-bottom intro block shared by homepage and page modules.
 * Layout: styles/module/section-label.css (.section-copy, .section-heading).
 */
const SectionIntro = ({
  label,
  title,
  titleId,
  size = "md",
  className,
  titleClassName,
  children,
}: SectionIntroProps) => {
  const headingClasses = [
    "section-heading",
    size === "lg" && "section-heading--lg",
    titleClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={["section-copy", className].filter(Boolean).join(" ")}>
      <SectionLabel>{label}</SectionLabel>

      <div className="section-copy__main">
        <h2 id={titleId} className={headingClasses}>
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default SectionIntro;
