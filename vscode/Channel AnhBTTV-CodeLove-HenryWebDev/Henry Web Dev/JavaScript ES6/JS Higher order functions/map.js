const companies = [
  { name: "Vinamilk", category: "Food", start: 1981, end: 2003 },
  { name: "Viettel", category: "Telecommunication", start: 1992, end: 2008 },
  { name: "Sabeco", category: "Food", start: 1999, end: 2007 },
];

const ages = [45, 62, 14, 16, 46, 26, 65, 33, 34, 13, 21, 17, 6, 55, 22];

// map
const companyNames = companies.map(function (company) {
  return company.name;
});
console.log("ES5:", companyNames);

console.log("=".repeat(50));

const companyNames_1 = companies.map((company) => company.name);
console.log("ES6:", companyNames_1);

console.log("=".repeat(50));

const companyInfo = companies.map(
  (company) => `${company.name} - ${company.start} - ${company.end}`
);
console.log("ES6 companyInfo:", companyInfo);

console.log("=".repeat(50));

const agesSquare = ages.map((age) => Math.sqrt(age));
console.log("agesSquare:", agesSquare);

console.log("=".repeat(50));

const newAges = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
console.log("newAges:", newAges);
