import { Link } from "react-router";
import AuthFooter from "../ui/AuthFooter";

const SignIn = () => {
  return (
    <main className="bg-[url('/assets/background_banner.jpg')] bg-cover bg-center min-h-screen flex flex-col items-center signup-bg">
      <div className="self-start mb-10 px-5 py-10 md:px-12 lg:px-20">
        <img
          src="/assets/logo.png"
          alt="logo"
          className="w-[150px] md:w-[250px]"
        />
      </div>
      <div className="px-5 py-10 md:px-12 lg:px-20">
        <div className="bg-white/20 backdrop-blur-sm p-7 sm:p-8 md:p-10 xl:p-16 rounded-md w-full max-w-[420px] md:max-w-[450px] lg:max-w-[500px] text-white  form-bg">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-6 text-center">
            Sign In
          </h2>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                value="patricia@gmail.com"
                className="p-3 rounded bg-[rgb(217,217,217)] text-black outline-none"
                required
              />
            </div>

            <div className="flex flex-col relative">
              <label htmlFor="password" className="mb-1 text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                value="**********"
                className="p-3 rounded bg-[rgb(217,217,217)] text-black outline-none"
                required
              />
              <button
                type="button"
                className="absolute right-1 top-[27px] flex items-center justify-center w-10 h-10 rounded bg-[rgb(106,104,104)] hover:bg-[rgb(90,90,90)] transition cursor-pointer"
              >
                <img
                  src="/assets/open.png"
                  alt="toggle password visibility"
                  className="w-6 h-6"
                />
              </button>
            </div>

            <button
              type="submit"
              className="mt-4 bg-red-600 hover:bg-red-700 transition-all p-3 rounded text-lg font-semibold cursor-pointer"
            >
              Sign In
            </button>
          </form>

          <div className=" flex justify-between items-center my-8 px-4">
            <div className="flex gap-3 items-center">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-sm checked:bg-[rgb(106,104,104)] checked:border-2 checked:border-[rgb(106,104,104)] cursor-pointer transition-all duration-200"
                />
              </label>
              <Link to="">
                <p className="text-[rgb(101,99,99)] hover:underline">
                  Remember me
                </p>
              </Link>
            </div>
            <p className="text-[rgb(101,99,99)] hover:underline cursor-pointer">
              Need help?
            </p>
          </div>

          <div className="px-4 mt-12">
            <span className="text-[rgb(101,99,99)]">
              New to Netflix?
              <Link
                to="/signup"
                className="text-white ml-2 font-bold text-[18px] hover:text-red-500 transition-colors duration-300 cursor-pointer"
              >
                Sign up now
              </Link>
            </span>
            <p className="text-[rgb(101,99,99)] mt-9">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <span className="text-blue-700 cursor-pointer hover:underline">
                Learn more.
              </span>
            </p>
          </div>
        </div>
      </div>
      <AuthFooter />
    </main>
  );
};

export default SignIn;
