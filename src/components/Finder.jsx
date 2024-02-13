import React from "react";
import { MdLightMode } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Finder = () => {
  return (
    <>
      <main className="max-w-[50%] flex justify-center flex-col items-center mx-auto h-screen px-3">
        <nav className="flex justify-between items-center w-full my-4">
          <h1 className="text-3xl font-bold text-gray-80>">FindDev</h1>
          <div className="flex items-center justify-between gap-3 text-xl">
            <h1>Light</h1>
            <MdLightMode className="text-3xl" />
          </div>
        </nav>
        <nav className="flex justify-between items-center w-full my-4 bg-[#1F2A48] px-10 py-4 shadow-lg rounded-2xl">
          <div className="flex items-center gap-4">
            <FaMagnifyingGlass className=" text-xl text-[#0079FE]" />
            <input
              type="text"
              placeholder="Search GitHub Username..."
              className=" text-start px-4 w-[400px] outline-none border-none bg-[#1F2A48]"
            />
          </div>
          <div className="flex items-center justify-between gap-3 text-xl">
            <button className="bg-[#0079FE]">Search</button>
          </div>
        </nav>
      </main>
    </>
  );
};

export default Finder;
