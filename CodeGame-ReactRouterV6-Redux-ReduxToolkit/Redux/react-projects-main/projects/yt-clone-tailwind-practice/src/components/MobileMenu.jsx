import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { categories } from "../utils/constants";
import CategoryItem from "./CategoryItem";

const MobileMenu = () => {
  const { mobileMenuOpen } = useContext(AppContext);

  return (
    <div
      className={`fixed w-[240px] h-[90vh] top-[56px] bg-black z-10 text-white  overflow-x-hidden overflow-y-scroll ${
        mobileMenuOpen ? "left-0" : "left-[-240px]"
      }`}
    >
      {categories.map((c) => (
        <CategoryItem category={c} key={c.name} />
      ))}
    </div>
  );
};

export default MobileMenu;
