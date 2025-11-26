import { useParams } from "react-router";
import Header from "../layout/Header";
import MainMovie from "./MainMovie";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import ReactPlayer from "react-player";
import { useState } from "react";
import { trailers } from "../lib/constant";
import PlayMovie from "../ui/PlayMovie";
import { setActiveMovieByName } from "../components/movies/movieSlice";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Footer from "../layout/Footer";

const Account = () => {
  const { id } = useParams<{ id: string }>();
  const { users } = useSelector((state: RootState) => state.auth);
  const user = users.find((u) => u.id === Number(id));

  const [current, setCurrent] = useState(0);
  const trailer = trailers[current];

  const [showOverlay, setShowOverlay] = useState(false);

  const prevMovie = () => {
    setCurrent((prev) => (prev === 0 ? trailers.length - 1 : prev - 1));
  };
  const nextMovie = () => {
    setCurrent((prev) => (prev + 1) % trailers.length);
  };
  const dispatch = useDispatch();

  const handleMovieByName = () => {
    setShowOverlay((prev) => !prev);

    dispatch(setActiveMovieByName(trailer.name));
  };

  return (
    <section className="flex flex-col relative" key={user?.id}>
      <Header />
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          showOverlay ? " bg-[rgb(0,0,0,0.6)] z-20" : "hidden"
        }`}
        onClick={() => setShowOverlay(false)}
      ></div>
      <div className="w-full flex flex-col items-start px-5 pb-10 md:pb-20 md:px-12 lg:px-20 relative z-0">
        <ReactPlayer
          src={trailer.videoUrl}
          playing
          loop
          muted={true}
          width="100%"
          height="100%"
          className="absolute inset-0 object-cover"
          style={{ pointerEvents: "none" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))] bg-cover bg-center"></div>
        <div className="w-full flex flex-col items-start z-99 relative">
          <img src={trailer.src} alt="" className="p-5 md:max-w-[500px]" />
          <p className="w-full max-w-[700px] xl:max-w-[500px] py-4">
            {trailer.description}
          </p>
          <div className="flex flex-row items-center gap-3 my-5">
            <div className="bg-red-600 w-24 px-6 py-2 rounded flex">Top10</div>
            <p>#1 in Movie Today</p>
          </div>
          <div className="flex flex-row gap-5">
            <button
              className="bg-white flex items-center px-7 text-black gap-3 py-3"
              onClick={handleMovieByName}
            >
              <img src="/assets/play.png" alt="" className="w-5 h-5" />
              Play
            </button>
            <button className="bg-white/30 flex items-center px-7 text-white gap-3 py-3">
              <img src="/assets/info_icon.png" alt="" className="w-6 h-6" />
              More info
            </button>
          </div>
          <div className="flex items-center gap-3 self-end mt-10">
            <img
              src="/assets/Reset.png"
              alt=""
              className="border-2 rounded-full w-14 h-14 md:w-18 md:h-18"
            />
            <div className="bg-white w-5 h-12 md:h-18"></div>
            <p>U/A 13+</p>
          </div>
        </div>
      </div>
      <div>
        <button onClick={nextMovie}>
          <FaArrowRight className="absolute w-10 h-10 md:w-10 md:h-10 top-72 right-5" />
        </button>
      </div>
      <div>
        <button onClick={prevMovie}>
          <FaArrowLeft className="absolute  w-10 h-10 md:w-10 md:h-10 top-72 left-5" />
        </button>
      </div>
      <MainMovie />
      {showOverlay && <PlayMovie />}
      <Footer />
    </section>
  );
};

export default Account;
