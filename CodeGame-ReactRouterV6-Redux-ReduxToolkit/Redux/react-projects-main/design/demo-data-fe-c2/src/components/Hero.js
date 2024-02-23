import React from "react";

const Hero = () => {
  return (
    <div className="mt-[-96px] h-screen max-w-[900px] mx-auto flex flex-col space-y-5 items-center justify-center md:space-y-10">
      <p className="uppercase text-brightGreen text-sm font-bold">
        growing with data analytics
      </p>
      <h1 className="text-4xl text-white font-bold sm:text-5xl md:text-7xl">
        Grow with data.
      </h1>
      <h3 className="text-white text-xl font-bold sm:text-4xl md:text-5xl">
        Fast, flexible financing for SASS
      </h3>
      <p className="max-w-[80%] text-gray-400 font-bold text-xl text-center md:text-2xl">
        Monitor your data analytics to increse for BTB, BTC & SASS platforms.
      </p>
      <button className="bg-brightGreen text-black py-2 px-10 rounded-md hover:bg-black hover:border border-brightGreen hover:text-brightGreen">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
