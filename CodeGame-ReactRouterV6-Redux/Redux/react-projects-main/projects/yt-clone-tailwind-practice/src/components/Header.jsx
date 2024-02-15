import React, { useContext } from "react";
import largeLogo from "../images/yt-logo.png";
import smallLogo from "../images/yt-logo-mobile.png";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiVideoPlus } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import SearchBox from "./SearchBox";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useContext(AppContext);

  return (
    <>
      <div className="sticky top-0 z-5 flex flex-row justify-between items-center px-4 h-14 md:px-5">
        {/* different image for screen size + icon for mobile menu */}
        <div className="flex flex-row gap-2 items-center">
          {/* Hamburger + close */}
          {!mobileMenuOpen && (
            <GiHamburgerMenu
              className="flex text-2xl text-white cursor-pointer md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            />
          )}
          {mobileMenuOpen && (
            <AiOutlineClose
              className="flex text-2xl text-white cursor-pointer md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}

          {/* Logo */}
          <Link to="/">
            <img
              src={smallLogo}
              alt="logo"
              className="h-[20px] flex md:hidden"
            />
          </Link>
          <Link to="/">
            <img
              src={largeLogo}
              alt="logo"
              className="h-[20px] lg:h-[25px] hidden md:flex"
            />
          </Link>
        </div>

        {/* SearchBox */}
        <SearchBox />

        {/* Icons + profile image */}
        <div className="flex flex-row items-center gap-6">
          {/* Icons */}
          <div className="hidden flex-row gap-6  md:flex">
            {/* Surround each icon with div to add hover bg change and circular border */}
            <div className="h-10 w-10 rounded-full flex flex-row items-center justify-center hover:bg-[#303030]/[0.6]">
              <BiVideoPlus className="cursor-pointer text-white text-2xl" />
            </div>
            <div className="h-10 w-10 rounded-full flex flex-row items-center justify-center hover:bg-[#303030]/[0.6]">
              <IoMdNotificationsOutline className="cursor-pointer text-white text-2xl" />
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-8 h-8 rounded-full bg-[#303030] flex flex-row justify-center items-center cursor-pointer hover:bg-black">
            <p className="text-xl  text-red-800 md:text-2xl">R</p>
          </div>
        </div>
      </div>
      {mobileMenuOpen && <MobileMenu />}
    </>
  );
};

export default Header;
