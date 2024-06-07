import React from "react";

import ihone from "../../styles/img/home/iphone.png";
import ihoneSmall from "../../styles/img/home/iphone-sm.png";

import { Link } from "react-router-dom";

export default function SectionAdSecondary() {
  return (
    <div className="collection-module collection-module-gap">
      <Link to="#" className="collection-module-link">
        <img src={ihone} className="collection-module-img" />
        <img src={ihoneSmall} className="collection-module-img-sm" />
      </Link>
      <div className="collection-module-content">
        <h2>iPhone 15 Pro</h2>
        <p>Titanium. So strong. So light. So Pro.</p>
        <div className="cta-links">
          <Link to="" className="button button-elevated button-primary">
            Learn more
          </Link>
          <Link to="shop" className="button button-elevated button-tertiary">
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
}
