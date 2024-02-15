import React, { useState } from "react";
import { FOOD_MENU } from "../utils/constants";

const FoodMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const availableCategories = FOOD_MENU.map((f) => f.category);

  const availablePrices = FOOD_MENU.map((f) => f.price);

  return (
    <div className="mt-8 md:mt-12">
      <h3 className="font-bold text-xl text-orange-500 text-center sm:text-3xl md:text-4xl">
        Top Rated Menu Items
      </h3>
      <p className="font-bold text-xl text-black">Filter Type</p>
    </div>
  );
};

export default FoodMenu;
