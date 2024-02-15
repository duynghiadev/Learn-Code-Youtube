import React from "react";
import cyberImg from "../images/cyber-bg.png";
import { HiDatabase } from "react-icons/hi";
import { CgDatabase } from "react-icons/cg";
import { BsCloudDrizzleFill } from "react-icons/bs";
import { SiFastapi } from "react-icons/si";

const Hero = () => {
  return (
    <div className="bg-gray-300">
      <div className="max-w-[1280px] mx-auto px-2 pt-16 pb-16 flex flex-col space-y-6 md:items-center md:pt-24">
        {/* text + image */}
        <div className="flex flex-col space-y-4 md:items-center md:flex-row md:space-y-0">
          <div className="flex flex-col space-y-4">
            <p className="text-lg md:text-xl">Unique Sequencing & Production</p>
            <h1 className="text-4xl font-bold max-w-[50%] md:text-5xl">
              Cloud Management
            </h1>
            <p className="text-lg">This is our tech brand</p>
            <button className="px-4 py-2">Get Started</button>
          </div>
          <div>
            <img src={cyberImg} alt="cyber-bg" className="w-full" />
          </div>
        </div>

        {/* services */}
        <div className="bg-gray-300 drop-shadow-xl py-4 px-8 mx-2 rounded-md flex flex-col items-center space-y-6">
          <h3 className="font-bold">Data Services</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 justify-items-center md:grid-cols-4">
            <div className="flex flex-row space-x-2 items-center">
              <HiDatabase className="text-lg text-indigo-600" />
              <p className="text-sm md:text-lg">App Security</p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <CgDatabase className="text-lg text-indigo-600" />
              <p className="text-sm md:text-lg">Dashboard Design</p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <BsCloudDrizzleFill className="text-lg text-indigo-600" />
              <p className="text-sm md:text-lg">Cloud Data</p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <SiFastapi className="text-lg text-indigo-600" />
              <p className="text-sm md:text-lg">API Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
