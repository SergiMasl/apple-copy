import React from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function FooterLinks({
  footerHandle,
  arrFoot,
  clickIndex,
  isLinkOpen,
}) {
  return (
    <section className="footer-links">
      {arrFoot.map((column, index) => (
        <div key={index} className={`footer-column cul${index + 1}`}>
          {Object.keys(column).map((key) =>
            column[key].map((section) => (
              <div key={section.id} className="footer-section">
                <h3 onClick={() => footerHandle(section.class)}>
                  {section.id}
                  <span
                    className={`sm-arror-li ${
                      section.class == clickIndex ? `arror-turn` : ""
                    }`}
                  >
                    <IoIosArrowUp />
                  </span>
                </h3>
                <ul
                  className={`ul- ${
                    section.class == clickIndex ? `ul-footeOpen` : ""
                  }`}
                >
                  {section.list.map((item) => (
                    <li key={item.title}>
                      <a href={item.link}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      ))}
    </section>
  );
}
