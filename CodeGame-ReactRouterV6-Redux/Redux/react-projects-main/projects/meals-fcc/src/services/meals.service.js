export const searchMealsBy = async (searchText = "") => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchText
  );
  const data = await response.json();
  return data.meals ? data.meals.slice(0, 15) : [];
};
export const getRandomMeal = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const data = await response.json();
  return data.meals;
};
