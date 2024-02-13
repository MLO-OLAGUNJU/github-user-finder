import React from "react";
import { MdLightMode } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { SlSocialGithub } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { ImLink } from "react-icons/im";
import { CgOrganisation } from "react-icons/cg";

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

        <div className=" bg-[#1F2A48] rounded-2xl flex items-start px-8 w-full gap-10 py-8">
          <div className=" h-28 w-28 bg-slate-200 rounded-full p-4 text-[#1F2A48] col-span-1 flex justify-center items-center">
            {!user ? (
              <SlSocialGithub className="w-full h-full" />
            ) : (
              <img src={user.img} alt="" className="w-full h-full" />
            )}
          </div>

          <div className="flex items-start flex-col justify-start">
            <div className="flex justify-between items-center w-[400px] ">
              <h1 className=" font-bold text-2xl">The Octotat</h1>
              <p className=" text-slate-300 opacity-[0.8] text-sm">
                Joined 25 Jan 2024
              </p>
            </div>
            <p className="text-[#0079FE] opacity-[0.8]">@octotat</p>
            <p className=" opacity-[0.8] text-sm mt-5 mb-5">
              This Profile has no Bio
            </p>

            <div className="bg-[#141C2F] flex gap-14 items-center w-[400px] p-3 rounded-lg pl-7">
              <div className="flex flex-col items-start justify-start">
                <span>Repos</span>
                <span>8</span>
              </div>
              <div className="flex flex-col items-start justify-start">
                <span>Followers</span>
                <span>8000</span>
              </div>
              <div className="flex flex-col items-start justify-start">
                <span>Following</span>
                <span>7600</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between w-full">
              <div className="flex items-center justify-between">
                <FaLocationDot />
                <span>San Fracisco</span>
              </div>
              <div className="flex items-center justify-between">
                <FaXTwitter />
                <span>Not Available</span>
              </div>
              <div className="flex items-center justify-between">
                <ImLink />
                <span>www.pepperjs.com</span>
              </div>
              <div className="flex items-center justify-between">
                <CgOrganisation />
                <span>@github</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Finder;
