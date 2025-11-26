import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../app/store";
import { fetchMoviesWithTrailers } from "../components/movies/movieSlice";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { movieLogos } from "../lib/constant";

const PlayMovie = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { activeMovie } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMoviesWithTrailers());
  }, [dispatch]);

  return (
    <div className="flex flex-col max-w-[800px] top-3 absolute z-50 xl:top-2 md:right-[30%] rounded-xl border-2">
      {activeMovie ? (
        <div
          key={activeMovie.id}
          className="w-full flex flex-col items-start pt-24 bg-[#05051c] z-30 relative"
        >
          <div className="absolute inset-0 top-0 z-0">
            {activeMovie.trailerUrl ? (
              <ReactPlayer
                src={activeMovie.trailerUrl}
                playing
                loop
                muted
                width="100%"
                height="50%"
                className="inset-0 object-cover"
              />
            ) : (
              <div className="w-full h-full bg-black flex items-center justify-center text-white">
                No trailer available
              </div>
            )}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="absolute z-20 px-5">
            <img
              src={movieLogos[activeMovie.title] || ""}
              alt="logo"
              className="w-[70%] h-[20%]"
            />
          </div>

          <div className="flex flex-col py-5 bg-black/90 px-5 relative z-30 mt-[350px] border-t-2">
            <div className="flex flex-row items-center gap-3">
              <div className="w-[200px] h-1 bg-white"></div>
              <p>1 of 170ms</p>
            </div>

            <div className="flex flex-row justify-between mt-3 items-start pb-4">
              <div className="flex gap-3">
                <button className="bg-white flex items-center px-7 text-black gap-3">
                  <img
                    src="/assets/play.png"
                    alt="play button"
                    className="w-5 h-5"
                  />
                  Play
                </button>
                <button className="border-2 rounded-full py-3 px-2">
                  <img
                    src="/assets/Plus.png"
                    alt=""
                    className="w-10 h-7 md:w-12 md:h-10"
                  />
                </button>
                <button className="border-2 px-3 py-2 rounded-full">
                  <img
                    src="/assets/Thumbs Up.png"
                    alt=""
                    className="w-10 h-10"
                  />
                </button>
              </div>
              <div>
                <button className="border-2 rounded-full px-3 py-1.5">
                  <img src="/assets/Mute.png" alt="" />
                </button>
              </div>
            </div>
            <p className="text-green-700">
              99% <span className="text-white">2023 2h 50m</span>
            </p>
            <p>self harm, suicide, violence, use, tobacco</p>

            <div className="flex flex-row items-center gap-3 my-5">
              <div className="bg-red-600 w-24 px-6 py-2 rounded flex">
                Top10
              </div>
              <p>#1 in Movie Today</p>
            </div>

            <p className="text-white">
              {activeMovie.overview || "No description available"}
            </p>

            <p className="uppercase border-2 w-14 text-center mt-2.5">Cast</p>

            <div className="flex flex-row gap-5 py-6">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src="/assets/logo/Ellipse 2.png"
                  alt="Sangeeth Ram Charah"
                  className="h-[50px] w-[50px]"
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PlayMovie;
