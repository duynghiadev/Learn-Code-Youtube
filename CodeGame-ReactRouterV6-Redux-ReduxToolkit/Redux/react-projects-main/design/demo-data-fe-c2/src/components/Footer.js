import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-4 py-12 bg-black">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 gap-y-6 md:grid-cols-4 md:gap-y-0 md:gap-x-8">
        <div className="flex flex-col space-y-4 md:col-span-1">
          <h3 className="uppercase text-brightGreen text-lg font-bold md:text-xl">
            react.
          </h3>
          <p className="text-white text-sm md:text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum
            velit laoreet id donec
          </p>
          <div className="grid grid-cols-5 gap-x-2 text-white">
            <FaFacebookSquare className="cursor-pointer text-2xl  md:text-lg" />
            <FaInstagramSquare className="cursor-pointer text-2xl  md:text-lg" />
            <FaTwitterSquare className="cursor-pointer text-2xl  md:text-lg" />
            <FaGithubSquare className="cursor-pointer text-2xl  md:text-lg" />
            <FaDribbbleSquare className="cursor-pointer  text-2xl md:text-lg" />
          </div>
        </div>

        {/* links container */}
        <div className="grid grid-cols-3 gap-x-2 text-white md:col-span-3">
          <div className="flex flex-col space-y-3">
            <a href="/">Solutions</a>
            <a href="/">Analytics</a>
            <a href="/">Marketing</a>
            <a href="/">Commerce</a>
            <a href="/">Insights</a>
          </div>
          <div className="flex flex-col space-y-3">
            <a href="/">Support</a>
            <a href="/">Pricing</a>
            <a href="/">Documnetation</a>
            <a href="/">Guides</a>
            <a href="/">API Status</a>
          </div>
          <div className="flex flex-col space-y-3">
            <a href="/">Company</a>
            <a href="/">About</a>
            <a href="/">Blog</a>
            <a href="/">Jobs</a>
            <a href="/">Press</a>
            <a href="/">Partners</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
