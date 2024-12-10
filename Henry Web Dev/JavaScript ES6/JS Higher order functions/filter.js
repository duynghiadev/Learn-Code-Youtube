const companies = [
  { name: "Vinamilk", category: "Food", start: 1981, end: 2003 },
  { name: "Viettel", category: "Telecommunication", start: 1992, end: 2008 },
  { name: "Sabeco", category: "Food", start: 1986, end: 1999 },
];

const ages = [45, 62, 14, 16, 46, 26, 65, 33, 34, 13, 21, 17, 6, 55, 22];

// filter

const diBar = [];
for (let age of ages) {
  if (age >= 18) diBar.push(age);
}
console.log("type old:", diBar);

console.log("=".repeat(60));

const diBar_1 = ages.filter((age) => age >= 18);
console.log("type new:", diBar_1);

console.log("=".repeat(60));

const diBar_2 = ages.filter(function (age) {
  if (age >= 18) return true;
});
console.log("type new:", diBar_2);

console.log("=".repeat(60));

const foodComponies = companies.filter(function (company) {
  if (company.category === "Food") return true;
});
console.log("normal function foodComponies:", foodComponies);

const foodComponies_1 = companies.filter((company) => {
  return company.category === "Food";
});
console.log("arrow function foodComponies_1:", foodComponies_1);

console.log("=".repeat(60));

const companiesTwentiethCentury = companies.filter(
  (company) => company.start >= 1901 && company.end <= 2000
);
console.log("companiesTwentiethCentury:", companiesTwentiethCentury);
