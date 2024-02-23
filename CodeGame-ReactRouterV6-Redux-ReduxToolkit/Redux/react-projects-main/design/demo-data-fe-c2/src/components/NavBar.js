import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);
  };

  return (
    <nav className="max-w-[1240px] mx-auto p-6 flex flex-row justify-between h-24 items-center">
      <a
        href="/"
        className="text-2xl text-brightGreen font-bold uppercase md:text-3xl"
      >
        react.
      </a>

      <div className="hidden flex-row space-x-4 items-center md:flex">
        <ul className="flex flex-row space-x-8">
          <li>
            <a className="text-white text-base hover:font-bold " href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-white text-base hover:font-bold " href="/">
              Company
            </a>
          </li>
          <li>
            <a className="text-white text-base hover:font-bold " href="/">
              Resources
            </a>
          </li>
          <li>
            <a className="text-white text-base hover:font-bold " href="/">
              About
            </a>
          </li>
          <li>
            <a className="text-white text-base hover:font-bold " href="/">
              Contact
            </a>
          </li>
        </ul>

        <button className="px-3 py-2 bg-white text-black rounded hover:text-white hover:bg-black hover:border border-brightGreen">
          Get Started
        </button>
      </div>

      {/* Hamburger mobile menu icon and close icon */}
      <div className="md:hidden">
        {!isMobileMenuOpen && (
          <AiOutlineMenu
            className="text-white cursor-pointer text-xl"
            onClick={toggleMobileMenu}
          />
        )}
        {isMobileMenuOpen && (
          <AiOutlineClose
            className="text-white cursor-pointer text-xl"
            onClick={toggleMobileMenu}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {/* // can be done thru this also but want transition so added ternary operator on vlassname */}
      {/* {isMobileMenuOpen && ( */}
      <div
        className={
          isMobileMenuOpen
            ? "fixed top-[2rem] left-0 w-[60%] border-r border-r-gray-900 bg-black h-[100%] ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%] md:hidden"
        }
      >
        <a
          href="/"
          className="m-4 text-2xl text-brightGreen font-bold uppercase md:text-3xl"
        >
          react.
        </a>

        <ul className="m-4 flex flex-col space-y-8">
          <li className="border-b border-b-gray-600">
            <a className="text-white text-base hover:font-bold " href="/">
              Home
            </a>
          </li>
          <li className="border-b border-b-gray-600">
            <a className="text-white text-base hover:font-bold " href="/">
              Company
            </a>
          </li>
          <li className="border-b border-b-gray-600">
            <a className="text-white text-base hover:font-bold " href="/">
              Resources
            </a>
          </li>
          <li className="border-b border-b-gray-600">
            <a className="text-white text-base hover:font-bold " href="/">
              About
            </a>
          </li>
          <li className="border-b border-b-gray-600">
            <a className="text-white text-base hover:font-bold " href="/">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* )} */}
    </nav>
  );
};

export default NavBar;
