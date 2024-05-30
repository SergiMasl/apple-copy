import React from "react";
import "./home.sass";
import { Link } from "react-router-dom";
import SectionAdTop from "./SectionAdTop";
import SectionAdSecondary from "./SectionAdSecondary";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <main className="container">
      <section className="homepage-section">
        <SectionAdTop />
        <SectionAdSecondary />
        <Footer />
      </section>
    </main>
  );
}
