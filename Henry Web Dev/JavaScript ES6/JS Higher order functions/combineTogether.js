const companies = [
  { name: "Vinamilk", category: "Food", start: 1981, end: 2003 },
  { name: "Viettel", category: "Telecommunication", start: 1992, end: 2008 },
  { name: "Sabeco", category: "Food", start: 1999, end: 2007 },
];

const ages = [45, 62, 14, 16, 46, 26, 65, 33, 34, 13, 21, 17, 6, 55, 22];

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age > 50)
  .sort((ageA, ageB) => ageA - ageB)
  .reduce((total, age) => total + age, 0);
console.log("combined together:", combined);
