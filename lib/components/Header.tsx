import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";

const Header = () => (
  <header className="header">
    <div className="header__inner">
      <Link href="/">
        <a role="banner" className="header__title">
          <h1 className="header__title__line">Hans Christian Reinl</h1>
        </a>
      </Link>

      <Navigation />
    </div>
  </header>
);

export default Header;
