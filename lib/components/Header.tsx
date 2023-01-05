import classNames from "classnames";
import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";

const Header = ({ noNavigation = false }) => (
  <header
    className={classNames("header", {
      "header--no-navigation": noNavigation,
    })}
  >
    <div className="header__inner">
      <Link href="/" role="banner" className={"header__title"}>
        <h1 className="header__title__line">Hans Reinl</h1>
      </Link>

      <div className="header__spacer" />

      {!noNavigation && <Navigation />}
    </div>
  </header>
);

export default Header;
