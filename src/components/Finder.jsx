import React from "react";
import { MdLightMode } from "react-icons/md";

const Finder = () => {
  return (
    <>
      <main className="max-w-[50%] flex justify-center flex-col items-center mx-auto h-screen">
        <nav className="flex justify-between items-center w-full my-4">
          <h1 className="text-3xl font-bold text-gray-80>">FindDev</h1>
          <div className="flex items-center justify-between gap-3 text-xl">
            <h1>Light</h1>
            <MdLightMode />
          </div>
        </nav>
      </main>
    </>
  );
};

export default Finder;
