import Image from "next/image";
import React from "react";

const companies = [
  {
    href: "https://joyn.de/",
    src: "/img/work/joyn.svg",
    width: 68,
    height: 30,
    alt: "Joyn",
    large: true,
  },
  {
    href: "https://www.prosiebensat1.com/",
    src: "/img/work/p7s1.png",
    width: 600,
    height: 120,
    alt: "ProSiebenSat.1",
    large: true,
  },
  {
    href: "https://fiberfone.de/",
    src: "/img/work/fiberfone.png",
    width: 500,
    height: 116,
    alt: "Fiberfone",
    large: true,
  },
  {
    href: "https://nplusone.app/",
    src: "/img/work/n-plus.svg",
    width: 1024,
    height: 1024,
    alt: "N+One",
  },
  {
    href: "https://school.digitale-leute.de/",
    src: "/img/work/dl-school.svg",
    width: 64,
    height: 64,
    alt: "Digitale Leute School",
  },
  {
    href: "https://axa.de/",
    src: "/img/work/axa.svg",
    width: 277,
    height: 277,
    alt: "AXA Deutschland",
    large: true,
    style: { maxWidth: "5.75rem" },
  },
  {
    href: "https://shop.rewe.de/",
    src: "/img/work/rewe.svg",
    width: 725,
    height: 235,
    alt: "REWE digital",
    large: true,
  },
  {
    href: "https://vaillant-group.com/",
    src: "/img/work/vaillant.svg",
    width: 576,
    height: 164,
    alt: "Vaillant Group",
    large: true,
  },
  {
    href: "https://www.fashionette.de/",
    src: "/img/work/fashionette.svg",
    width: 150,
    height: 22,
    alt: "Fashionette",
  },
  {
    href: "https://www.hilti.com/",
    src: "/img/work/hilti.svg",
    width: 268,
    height: 56,
    alt: "Hilti AG",
    title: "in cooperation with FORK",
    large: true,
  },
  {
    href: "https://www.sap.com/",
    src: "/img/work/sap.svg",
    width: 92,
    height: 47,
    alt: "SAP AG",
    large: true,
  },
  {
    href: "https://de.croozer.com/",
    src: "/img/work/croozer.svg",
    width: 1400,
    height: 370,
    alt: "Croozer GmbH",
  },
  {
    href: "https://www.yescapa.de/yescapa-uebernimmt-shareacamper/",
    src: "/img/work/shareacamper.svg",
    width: 425,
    height: 60,
    alt: "Share A Camper",
  },
] as const;

type ClientItem = (typeof companies)[number];

const ClientLogo = ({
  company,
  duplicate = false,
}: {
  company: ClientItem;
  duplicate?: boolean;
}) => (
  <li
    className={`work__clients__client${
      "large" in company && company.large ? " work__clients__client--large" : ""
    }`}
  >
    <a
      href={company.href}
      tabIndex={duplicate ? -1 : undefined}
      aria-hidden={duplicate || undefined}
    >
      {company.src.endsWith(".svg") ? (
        <img
          src={company.src}
          width={company.width}
          height={company.height}
          alt={duplicate ? "" : company.alt}
          title={"title" in company ? company.title : undefined}
          style={"style" in company ? company.style : undefined}
          decoding="async"
        />
      ) : (
        <Image
          src={company.src}
          width={company.width}
          height={company.height}
          alt={duplicate ? "" : company.alt}
          title={"title" in company ? company.title : undefined}
          style={"style" in company ? company.style : undefined}
          sizes="10rem"
          loading="eager"
        />
      )}
    </a>
  </li>
);

const Clients = () => (
  <div className="work__clients-stripe" aria-label="Companies I Worked For">
    <ul className="work__clients">
      {companies.map((company) => (
        <ClientLogo key={company.alt} company={company} />
      ))}
      {companies.map((company) => (
        <ClientLogo key={`dup-${company.alt}`} company={company} duplicate />
      ))}
    </ul>
  </div>
);

export default Clients;
