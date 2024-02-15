import React from "react";
import { BsHandThumbsUp } from "react-icons/bs";

const Card = ({ meal, onShowDetail }) => {
  return (
    <div className="rounded-md flex flex-col pb-4 space-y-3 bg-white shadow-sm hover:shadow-2xl ease-in-out duration-500">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-[100%]"
        onClick={onShowDetail}
      />

      <div className="flex flex-row px-6 justify-between items-center">
        <p className="text-black text-lg md:text-xl">{meal.strMeal}</p>
        <BsHandThumbsUp className="text-lg cursor-pointer hover:text-xl hover:-translate-y-1" />
      </div>
    </div>
  );
};

export default Card;
