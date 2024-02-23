import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const CategoryItem = ({ category: c }) => {
  const { selectedCategory, setSelectedCategory } = useContext(AppContext);

  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    if (category.type !== "menu") {
      setSelectedCategory(category.name);
      navigate("/");
    }
  };

  return (
    <>
      <div
        className="flex flex-row gap-4 items-center p-3 hover:bg-[#303030]/[0.6] cursor-pointer rounded-lg text-sm"
        style={{
          backgroundColor: c.name === selectedCategory ? "#303030" : "",
        }}
        onClick={() => handleCategoryChange(c)}
      >
        <div className="text-xl">{c.icon}</div>
        <p>{c.type === "home" ? "Home" : c.name}</p>
      </div>
      {c.divider && <hr className="border border-white/[0.2] my-5" />}
    </>
  );
};

export default CategoryItem;
