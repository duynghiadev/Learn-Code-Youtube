import React from "react";

const About = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1280px] mx-auto px-2 py-12  flex flex-col items-center space-y-3">
        <h2 className="text-2xl font-bold md:text-3xl">
          Trusted by developers across the world
        </h2>
        <p className="text-left text-gray-700 text-sm md:max-w-[60%] md:text-center">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div className="grid grid-cols-1 gap-y-1 drop-shadow-md w-[100%] md:w-[70%] md:grid-cols-3 md:gap-x-1 md:gap-y-0">
          <div className="py-4 bg-gray-100 flex flex-col items-center">
            <p className="text-3xl text-indigo-600 md:text-5xl">100%</p>
            <p className="text-sm text-gray-400">Completion</p>
          </div>
          <div className="py-4 bg-gray-100 flex flex-col items-center">
            <p className="text-3xl text-indigo-600 md:text-5xl">24/7</p>
            <p className="text-sm text-gray-400">Delivery</p>
          </div>
          <div className="py-4 bg-gray-100 flex flex-col items-center">
            <p className="text-3xl text-indigo-600 md:text-5xl">100K</p>
            <p className="text-sm text-gray-400">Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
