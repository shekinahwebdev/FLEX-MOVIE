import { Link, useNavigate } from "react-router";
import { headerLinks } from "../lib/constant";
import { FaCaretDown, FaSearch } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex flex-row text-white justify-between px-5 py-10 md:px-12 lg:px-20">
      <div className="flex flex-row justify-between gap-12 items-center">
        <div className="" onClick={() => navigate("/signin")}>
          <img
            src="/assets/logo.png"
            alt="logo"
            className="w-[120px] xl:w-[150px]"
          />
        </div>
        <div className="flex flex-col">
          <ul className="xl:flex xl:flex-row justify-between hidden w-full gap-6">
            {headerLinks.map((link, index) => (
              <li key={index}>
                <Link to="">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <FaSearch className="w-5 h-5 text-white/30" />
        <img src="/assets/Doorbell.png" alt="" className="" />
        <img src="/assets/image12.png" alt="" className="w-[40px] h-auto" />
        <FaCaretDown onClick={() => navigate("/profile")} />
      </div>
    </header>
  );
};

export default Header;
