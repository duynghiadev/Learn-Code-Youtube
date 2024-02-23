import React from "react";
import { useGlobalContext } from "../context/app-context";

const Modal = () => {
  const { modalProperties, onModalClose } = useGlobalContext();

  const { meal } = modalProperties;

  return (
    <div>
      {/* adding the dark bg */}
      <div
        className="bg-modalBg fixed top-0 left-0 w-[100%] h-[100%] flex flex-col items-center justify-center z-20"
        onClick={onModalClose}
      >
        {/* Actual modal (pop-up) */}
        <div
          className="w-[80vw] h-[80vh] max-w-[800px] bg-white overflow-scroll flex flex-col space-y-3"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={meal.strMealThumb} alt="receipe" className="h-[15rem]" />
          <div className="px-4 flex flex-col space-y-6">
            <h3 className="text-xl">{meal.strMeal}</h3>
            <p className="text-md">Cooking Instructions</p>
            <p className="text-md text-left max-w-[80%]">
              {meal.strInstructions}
            </p>
            <a
              href={meal.strSource}
              className="text-md text-indigo-500 underline"
              target="_blank"
            >
              Original Source
            </a>
            <button
              onClick={onModalClose}
              className="w-[100px] px-2 py-1 bg-red-100  text-red-700 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
