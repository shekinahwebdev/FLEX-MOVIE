import { useNavigate } from "react-router";
import AskQuestions from "../ui/AskQuestions";
import HomeFooter from "../ui/HomeFooter";
import { useEffect, useState } from "react";
import { tvImages, watchedImages } from "../lib/constant";
import { useDispatch, useSelector } from "react-redux";
import { checkEmail } from "../components/auth/authSlice";
import { useAuthForm } from "../hooks/useAuthForm";
import type { RootState } from "../app/store";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { errorMg } = useSelector((state: RootState) => state.auth);
  const { formData, touched, error, handleChange, handleBlur } =
    useAuthForm(false);

  const getStarted = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(checkEmail(formData.email));

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.find((user: any) => user.email === formData.email);
    if (userExists) {
      navigate("/profile");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === tvImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col">
      <header className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/assets/background_banner.jpg')] bg-cover bg-center min-h-screen flex flex-col items-center text-white">
        <div className="self-start flex justify-between items-center w-full mb-10 px-5 py-10 md:px-12 lg:px-20">
          <div className="flex flex-row justify-between items-center w-full">
            <div onClick={() => navigate("/")}>
              <img
                src="/assets/logo.png"
                alt="logo"
                className="w-[120px] xl:w-[150px]"
              />
            </div>
            <button
              className="bg-red-600 px-4 py-2 md:px-6  hover:bg-red-700"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
          </div>
        </div>

        <div className="text-center px-9 flex flex-col gap-3 xl:px-10 justify-center items-center mt-40 w-full max-w-[1000px]">
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
        <form
          onSubmit={getStarted}
          className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-3 my-5"
        >
          <div className="flex flex-col w-full md:w-[500px] relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder=" "
              className="peer p-3 pt-9 text-base rounded text-white bg-[#000000a8] border border-white/40 w-full placeholder-transparent focus:border-green-600 focus:outline-none"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-2 text-white transition-all duration-200 text-base
              peer-placeholder-shown:top-6 peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-base  
              peer-focus:top-[3px] peer-focus:text-sm peer-focus:text-white bg-transparent peer-focus:mt-1"
            >
              Email address
            </label>
            {touched.email && error.username && (
              <p className="text-red-500 text-sm mt-1">{error.username}</p>
            )}
            {errorMg && <p className="text-red-500 text-sm mt-2">{errorMg}</p>}
          </div>
          <div className="flex items-start">
            <button
              className="bg-red-600 text-white px-8 py-3 md:pt-6 md:pb-14 xl:pt-6 xl:pb-14 text-center font-bold rounded md:ml-2 md:h-[52px] hover:bg-red-700 transition xl:text-2xl md:text-xl"
              type="submit"
            >
              Get Started
            </button>
          </div>
        </form>
      </header>
      <section className="flex flex-row items-center justify-center flex-wrap xl:flex-nowrap xl:justify-between px-20 py-16 text-center xl:text-left border-b-8 border-white/40">
        <div className="font-bold px-0 md:px-16">
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
            className="w-full h-auto relative z-10"
          />
          <div
            className="absolute top-[15%] left-[12.5%] w-[74%] h-[64%] 
                 sm:top-[11%] sm:left-[13%] sm:w-[74%] sm:h-[60%]
                 md:top-[19%] md:left-[12.6%]"
          >
            <img
              src={tvImages[currentIndex]}
              alt="TV screen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-row items-center justify-center flex-wrap xl:flex-nowrap xl:justify-between px-20 py-16 text-center xl:text-left border-b-8 border-white/40">
        <div className="relative">
          <img
            src="/assets/image2.png"
            alt="Phone displaying Netflix"
            className="w-full max-w-[600px] h-auto"
          />
          <div
            className="absolute flex items-center justify-between
               bg-black border border-white/35 rounded-lg px-3 py-2
               w-[100%] max-w-[380px] sm:w-[70%] md:w-[60%]
               top-[68%] left-1/2 -translate-x-1/2
               shadow-lg"
          >
            <img
              src="/assets/image3.png"
              alt="Movie cover"
              className="w-[45px] h-[60px] xl:w-[75px] xl:h-[85px] object-cover rounded"
            />
            <div className="flex flex-col ml-3 flex-grow">
              <p className="text-sm sm:text-base font-medium">
                Stranger Things
              </p>
              <p className="text-blue-500 text-xs sm:text-sm">Downloading...</p>
            </div>
            <img
              src="/assets/downloading updates.png"
              alt="Downloading animation"
              className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] ml-3"
            />
          </div>
        </div>
        <div className="font-bold px-16">
          <p className="text-2xl md:text-3xl">
            Download your shows to watch offline
          </p>
          <p className="mt-3">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </section>

      <section className="flex flex-row items-center justify-center flex-wrap xl:flex-nowrap xl:justify-between px-20 py-16 text-center xl:text-left border-b-8 border-white/40">
        <div className="font-bold px-16">
          <p className="text-2xl md:text-3xl">Watch everywhere</p>
          <p className="mt-3">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="relative w-full max-w-[600px] md:max-w-[800px]">
          <img
            src="/assets/image4.png"
            alt="tv"
            className="w-full h-auto relative z-10"
          />
          <div
            className="absolute top-[12%] left-[18%] w-[62%] h-[54%] 
                 sm:top-[10%] sm:left-[17%] sm:w-[62%] sm:h-[42%] overflow-hidden
                 md:top-[11%] md:left-[19%]"
          >
            <img
              src={watchedImages[currentIndex]}
              alt="TV screen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/*  */}
      <section className="flex flex-row items-center justify-center flex-wrap xl:flex-nowrap xl:justify-between px-24 py-16 text-center xl:text-left border-b-8 border-white/40">
        <div className="relative">
          <img
            src="/assets/image5.png"
            alt="Phone displaying Netflix"
            className="w-full max-w-[600px] h-auto"
          />
        </div>
        <div className="font-bold px-16">
          <p className="text-2xl md:text-3xl">Create profiles for kids</p>
          <p className="mt-3">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </section>
      <AskQuestions
        getStarted={getStarted}
        value={formData.email}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errorMg}
      />
      <HomeFooter />
    </main>
  );
};

export default Home;
