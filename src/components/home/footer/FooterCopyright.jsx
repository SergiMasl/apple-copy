import React from "react";

export default function FooterCopyright() {
  return (
    <section className="footer-bt">
      <div className="footer-bt-title">
        <p> More ways to shop: </p>
        <a href="#">Find an Apple Store</a>
        <p>or</p>
        <a href="#">other retailer</a>
        <p> near you. Or call 1-800-MY-APPLE.</p>
      </div>
      <div className="footer-bt-copuright">
        <div className="copuright-wrapper">
          <p className="text-copyright">
            Copyright © 2024 Apple Inc. All rights reserved.
          </p>
          <div className="copyright-links">
            <a href="#">Privacy Policy </a>
            <span>|</span>
            <a href="#">Terms of Use</a>
            <span>|</span>
            <a href="#">Sales and Refunds</a>
            <span>|</span>
            <a href="#">Legal</a>
            <span>|</span>
            <a href="#">Site Map</a>
          </div>
        </div>
        <a href="#" className="country-link">
          USA
        </a>
      </div>
    </section>
  );
}
