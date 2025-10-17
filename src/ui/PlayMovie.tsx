import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../app/store";
import { fetchMoviesWithTrailers } from "../components/movies/movieSlice";
import { useEffect } from "react";
import ReactPlayer from "react-player";

const PlayMovie = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMoviesWithTrailers());
  }, [dispatch]);

  const movie = list[0];
  console.log(movie);

  return (
    <div className="flex flex-col max-w-[800px] absolute z-50 xl:top-0 md:right-[30%]">
      {movie.trailerUrl && (
        <ReactPlayer
          src={movie.trailerUrl}
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="absolute inset-0 object-cover"
        />
      )}
      <div className="w-full max-w-[800px] max-h-[400px] flex flex-col items-start pt-24 bg-white/90 border-2 z-30">
        <div className="p">
          <img
            src="/assets/logo/rrr.png"
            alt="logo"
            className=" w-[70%] h-[20%]"
          />
        </div>
      </div>
      <div className="flex flex-col py-5 bg-black px-5">
        <div className="flex flex-row items-center gap-3">
          <div className="w-[200px] h-1 bg-white"></div>
          <p>1 of 170ms</p>
        </div>
        <div className="flex flex-row justify-between mt-3 items-start pb-4">
          <div className="flex gap-3">
            <button className="bg-white flex items-center px-7 text-black gap-3">
              <img src="/assets/play.png" alt="" className="w-5 h-5" />
              Play
            </button>
            <button className=" border-2 rounded-full py-3 px-2">
              <img
                src="/assets/Plus.png"
                alt=""
                className="w-10 h-7 md:w-12 md:h-10"
              />
            </button>
            <button className="border-2 px-3 py-2 rounded-full">
              <img src="/assets/Thumbs Up.png" alt="" className="w-10 h-10" />
            </button>
          </div>
          <div>
            <button className="border-2 rounded-full px-3 py-1.5">
              <img src="/assets/Mute.png" alt="" className="" />
            </button>
          </div>
        </div>
        <p className="text-green-700">
          99% <span className="text-white">2023 2h 50m</span>
        </p>
        <p>self harm,suicide,violence,use,tobacco</p>
        <div className="flex flex-row items-center gap-3 my-5">
          <div className="bg-red-600 w-24 px-6 py-2 rounded flex">Top10</div>
          <p>#1 in Movie Today</p>
        </div>
        <p>
          In this action-thriller, a prison warden recruits inmates to commit
          crimes.
        </p>
        <p className="uppercase border-2 w-14 text-center mt-2.5">Cast</p>
        <div className="flex flex-row gap-5 py-6">
          <div>
            <img
              src="/assets/logo/Ellipse 2.png"
              alt="Sangeeth Ram Charah"
              className=""
            />
          </div>
          <div>
            <img
              src="/assets/logo/Ellipse 2.png"
              alt="Sangeeth Ram Charah"
              className=""
            />
          </div>
          <div>
            <img
              src="/assets/logo/Ellipse 2.png"
              alt="Sangeeth Ram Charah"
              className=""
            />
          </div>
          <div>
            <img
              src="/assets/logo/Ellipse 2.png"
              alt="Sangeeth Ram Charah"
              className=""
            />
          </div>
          <div>
            <img
              src="/assets/logo/Ellipse 2.png"
              alt="Sangeeth Ram Charah"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayMovie;
