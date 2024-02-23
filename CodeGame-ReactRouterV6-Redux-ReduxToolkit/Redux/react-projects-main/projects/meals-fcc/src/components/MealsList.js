import React from "react";
import { useGlobalContext } from "../context/app-context";
import Card from "./Card";

const MealsList = () => {
  const { meals, isLoading, setModalProperties } = useGlobalContext();

  const handleShowDetail = (meal) => {
    const modalProperties = { meal, isOpen: true };
    setModalProperties(modalProperties);
  };

  return (
    <div className="max-w-[1280px] mx-auto py-12 px-10 bg-gray-100 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {isLoading && <p className="text-black text-lg">Loading...</p>}
      {!isLoading && meals.length === 0 && (
        <p className="text-black text-lg">No Meals Found</p>
      )}
      {!isLoading &&
        meals.length > 0 &&
        meals.map((meal) => (
          <Card
            meal={meal}
            key={meal.idMeal}
            onShowDetail={(e) => handleShowDetail(meal)}
          />
        ))}
    </div>
  );
};

export default MealsList;
