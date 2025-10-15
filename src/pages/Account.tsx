import Header from "../layout/Header";
import MainMovie from "./MainMovie";

const Account = () => {
  return (
    <section className="flex flex-col">
      <Header />
      <div className="w-full flex flex-col items-start px-5 pb-10 md:pb-20 md:px-12 lg:px-20">
        <div className="">
          <img
            src="/assets/Bheem For Ramaraju - Ramaraju Intro - RRR(Telugu) _ NTR, Ram Charan, Ajay Devgn _ SS Rajamouli (1) 1.png"
            alt=""
            className="p-0"
          />
        </div>
        <p className="w-full max-w-[700px] xl:max-w-[500px] py-4">
          RRR is a fictional story about two Indian revolutionaries who fought
          against British colonialists in the 1920s. The film is set in the
          1920s and spoken in the Telugu language.
        </p>
        <div className="flex flex-row items-center gap-3 my-5">
          <div className="bg-red-600 w-24 px-6 py-2 rounded flex">Top10</div>
          <p>#1 in Movie Today</p>
        </div>
        <div className="flex flex-row gap-5">
          <button className="bg-white flex items-center px-7 text-black gap-3 py-3">
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
            className="border-2 rounded-full w-14 h-14 md:w-20 md:h-20"
          />
          <div className="bg-white w-5 h-12 md:h-20"></div>
          <p>U/A 13+</p>
        </div>
      </div>
      <MainMovie />
    </section>
  );
};

export default Account;
