import Link from "next/link";
import React, { useState } from "react";
import SectionLabel from "./SectionLabel";
import { formatTag, tagHref } from "../utils/tags";

const PREVIEW_COUNT = 10;

type ThemeIndexProps = {
  tags: Record<string, number> | Array<[string, number]>;
};

const sortByCount = (
  entries: Array<[string, number]>,
): Array<[string, number]> =>
  [...entries].sort(([, a], [, b]) => Number(b) - Number(a));

const toEntries = (tags: ThemeIndexProps["tags"]): Array<[string, number]> => {
  if (Array.isArray(tags)) {
    return tags.map(([topic, count]) => [topic, Number(count)]);
  }

  return Object.entries(tags).map(([topic, count]) => [topic, Number(count)]);
};

const ThemeIndex = ({ tags }: ThemeIndexProps) => {
  const [expanded, setExpanded] = useState(false);
  const sorted = sortByCount(toEntries(tags ?? {}));
  const visible = expanded ? sorted : sorted.slice(0, PREVIEW_COUNT);
  const hiddenCount = Math.max(0, sorted.length - PREVIEW_COUNT);

  if (!sorted.length) {
    return null;
  }

  return (
    <nav className="theme-index" aria-labelledby="theme-index-heading">
      <SectionLabel>Topics</SectionLabel>
      <h3 id="theme-index-heading" className="theme-index__title">
        Themes
      </h3>
      <p className="theme-index__lead">
        Jump into a thread of writing. Counts show how many posts live under
        each theme.
      </p>

      <ul className="theme-index__list">
        {visible.map(([topic, count]) => (
          <li key={topic} className="theme-index__item">
            <Link
              href={tagHref(topic)}
              className="theme-index__link"
            >
              <span className="theme-index__name">{formatTag(topic)}</span>
              <span className="theme-index__count">
                <span className="theme-index__count-num">{count}</span>
                <span className="theme-index__count-label">
                  {count === 1 ? "post" : "posts"}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {hiddenCount > 0 ? (
        <button
          type="button"
          className="theme-index__more"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "Show fewer themes" : `Show all ${sorted.length} themes`}
        </button>
      ) : null}
    </nav>
  );
};

export default ThemeIndex;
