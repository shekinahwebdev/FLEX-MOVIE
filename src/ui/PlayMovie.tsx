const PlayMovie = () => {
  return (
    <div className="border-2 flex flex-col max-w-[800px] px-5 ">
      <div className="w-full max-w-[800px] max-h-[400px] flex flex-col items-start border-2 pt-24 bg-blacl/20">
        <div className="p">
          <img
            src="/assets/logo/rrr.png"
            alt="logo"
            className=" w-[70%] h-[20%]"
          />
        </div>
      </div>

      <div className="flex flex-col py-5">
        <div className="flex flex-row items-center gap-3">
          <div className="w-[200px] h-2 bg-white"></div>
          <p>1 of 170ms</p>
        </div>
        <div className="flex flex-row justify-between mt-3 items-start">
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
            <button className="border-2 rounded-full px-4 py-2">
              <img src="/assets/Mute.png" alt="" className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayMovie;
