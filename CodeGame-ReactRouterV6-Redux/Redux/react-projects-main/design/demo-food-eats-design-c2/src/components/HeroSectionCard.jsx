import React from "react";

const HeroSectionCard = ({ img, title, subtitle }) => {
  return (
    <div className="rounded-3xl max-h-[200px] relative">
      {/* Overlay */}
      <div className="absolute top-0 left-0 px-2 py-4 flex flex-col justify-between bg-black/50 h-[100%] w-[100%] rounded-3xl">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
          <h4 className="text-sm sm:text-lg text-white mt-2">{subtitle}</h4>
        </div>
        <button className="bg-white px-4 py-2 rounded-full text-black self-start">
          Order Now
        </button>
      </div>

      {/* Image */}
      <img
        src={img}
        alt={title}
        className="max-h-[200px] w-[100%] rounded-3xl"
      />
    </div>
  );
};

export default HeroSectionCard;
