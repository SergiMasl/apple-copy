import React, { useState } from "react";
import "./footer.sass";
import FooterText from "./FooterText";
import FooterLinks from "./FooterLinks";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  const [isLinkOpen, setIsLinkOpen] = useState(false);
  const [clickIndex, setClickIndex] = useState("");

  const footerHandle = (e) => {
    if (clickIndex == e) {
      setIsLinkOpen(false);
      setClickIndex("");
    } else {
      setClickIndex(e);
      setIsLinkOpen(!isLinkOpen);
    }
  };

  const arrFoot = [
    {
      cul1: [
        {
          id: "Shop and Learn",
          class: "1",
          list: [
            { link: "#", title: "Shop and Learn" },
            { link: "#", title: "Store" },
            { link: "#", title: "Mac" },
            { link: "#", title: "iPad" },
            { link: "#", title: "iPhone" },
            { link: "#", title: "Watch" },
            { link: "#", title: "Vision" },
            { link: "#", title: "AirPods" },
            { link: "#", title: "TV & Home" },
            { link: "#", title: "AirTag" },
            { link: "#", title: "Accessories" },
            { link: "#", title: "Gift Cards" },
          ],
        },
      ],
    },
    {
      cul2: [
        {
          id: "Account",
          class: "2",
          list: [
            { link: "#", title: "Manage Your Apple ID" },
            { link: "#", title: "Apple Store Account" },
            { link: "#", title: "iCloud.com" },
          ],
        },
        {
          id: "Entertainment",
          class: "3",
          list: [
            { link: "#", title: "Apple One" },
            { link: "#", title: "Apple TV+" },
            { link: "#", title: "Apple Music" },
            { link: "#", title: "Apple Arcade" },
            { link: "#", title: "Apple Fitness+" },
            { link: "#", title: "Apple News+" },
            { link: "#", title: "Apple Podcasts" },
            { link: "#", title: "Apple Books" },
          ],
        },
      ],
    },
    {
      cul3: [
        {
          id: "Apple Store",
          class: "4",
          list: [
            { link: "#", title: "Find a Store" },
            { link: "#", title: "Genius Bar" },
            { link: "#", title: "Today at Apple" },
            { link: "#", title: "Group Reservations" },
            { link: "#", title: "Apple Camp" },
            { link: "#", title: "Apple Store App" },
            { link: "#", title: "Certified Refurbished" },
            { link: "#", title: "Apple Trade In" },
            { link: "#", title: "Financing" },
            { link: "#", title: "Carrier Deals at Apple" },
            { link: "#", title: "Order Status" },
            { link: "#", title: "Shopping Help" },
          ],
        },
      ],
    },
    {
      cul4: [
        {
          id: "For Business",
          class: "5",
          list: [
            { link: "#", title: "Apple and Business" },
            { link: "#", title: "Shop for Business" },
          ],
        },
        {
          id: "For Education",
          class: "6",
          list: [
            { link: "#", title: "Shop for K-12" },
            { link: "#", title: "Shop for College" },
          ],
        },
        {
          id: "Apple Values",
          class: "7",
          list: [
            { link: "#", title: "Accessibility" },
            { link: "#", title: "Education" },
            { link: "#", title: "Environment" },
            { link: "#", title: "Inclusion and Diversity" },
            { link: "#", title: "Privacy" },
            { link: "#", title: "Racial Equity and Justice" },
          ],
        },
      ],
    },
    {
      cul5: [
        {
          id: "About Apple",
          class: "8",
          list: [
            { link: "#", title: "Newsroom" },
            { link: "#", title: "Apple Leadership" },
            { link: "#", title: "Supply Chain" },
            { link: "#", title: "Career Opportunities" },
            { link: "#", title: "Investors" },
            { link: "#", title: "Ethics & Compliance" },
            { link: "#", title: "Events" },
            { link: "#", title: "Contact Apple" },
          ],
        },
      ],
    },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-wrap">
        <FooterText />
        <FooterLinks
          footerHandle={footerHandle}
          arrFoot={arrFoot}
          clickIndex={clickIndex}
        />
        <FooterCopyright />
      </div>
    </footer>
  );
}
