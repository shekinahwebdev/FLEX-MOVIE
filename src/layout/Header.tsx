import { Link, useNavigate } from "react-router";
import { headerLinks } from "../lib/constant";
import { FaCaretDown, FaSearch } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex flex-row text-white justify-between px-5 py-10 md:px-12 lg:px-20 z-0">
      <div className="flex flex-row justify-between gap-12 items-center">
        <div className="" onClick={() => navigate("/signin")}>
          <img
            src="/assets/logo.png"
            alt="logo"
            className="w-[100px] xl:w-[120px]  hover:cursor-pointer"
          />
        </div>
        <div className="flex flex-col">
          <ul className="xl:flex xl:flex-row justify-between md:text-sm hidden w-full gap-6">
            {headerLinks.map((link, index) => (
              <li key={index}>
                <Link to="">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <FaSearch className="w-4 h-4 text-white/30" />
        <img src="/assets/Doorbell.png" alt="" className="w-[20px]" />
        <img src="/assets/image12.png" alt="" className="w-[30px] h-auto" />
        <FaCaretDown onClick={() => navigate("/profile")} />
      </div>
    </header>
  );
};

export default Header;
