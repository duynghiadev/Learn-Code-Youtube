import React from "react";
import computerImage from "../assets/laptop.jpg";

const IntroductionGrid = () => {
  return (
    <div className="w-full bg-white px-4 py-16">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2">
        <div>
          <img src={computerImage} alt="data" className="w-[100%]" />
        </div>
        <div className="flex flex-col space-y-3 md:space-y-5">
          <p className="font-bold uppercase text-brightGreen text-xl md:text-2xl">
            data analytics dashboard
          </p>
          <h3 className="font-bold text-3xl md:text-4xl">
            Manage Data Analytics Centrally
          </h3>
          <p className="text-black">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
          <button className="rounded px-5 py-2 bg-black text-brightGreen hover:bg-brightGreen hover:text-black w-[200px] mx-auto md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroductionGrid;
