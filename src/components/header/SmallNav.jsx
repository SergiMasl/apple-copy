import React from "react";
import { Link } from "react-router-dom";

export default function SmallNav({ isOpen, headerArray }) {
  return (
    <div className={`sm_menu ${isOpen ? "sm_menu_open" : "sm_menu_closed"}`}>
      <ul>
        {headerArray.map((item) => (
          <li key={item.id}>
            {item.class == "minor-nav" && (
              <Link to={item.link} key={item.id} className={item.class}>
                {item.title}
                {console.log(item.title)}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
