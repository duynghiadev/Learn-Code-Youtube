const population = {
  male: 4,
  female: 93,
  others: 10,
};

let totalPopulation = 0;
let numbers = Object.values(population);

numbers.forEach((number) => {
  totalPopulation += number;
});

console.log(totalPopulation); // 107

/***************************************** */
// const scores = [11, 22, 33, 44, 55, 66];

// scores.forEach((score) => {
//   console.log(score);
// });
