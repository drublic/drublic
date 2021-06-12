import React from "react";

const Clients = () => (
  <ul className="work__clients">
    <li className="work__clients__client work__clients__client--large">
      <a href="https://shop.rewe.de/">
        <img src="/img/work/rewe.svg" alt="REWE digital" />
      </a>
    </li>

    <li className="work__clients__client work__clients__client--large">
      <a href="https://www.hilti.com/">
        <img
          src="/img/work/hilti.svg"
          title="in cooperation with FORK"
          alt="Hilti AG"
        />
      </a>
    </li>

    <li className="work__clients__client work__clients__client--large">
      <a href="https://axa.de/">
        <img
          src="/img/work/axa.svg"
          alt="AXA Deutschland"
          style={{ maxWidth: "5.75rem" }}
        />
      </a>
    </li>

    <li className="work__clients__client work__clients__client--large">
      <a href="http://www.sapdatacenter.com/">
        <img src="/img/work/sap.svg" alt="SAP AG" />
      </a>
    </li>

    <li className="work__clients__client">
      <a href="http://vaillant-group.com/">
        <img src="/img/work/vaillant.png" alt="Vaillant Group" />
      </a>
    </li>

    <li className="work__clients__client">
      <a href="http://vaillant-group.com/">
        <img src="/img/work/sd.png" alt="Saunier Duval" />
      </a>
    </li>

    <li className="work__clients__client">
      <a href="http://www.fashionid.de/">
        <img
          src="/img/work/fid.png"
          alt="Fashion ID by Peek &amp; Cloppenburg"
        />
      </a>
    </li>

    <li className="work__clients__client">
      <a href="https://www.fashionette.pl/">
        <img src="/img/work/fashionette.svg" alt="Fashionette" />
      </a>
    </li>

    <li className="work__clients__client">
      <a href="https://de.croozer.com/">
        <img src="/img/work/croozer.svg" alt="Croozer GmbH" />
      </a>
    </li>

    <li className="work__clients__client">
      <a href="https://www.shareacamper.co.nz/en-nz/">
        <img src="/img/work/shareacamper.svg" alt="Share A Camper" />
      </a>
    </li>
  </ul>
);

export default Clients;
