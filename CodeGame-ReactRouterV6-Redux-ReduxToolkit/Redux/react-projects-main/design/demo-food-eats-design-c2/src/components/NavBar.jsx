import React, { useContext, useState } from "react";
import { FaHamburger } from "react-icons/fa";
import {
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { DELIVERY, PICKUP } from "../utils/constants";
import { AppContext } from "../context/AppContext";
import SideBarMenu from "./SideBarMenu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [deliveryMethod, setDeliveryMethod] = useState(DELIVERY);

  const [isSearchBoxFocused, setSearchBoxFocused] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(AppContext);

  const selectedBtnClass = "bg-black text-white";
  const unselectedBtnClass = "bg-gray-500 text-black";

  let deliveryStyleClass = selectedBtnClass;
  let pickupStyleClass = unselectedBtnClass;

  if (deliveryMethod === PICKUP) {
    deliveryStyleClass = unselectedBtnClass;
    pickupStyleClass = selectedBtnClass;
  }

  return (
    <div className="h-24 flex flex-row justify-between items-center py-4 px-2 sticky top-0 z-10 bg-white">
      {/* hamburger_menu + title + buttons */}
      <div className="flex flex-row gap-4 items-center">
        <FaHamburger
          className="text-xl md:text-2xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(true)}
        />
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl">
            Best <span className="font-bold">Eats</span>
          </h1>
        </Link>
        <div className="hidden lg:flex bg-gray-500 rounded-full">
          <button
            className={`py-2 px-2 rounded-full ${deliveryStyleClass}`}
            onClick={() => setDeliveryMethod(DELIVERY)}
          >
            Delivery
          </button>
          <button
            className={`py-2 px-2 rounded-full ${pickupStyleClass}`}
            onClick={() => setDeliveryMethod(PICKUP)}
          >
            Pickup
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex">
        <div className="flex items-center rounded-l-full border border-gray-400 w-[200px] md:w-[400px] lg:w-[500px] px-2">
          {isSearchBoxFocused && (
            <div className="rounded-full ">
              <AiOutlineSearch className="text-xl" />
            </div>
          )}
          <input
            placeholder="Search"
            className="p-2 w-[95%] rounded-l-full focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setSearchBoxFocused(true)}
            onBlur={() => setSearchBoxFocused(false)}
          />
          {searchTerm.length > 0 && (
            <div
              className="rounded-full hover:bg-gray-200 cursor-pointer px-2 py-1"
              onClick={() => setSearchTerm("")}
            >
              <AiOutlineClose className="text-xl" />
            </div>
          )}
        </div>
        {/* search icon */}
        <div
          className="self-stretch py-1 px-4 bg-gray-400 rounded-r-full flex items-center cursor-pointer"
          title="Search"
        >
          <AiOutlineSearch className="text-2xl" />
        </div>
      </div>

      {/* Cart button */}
      <button className="bg-black text-white rounded-full px-4 py-2 gap-2 items-center hidden md:flex">
        <AiOutlineShoppingCart />
        <span>Cart</span>
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && <SideBarMenu />}
    </div>
  );
};

export default NavBar;
