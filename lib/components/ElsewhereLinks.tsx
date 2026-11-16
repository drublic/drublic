import React from "react";
import SectionLabel from "./SectionLabel";

type ElsewhereItem = {
  title: string;
  href: string;
  venue: string;
  year: string;
};

const items: readonly ElsewhereItem[] = [
  {
    title: "CSS Naming Conventions: Less Rules, more Fun",
    href: "https://medium.com/@drublic/css-naming-conventions-less-rules-more-fun-12af220e949b",
    venue: "Medium",
    year: "2014",
  },
  {
    title: "A counter statement: Putting the CSS in the head",
    href: "https://medium.com/programming-ideas-tutorial-and-experience/f98103d09ce1",
    venue: "Medium",
    year: "2014",
  },
  {
    title: "Shared Grunt Configuration",
    href: "https://thenittygritty.co/shared-grunt-configuration",
    venue: "The Nitty Gritty",
    year: "2013",
  },
];

const ElsewhereLinks = () => (
  <section className="elsewhere" aria-labelledby="elsewhere-heading">
    <div className="container container--large">
      <div className="elsewhere__panel">
        <SectionLabel>Elsewhere</SectionLabel>
        <h2 id="elsewhere-heading" className="elsewhere__heading">
          On other sites
        </h2>
        <p className="elsewhere__lead">
          A few pieces that live off this site—kept here for the trail, not as
          the main reading list.
        </p>

        <ul className="elsewhere__list">
          {items.map(({ title, href, venue, year }) => (
            <li key={href} className="elsewhere__item">
              <a
                href={href}
                className="elsewhere__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="elsewhere__meta">
                  <span className="elsewhere__venue">{venue}</span>
                  <time className="elsewhere__year" dateTime={year}>
                    {year}
                  </time>
                </span>
                <span className="elsewhere__title">{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ElsewhereLinks;
