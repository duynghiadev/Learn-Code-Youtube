import React from "react";
import { FOOD_OFFERS, HERO_IMAGE } from "../utils/constants";
import HeroSectionCard from "./HeroSectionCard";

const Hero = () => {
  return (
    <>
      <div className="relative max-h-[550px]">
        {/* Overlay + text */}
        <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-black/60 flex flex-col px-4 justify-center gap-2">
          <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl">
            The <span className="text-orange-600">Best</span>
          </h1>
          <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl">
            <span className="text-orange-600">Foods</span> Delivered
          </h1>
        </div>

        {/* Image container */}

        <img src={HERO_IMAGE} alt="food" className="max-h-[550px] w-[100%]" />
      </div>

      {/* Hero section cards */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {FOOD_OFFERS.map((offer) => (
          <HeroSectionCard key={offer.id} {...offer} />
        ))}
      </div>
    </>
  );
};

export default Hero;
