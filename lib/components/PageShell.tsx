import classNames from "classnames";
import React, { type ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
  large?: boolean;
};

/**
 * Shared inner-page top chrome — consistent max-width, gutters, and top offset
 * so PageHeader sits at the same height on every page.
 */
const PageShell = ({ children, className, large = false }: PageShellProps) => (
  <div
    className={classNames(
      "page-shell",
      large && "page-shell--large",
      className
    )}
  >
    {children}
  </div>
);

export default PageShell;
