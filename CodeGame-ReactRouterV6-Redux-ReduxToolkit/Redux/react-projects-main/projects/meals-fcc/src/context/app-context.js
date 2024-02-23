import { createContext, useContext, useEffect, useState } from "react";
import Modal from "../components/Modal";
import * as mealsService from "../services/meals.service";

export const AppContext = createContext({
  meals: [],
  favorites: [],
  isLoading: false,
  modalProperties: { isOpen: false, meal: null },
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  setSearchTerm: () => {},
  getRandomMeal: () => {},
  onModalClose: () => {},
  setModalProperties: () => {},
});

export const AppContextProvider = (props) => {
  const [meals, setMeals] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [modalProperties, setModalProperties] = useState({
    isOpen: false,
    meal: null,
  });

  const [favorites, setFavorites] = useState([]);

  const fetchMeals = async (term) => {
    setIsLoading(true);
    const data = await mealsService.searchMealsBy(term);
    setIsLoading(false);
    setMeals(data);
  };

  const getRandomMeal = async () => {
    const data = await mealsService.getRandomMeal();
    setMeals(data);
  };

  // 2 useEffect to handle bug when we click on surprise me and change searchTerm state to ""
  // at that time we don't want useEffect to run
  // but initially when searchTerm is empty it shoudl run
  useEffect(() => {
    fetchMeals();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    fetchMeals(searchTerm);
  }, [searchTerm]);

  const onModalClose = () => {
    setModalProperties({ isOpen: false, meal: null });
  };

  const addToFavorites = (newItem) => {
    setFavorites((prev) => [...prev, newItem]);
  };

  const removeFromFavorites = (itemToBeRemoved) => {
    setFavorites((prev) =>
      prev.filter((m) => m.idMeal !== itemToBeRemoved.idMeal)
    );
  };

  const context = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    meals,
    isLoading,
    setSearchTerm,
    getRandomMeal,
    modalProperties,
    onModalClose,
    setModalProperties,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  return context;
};
