import React, { useRef, useState } from "react";
import { useGlobalContext } from "../context/app-context";

const MealSearch = () => {
  const [searchBy, setSearchBy] = useState("");

  const { getRandomMeal, setSearchTerm } = useGlobalContext();

  const handleSearchTermChange = (event) => {
    setSearchBy(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchBy) {
      setSearchTerm(searchBy);
    }
  };

  const handleSurpriseMeal = () => {
    setSearchBy("");
    setSearchTerm("");
    getRandomMeal();
  };

  return (
    <div className="max-w-[1280px] mx-auto px-10 py-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row flex-wrap md:space-x-4">
          <input
            placeholder="type favorite meal"
            className="px-3 py-1 rounded-md max-w-[200px] border border-gray-200 text-black bg-zinc-100"
            value={searchBy}
            onChange={handleSearchTermChange}
          />
          <button
            className="px-3 py-2 text-xs text-white bg-indigo-500 rounded-md"
            type="submit"
          >
            Search
          </button>
          <button
            className="px-3 py-2 text-xs text-indigo-500 bg-indigo-100 rounded-md hover:bg-black hover:text-white"
            type="button"
            onClick={handleSurpriseMeal}
          >
            Surprise Me !
          </button>
        </div>
      </form>
    </div>
  );
};

export default MealSearch;
