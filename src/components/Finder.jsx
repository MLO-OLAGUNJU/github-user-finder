import React from "react";
import { MdLightMode } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Finder = () => {
  return (
    <>
      <main className="max-w-[50%] flex justify-center flex-col items-center mx-auto h-screen">
        <nav className="flex justify-between items-center w-full my-4">
          <h1 className="text-3xl font-bold text-gray-80>">FindDev</h1>
          <div className="flex items-center justify-between gap-3 text-xl">
            <h1>Light</h1>
            <MdLightMode className="text-3xl" />
          </div>
        </nav>
        <nav className="flex justify-between items-center w-full my-4 bg-[#1F2A48] px-10 py-4 shadow-lg rounded-3xl">
          <FaMagnifyingGlass className="text-3xl" />
          <h1 className="text-3xl font-bold text-gray-80>">FindDev</h1>
          <div className="flex items-center justify-between gap-3 text-xl">
            <h1>Light</h1>
          </div>
        </nav>
      </main>
    </>
  );
};

export default Finder;
