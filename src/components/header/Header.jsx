import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillApple } from "react-icons/ai";
import { HiSearch } from "react-icons/hi";
import { IoBagOutline } from "react-icons/io5";
import { slide as Menu } from "react-burger-menu";
import "./header.sass";

export default function Header() {
  const headerArray = [
    { id: "store", title: "Store", link: "#", class: "minor-nav", type: "svg" },
    { id: "mac", title: "Mac", link: "#", class: "minor-nav", type: "text" },
    { id: "ipad", title: "iPad", link: "#", class: "minor-nav", type: "text" },
    {
      id: "iphone",
      title: "iPhone",
      link: "#",
      class: "minor-nav",
      type: "text",
    },
    {
      id: "watch",
      title: "Watch",
      link: "#",
      class: "minor-nav",
      type: "text",
    },
    {
      id: "vision",
      title: "Vision",
      link: "#",
      class: "minor-nav",
      type: "text",
    },
    {
      id: "airpods",
      title: "AirPods",
      link: "#",
      class: "minor-nav",
      type: "text",
    },
    {
      id: "tv",
      title: "TV & Home",
      link: "#",
      class: "minor-nav",
      type: "text",
    },
    {
      id: "entertainment",
      title: "Entertainment",
      link: "#",
      class: "minor-nav",
    },
    { id: "accessories", title: "Accessories", link: "#", class: "minor-nav" },
    { id: "support", title: "Support", link: "#", class: "minor-nav" },
    {
      id: "search",
      title: <HiSearch />,
      link: "#",
      class: "main-nav search-sm",
      type: "svg",
    },
    {
      id: "log",
      title: <IoBagOutline />,
      link: "#",
      class: "main-nav log-sm",
      type: "svg",
    },
  ];

  return (
    <>
      <header className="header">
        <nav>
          <Link to="/apple-copy" className="logo-sm">
            <AiFillApple />
          </Link>
          {headerArray.map((item) => (
            <Link to={item.link} key={item.id} className={item.class}>
              {item.title}
            </Link>
          ))}
          <div className="burger-nav burger-sm">
            {/* <Menu right>
              {headerArray.map((item) => (
                <a key={item.id} className="menu-item" href={item.link}>
                  {item.title}
                </a>
              ))}
            </Menu> */}
            {/* test */}
          </div>
        </nav>
      </header>
    </>
  );
}
