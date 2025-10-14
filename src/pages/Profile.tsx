import { useState } from "react";
import { profileIcons } from "../lib/constant";

const Profile = () => {
  const [isEditted, setIsEditted] = useState(false);

  return (
    <aside className="flex flex-col items-center bg-[rgb(18,18,18)] min-h-[100vh] relative">
      <div className="bg-[#0f0f0f] w-full h-14 xl:h-20"></div>
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isEditted ? " bg-[rgb(0,0,0,0.6)] z-20" : "hidden"
        }`}
      ></div>
      <div className="self-start flex  w-full mb-10 px-5 py-10 md:px-12 lg:px-20 z-30 relative">
        <img
          src="/assets/logo.png"
          alt="logo"
          className="w-[120px] xl:w-[150px] drop-shadow-2xl "
        />
      </div>
      <div className="flex flex-col items-center justify-center px-8 mt-40 relative z-30">
        <p className="text-xl md:text-3xl xl:text-5xl text-center font-bold drop-shadow-2xl">
          Who is watching?
        </p>
        <div className="grid grid-cols-3 gap-5 xl:grid-cols-6 mt-5">
          {profileIcons.map((icons, index) => (
            <div key={index} className="relative">
              <img src={icons.src} alt={icons.name} className="" />
              <img
                src={icons.edit}
                alt=""
                className={`absolute w-[45%] top-[20%] left-[30%] z-50 cursor-pointer ${
                  isEditted ? "block" : "hidden"
                }`}
              />
              <p className="text-center">{icons.name}</p>
            </div>
          ))}
        </div>
        {isEditted ? (
          <button
            className="bg-white text-black px-8 py-2 xl:text-2xl mt-3 xl:mt-7"
            onClick={() => setIsEditted((prev) => !prev)}
          >
            Done
          </button>
        ) : (
          <button
            className="border-1 border-white/25 px-8 py-2 xl:text-2xl mt-3 xl:mt-7 hover:bg-white/10"
            onClick={() => setIsEditted((prev) => !prev)}
          >
            Manage Profiles
          </button>
        )}
      </div>
    </aside>
  );
};

export default Profile;
