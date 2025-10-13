import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col">
      <header className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/assets/background_banner.jpg')] bg-cover bg-center min-h-screen flex flex-col items-center text-white">
        <div className="self-start flex justify-between items-center w-full mb-10 px-5 py-10 md:px-12 lg:px-20">
          <div className="flex flex-row justify-between items-center w-full">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="w-[120px] xl:w-[150px]"
            />
            <button
              className="bg-red-600 px-4 py-2 md:px-6  hover:bg-red-700"
              onClick={() => navigate("/signin")}
            >
              Sign in
            </button>
          </div>
        </div>

        <div className="text-center px-9 flex flex-col gap-3 xl:px-10 justify-center items-center mt-56 w-full max-w-[1000px]">
          <p className="xl:text-7xl font-extrabold text-4xl">
            Unlimited movies, TV shows, and more
          </p>
          <p className="xl:text-2xl text-xl font-bold">
            Starts at US$2.99. Cancel anytime.
          </p>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center p-6 gap-3 md:flex-row">
          <div className="flex flex-col w-full max-w-[1000px] md:max-w-[500px] relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer p-3 pt-4 rounded text-white bg-[#000000a8] border-2 border-white/35 w-full placeholder-transparent focus:border-white focus:outline-none "
              required
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3 text-white transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-base  peer-focus:top-[3px] peer-focus:text-sm peer-focus:text-white bg-transparent peer-focus:mt-1"
            >
              Email address
            </label>
          </div>
          <button className="bg-red-600 px-10 py-3 font-bold">
            Get Started
          </button>
        </div>
      </header>
      <section className="flex flex-row items-center justify-center flex-wrap xl:flex-nowrap xl:justify-between px-20 py-10 text-center xl:text-left">
        <div className="font-bold px-16">
          <p className="text-2xl md:text-3xl">Enjoy on your TV</p>
          <p className="mt-3">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="relative w-full max-w-[600px] md:max-w-[800px]">
          <img
            src="/assets/tv-removebg.png"
            alt="tv"
            className="w-full h-auto"
          />

          <div
            className="absolute top-[15%] left-[12.5%] w-[74%] h-[64%] 
                 sm:top-[11%] sm:left-[13%] sm:w-[74%] sm:h-[65%]
                 md:top-[14%] md:left-[12.6%]"
          >
            <img
              src="/assets/landing-page.png"
              alt="TV screen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section></section>
    </main>
  );
};

export default Home;
