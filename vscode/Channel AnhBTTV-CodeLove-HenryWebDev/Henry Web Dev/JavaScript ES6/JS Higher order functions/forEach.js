const companies = [
  { name: "Vinamilk", category: "Food", start: 1981, end: 2003 },
  { name: "Viettel", category: "Telecommunication", start: 1992, end: 2008 },
  { name: "Sabeco", category: "Food", start: 1999, end: 2007 },
];

const ages = [45, 62, 14, 16, 46, 26, 65, 33, 34, 13, 21, 17, 6, 55, 22];

// forEach
for (let i = 0; i < companies.length; i++) {
  console.log("🚀 for each type old:", companies[i]);
}

console.log("=".repeat(70));

companies.forEach(function (company, index, companies) {
  console.log("🚀 for each type new:");
  console.log("company one:", company);
  console.log("index:", index);
});

companies.forEach((company) => {
  console.log("company two:", company);
});

console.log("=".repeat(70));
