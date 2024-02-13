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
        <nav className="flex justify-between items-center w-full my-4 bg-[#1F2A48] px-10 py-2 pr-3 shadow-lg rounded-2xl">
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

        <div className=" bg-[#1F2A48] rounded-2xl grid grid-cols-2 w-full px-3 py-3">
          <div className=" h-36 w-36">
            {!user ? (
              <SlSocialGithub className="w-full h-full" />
            ) : (
              <img src={user.img} alt="" className="w-full h-full" />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Finder;
