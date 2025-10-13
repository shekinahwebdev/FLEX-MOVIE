import { Link } from "react-router";
import {
  assistLinks,
  leftLinks,
  middleLinks,
  rightLinks,
} from "../lib/constant";

const HomeFooter = () => {
  return (
    <footer className="px-6 xl:px-40 xl:pt-12 w-full mt-10 py-10 gap-6 flex flex-col justify-center xl:flex md:flex-row sm:justify-between">
      <div className="flex flex-col justify-self-start">
        <div>
          <ul className="flex flex-col gap-5">
            {leftLinks.map((link, index) => (
              <li className="text-[rgb(101,99,99)]" key={index}>
                <Link to={link.to}>{link.link1}</Link>
              </li>
            ))}
          </ul>
          <form className="relative border border-white/50 mt-5 flex items-center w-[180px] p-2 rounded-md hover:bg-white/10 transition">
            <div>
              <img src="/assets/Geography.png" alt="world-icon" />
            </div>
            <select className="border-0 pl-3 w-full outline-none bg-transparent appearance-none cursor-pointer">
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
            </select>
            <img
              src="/assets/expand-arrow.png"
              alt="arrow"
              className="absolute right-7 h-4 w-4 pointer-events-none"
            />
          </form>
        </div>
      </div>
      <div className="flex flex-col ">
        <ul className="flex flex-col gap-5">
          {middleLinks.map((link, index) => (
            <li className="text-[rgb(101,99,99)]" key={index}>
              <Link to={link.to}>{link.link2}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col ">
        <ul className="flex flex-col gap-5">
          {assistLinks.map((link, index) => (
            <li className="text-[rgb(101,99,99)]" key={index}>
              <Link to={link.to}>{link.link3}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col ">
        <ul className="flex flex-col gap-5">
          {rightLinks.map((link, index) => (
            <li className="text-[rgb(101,99,99)]" key={index}>
              <Link to={link.to}>{link.link4}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default HomeFooter;
