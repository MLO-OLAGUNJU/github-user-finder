import React from "react";
import { MdLightMode } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { SlSocialGithub } from "react-icons/sl";

const Finder = () => {
  const user = false;
  return (
    <>
      <main className="max-w-[50%] flex justify-center flex-col items-center mx-auto h-screen px-3">
        <nav className="flex justify-between items-center w-full my-1">
          <h1 className="text-3xl font-bold text-gray-80>">FindDev</h1>
          <div className="flex items-center justify-between gap-3 text-xl">
            <h1>Light</h1>
            <MdLightMode className="text-3xl" />
          </div>
        </nav>
        <nav className="flex justify-between items-center w-full my-4 bg-[#1F2A48] px-10 py-10 pr-3 shadow-lg rounded-2xl">
          <div className="flex items-center gap-4">
            <FaMagnifyingGlass className=" text-xl text-[#0079FE]" />
            <input
              type="text"
              placeholder="Search GitHub Username..."
              className=" text-start px-4 w-[400px] outline-none border-none bg-[#1F2A48]"
            />
          </div>
          <div className="flex items-center justify-between gap-3 text-xl">
            <button className="bg-[#0079FE] py-2 px-3 rounded-2xl">
              Search
            </button>
          </div>
        </nav>

        <div className=" bg-[#1F2A48] rounded-2xl flex items-center px-8 w-full gap-10 py-3">
          <div className=" h-28 w-28 bg-slate-200 rounded-full p-4 text-[#1F2A48] col-span-1 flex justify-center items-center">
            {!user ? (
              <SlSocialGithub className="w-full h-full" />
            ) : (
              <img src={user.img} alt="" className="w-full h-full" />
            )}
          </div>

          <div className="flex items-start flex-col justify-start">
            <div className="flex justify-between items-center w-full gap-20">
              <h1 className=" font-bold text-2xl">The Octotat</h1>
              <p className=" text-slate-300 opacity-[0.8] text-sm">
                Joined 25 Jan 2024
              </p>
            </div>
            <p className="text-[#0079FE] opacity-[0.8]">@octotat</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Finder;
