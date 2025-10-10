import { Link } from "react-router";

const AuthFooter = () => {
  return (
    <div className="bg-[#000000cc] px-6 xl:px-40 xl:pt-12 w-full mt-10 py-10 gap-6 flex flex-col justify-center xl:flex md:flex-row sm:justify-between">
      <div className="flex flex-col justify-self-start">
        <div>
          <ul className="flex flex-col gap-5">
            <li className="text-[rgb(101,99,99)]">
              <Link to="">Questions? Contact Us</Link>
            </li>
            <li className="text-[rgb(101,99,99)]">
              <Link to="">FAQ</Link>
            </li>
            <li className="text-[rgb(101,99,99)]">
              <Link to="">Terms of Use</Link>
            </li>
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
          <li className="text-[rgb(101,99,99)]">
            <Link to="">Cancle Membership</Link>
          </li>
          <li className="text-[rgb(101,99,99)]">
            <Link to="">Privacy</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col ">
        <ul className="flex flex-col gap-5">
          <li className="text-[rgb(101,99,99)]">
            <Link to="">Help Center</Link>
          </li>
          <li className="text-[rgb(101,99,99)]">
            <Link to="">Cookies Preference</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col ">
        <ul className="flex flex-col gap-5">
          <li className="text-[rgb(101,99,99)]">
            <Link to="">Netflix Shop</Link>
          </li>
          <li className="text-[rgb(101,99,99)]">
            <Link to="">Impressum</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuthFooter;
