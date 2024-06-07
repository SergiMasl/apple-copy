import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillApple } from "react-icons/ai";
import { HiSearch } from "react-icons/hi";
import { IoBagOutline } from "react-icons/io5";
import Burger from "./Burger";
import "./header.sass";

import BagContext from "../../Context/BagContext";
import { useContext } from "react";

export default function Header() {
  const { items } = useContext(BagContext);
  const [isBurgerOn, setIsBurgerOn] = useState("");
  const [isOpen, setIsOpen] = useState("");

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

          <Link to="/apple-copy/cart" className="main-nav main-nav-bag log-sm">
            <div className="main-nav-bag-wrap">
              <IoBagOutline />
              <span className="main-nav-bag-numbers ">{items.length}</span>
            </div>
          </Link>

          <div className="burger-nav burger-sm ">
            <Burger
              isBurgerOn={isBurgerOn}
              setIsBurgerOn={setIsBurgerOn}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        </nav>
      </header>
      <div
        className={`small-menu-popup-closed${
          isOpen ? " small-menu-popup" : ""
        }`}
      >
        {headerArray.map((item) => (
          <Link key={item.id} className="menu-item non-visible" to={item.link}>
            {item.title}
          </Link>
        ))}
      </div>
    </>
  );
}
