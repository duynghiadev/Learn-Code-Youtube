import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const SideBar = ({ currentCategory, onChangeCategory }) => {
  const handleCategoryChange = (newCategory) => {
    onChangeCategory(newCategory);
  };

  return (
    <Stack
      spacing={1}
      sx={{
        flexDirection: { xs: "row", md: "column" },
        height: { sx: "auto", md: "95%" },
        overflowX: { xs: "auto", md: "visible" },
        overflowY: { xs: "visible", md: "auto" },
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat.name}
          className="category-button"
          style={{
            backgroundColor: cat.name === currentCategory && "#fc1503",
          }}
          onClick={() => handleCategoryChange(cat.name)}
        >
          <span
            style={{ color: cat.name === currentCategory ? "white" : "red" }}
          >
            {cat.icon}
          </span>
          <span style={{ opacity: cat.name === currentCategory ? "1" : "0.8" }}>
            {cat.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
