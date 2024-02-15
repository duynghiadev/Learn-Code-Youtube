import React from "react";
import FoodMenu from "../components/FoodMenu";
import Hero from "../components/HeroSection";

const HomePage = () => {
  return (
    <div className="py-4 px-2">
      <Hero />
      <FoodMenu />
    </div>
  );
};

export default HomePage;
