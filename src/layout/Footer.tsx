import React from "react";
import { Link } from "react-router";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import { SOCIAL_LINKS } from "../lib/constant";

const Footer: React.FC = () => {
  const footerLinks = {
    title1: [
      { name: "FAQ", href: "/" },
      { name: "Investor Relations", href: "/" },
      {
        name: "Privacy",
        href: "/",
      },
      {
        name: "Speed Test",
        href: "/",
      },
    ],
    title2: [
      { name: "Help Center", href: "/" },
      { name: "Jobs", href: "/" },
      { name: "Cookies Preference", href: "/" },
      { name: "Legal Notice", href: "/" },
    ],
    title3: [
      { name: "Account", href: "/" },
      { name: "Ways to Watch", href: "/" },
      { name: "Cooperation Information", href: "/" },
      { name: "Only on Netflix", href: "/" },
    ],
    title4: [
      { name: "Media Center", href: "/" },
      { name: "Terms of Use", href: "/" },
      { name: "Contact Us", href: "/" },
    ],
    follow: [
      {
        name: "Instragram",
        icon: BsInstagram,
        href: SOCIAL_LINKS.instagram,
      },
      {
        name: "Instragram",
        icon: BsTwitterX,
        href: SOCIAL_LINKS.instagram,
      },
      {
        name: "Instragram",
        icon: BsFacebook,
        href: SOCIAL_LINKS.instagram,
      },
      {
        name: "Instragram",
        icon: BsYoutube,
        href: SOCIAL_LINKS.instagram,
      },
    ],
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <div className="flex space-x-4 mt-6">
              {footerLinks.follow.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-lg  hover:text-red-600"
                    title={`Visit our ${social.name} page`}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <ul className="space-y-2">
              {footerLinks.title1.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-red-600 transition-color text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              {footerLinks.title2.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-red-600 transition-color text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              {footerLinks.title3.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-red-600 transition-color text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              {footerLinks.title4.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-red-600 transition-color text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
