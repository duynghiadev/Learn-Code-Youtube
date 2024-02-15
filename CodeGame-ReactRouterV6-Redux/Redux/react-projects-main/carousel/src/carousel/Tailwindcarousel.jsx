import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

const Tailwindcarousel = ({ images }) => {
  const totalNoOfItems = images.length;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(totalNoOfItems - 1);
      return;
    }
    setCurrentIndex((val) => val - 1);
  };

  const handleNext = () => {
    if (currentIndex === totalNoOfItems - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex((val) => val + 1);
  };

  const jumpToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="group max-w-[1200px] h-[600px] mx-auto mt-8 rounded-xl relative">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full rounded-xl bg-center bg-cover duration-1000"
      ></div>

      {/* Left and Right Arrows */}
      <div className="hidden absolute top-0 left-0 w-full h-full flex-row items-center justify-between text-white text-5xl group-hover:flex">
        <AiOutlineLeft className="cursor-pointer" onClick={handlePrevious} />
        <AiOutlineRight className="cursor-pointer" onClick={handleNext} />
      </div>

      {/* Jump to image via Dots  */}
      <div className="flex flex-row mt-4 justify-center gap-2 items-start">
        {images.map((_, index) => (
          <RxDotFilled
            key={index}
            onClick={() => jumpToImage(index)}
            className="cursor-pointer text-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Tailwindcarousel;
