import React from "react";
import "./home.sass";
import { Link } from "react-router-dom";
import ipad from "../../styles/img/home/ipad_home.png";
import ipadSmall from "../../styles/img/home/ipad_home-sm.png";
import ihone from "../../styles/img/home/iphone.png";
import ihoneSmall from "../../styles/img/home/iphone-sm.png";

export default function Home() {
  return (
    <main className="container">
      <section className="homepage-section">
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
              <Link to="" className="button button-elevated button-tertiary">
                Buy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
