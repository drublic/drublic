import React, { type ReactNode } from "react";
import SectionLabel from "./SectionLabel";

type PageHeaderProps = {
  label: string;
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
  media?: ReactNode;
};

/**
 * Shared inner-page hero chrome — matches homepage section-label language.
 * `media` sits beside the copy on wide screens and stacks under it on small ones.
 */
const PageHeader = ({
  label,
  title,
  lead,
  children,
  media,
}: PageHeaderProps) => {
  const copy = (
    <>
      <SectionLabel>{label}</SectionLabel>
      <h1 className="page-header__title">{title}</h1>
      {lead ? <div className="page-header__lead">{lead}</div> : null}
      {children ? <div className="page-header__actions">{children}</div> : null}
    </>
  );

  if (!media) {
    return <header className="page-header">{copy}</header>;
  }

  return (
    <header className="page-header page-header--with-media">
      <div className="page-header__copy">{copy}</div>
      <div className="page-header__media">{media}</div>
    </header>
  );
};

export default PageHeader;
