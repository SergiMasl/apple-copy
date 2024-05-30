import React from "react";

import ipad from "../../styles/img/home/ipad_home.png";
import ipadSmall from "../../styles/img/home/ipad_home-sm.png";

import { Link } from "react-router-dom";

export default function SectionAdTop() {
  return (
    <div className="collection-module">
      <Link to="#" className="collection-module-link">
        <img src={ipad} className="collection-module-img" />
        <img src={ipadSmall} className="collection-module-img-sm" />
      </Link>
      <div className="collection-module-content">
        <h2>iPad Pro</h2>
        <p>Unbelievably thin, Incrediblly powerful.</p>
        <div className="cta-links">
          <Link to="" className="button button-elevated button-primary">
            Learn more
          </Link>
          <Link to="" className="button button-elevated button-tertiary">
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
}
