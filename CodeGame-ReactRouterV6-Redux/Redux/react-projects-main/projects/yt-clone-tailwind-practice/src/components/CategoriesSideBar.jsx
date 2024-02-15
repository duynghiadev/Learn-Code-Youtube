import React from "react";
import { categories } from "../utils/constants";
import CategoryItem from "./CategoryItem";

const CategoriesSideBar = () => {
  return (
    <div className="hidden w-[240px] h-full overflow-x-hidden overflow-y-scroll py-4 px-5 flex-col gap-2 md:flex">
      {categories.map((c, index) => (
        <CategoryItem category={c} key={c.name} />
      ))}
    </div>
  );
};

export default CategoriesSideBar;
