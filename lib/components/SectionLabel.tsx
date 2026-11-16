import React, { type ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
};

/**
 * Shared eyebrow: underscore mark (logo ▁) + uppercase text.
 * Styles live in styles/module/section-label.css.
 */
const SectionLabel = ({ children }: SectionLabelProps) => (
  <p className="section-label">
    <span className="section-label__mark" aria-hidden="true" />
    {children}
  </p>
);

export default SectionLabel;
