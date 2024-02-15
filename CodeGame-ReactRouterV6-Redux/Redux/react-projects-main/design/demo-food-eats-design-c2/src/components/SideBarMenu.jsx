import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AiOutlineClose } from "react-icons/ai";
import { MENU_ITEMS } from "../utils/constants";
import MenuItem from "./MenuItem";

const SideBarMenu = () => {
  const { setIsMobileMenuOpen } = useContext(AppContext);

  return (
    <>
      {/* Overlay */}
      <div
        className="w-[100vw] h-[100vh] bg-black/80 z-20 fixed top-0 left-0"
        onClick={() => {
          setIsMobileMenuOpen(false);
        }}
      ></div>

      {/* Sidebar */}
      <div className="bg-white fixed top-0 left-0 w-[300px] h-[100vh] z-30 p-3">
        {/* Heading + close icon */}
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-2xl text-black md:text-3xl">
            Best <span className="font-bold">Eats</span>
          </h1>
          <AiOutlineClose
            className="text-2xl cursor-pointer hover:text-red-600"
            title="Close"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>

        {/* Link Options */}
        <ul className="mt-8 flex flex-col gap-4 items-start">
          {MENU_ITEMS.map((i) => (
            <MenuItem key={i.id} {...i} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBarMenu;
