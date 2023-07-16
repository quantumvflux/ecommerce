import React from "react";
import FooterItem from "./components/FooterItem";

const Footer = () => {
  return (
    <footer className="w-screen h-24 bg-gray-900 w1/3 m-auto flex flex-col justify-center items-center">
      <ul className="text-white flex gap-3">
        <FooterItem link="About" />
        <FooterItem link="FAQ" />
        <FooterItem link="Store Locator" />
        <FooterItem link="News" />
        <FooterItem link="Contact Us" />
      </ul>
    </footer>
  );
};

export default Footer;
