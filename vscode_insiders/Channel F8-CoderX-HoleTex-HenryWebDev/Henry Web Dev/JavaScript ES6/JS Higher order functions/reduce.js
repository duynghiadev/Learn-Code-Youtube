const companies = [
  { name: "Vinamilk", category: "Food", start: 1981, end: 2003 },
  { name: "Viettel", category: "Telecommunication", start: 1992, end: 2008 },
  { name: "Sabeco", category: "Food", start: 1999, end: 2007 },
];

const ages = [45, 62, 14, 16, 46, 26, 65, 33, 34, 13, 21, 17, 6, 55, 22];

// reduce
// ES5
let ageSum = 0;
for (let age of ages) {
  ageSum += age;
}
console.log("ES5:", ageSum);

console.log("=".repeat(50));

// ES6
const ageSum_1 = ages.reduce((total, age) => {
  return total + age;
}, 0);
console.log("ES6:", ageSum_1);

console.log("=".repeat(50));

const ageSum_2 = ages.reduce((total, age) => total + age);
console.log("ageSum_2:", ageSum_2);

console.log("=".repeat(50));
