import React, { useState } from "react";
import data from "../data/footer";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // eslint-disable-next-line
  const [footerLinks, setFooterLinks] = useState(data);
  return (
    <>
      <nav>
        <ul className="flex items-center justify-center pb-10">
          <Link
            to="//pl-pl.facebook.com/SwietaFaustyna"
            target="_blank"
            className="mx-4 text-3xl transition-colors hover:text-black hover:text-opacity-30"
          >
            <FaFacebook />
          </Link>

          <Link
            to="//twitter.com/KsEmil/status/651028019591675904"
            target="_blank"
            className="mx-4 text-3xl transition-colors hover:text-black hover:text-opacity-30"
          >
            <FaTwitter />
          </Link>
          <Link
            to="//www.youtube.com/watch?v=Ge5BseI51wo"
            target="_blank"
            className="mx-4 text-3xl transition-colors hover:text-black hover:text-opacity-30"
          >
            <FaYoutube />
          </Link>
        </ul>
      </nav>
      <p className="text-center mb-4">2021 - {new Date().getFullYear()}.</p>
      <footer className="px-5 py-10 border-t md:flex justify-between lg:px-40">
        {footerLinks.map((footerLink) => {
          const { id, title, links, to } = footerLink;

          return (
            <div key={id}>
              <h4 className="font-bold text-xl text-black text-opacity-40 tracking-wider">
                {title}
              </h4>
              <ul className="mb-4">
                {links.map((link) => {
                  return (
                    <Link
                      to={to}
                      key={link}
                      className="my-3 text-black text-opacity-40 cursor-pointer hover:text-opacity-60"
                      target="_blank"
                    >
                      {link}
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </footer>
    </>
  );
};

export default Footer;
