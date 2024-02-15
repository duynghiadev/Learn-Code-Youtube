import React from "react";

const NewsLetterFlex = () => {
  return (
    <div className="px-6 py-12 bg-black">
      <div className="max-w-[1240px] mx-auto flex flex-col space-y-6 md:flex-row md:justify-between md:space-y-0">
        <div className="flex flex-col">
          <p className="text-white text-xl font-bold sm:text-2xl md:text-3xl">
            Want tips & tricks to optimize your flow?
          </p>
          <p className="text-white">
            Sign up to our newsletter and stay up to date
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-md w-[100%] p-2 focus:outline-none"
            />
            <button className="bg-brightGreen rounded-md w-[200px] mx-auto px-4 py-2 hover:bg-black hover:text-brightGreen hover:border border-brightGreen">
              Notify me
            </button>
          </div>
          <p className="text-white text-sm">
            We care about the protection of your data. Read our{" "}
            <a href="/" className="text-brightGreen underline">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterFlex;
