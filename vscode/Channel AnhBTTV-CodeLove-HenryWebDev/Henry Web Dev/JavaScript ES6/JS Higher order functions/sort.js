const companies = [
  { name: "Sabeco", category: "Food", start: 1999, end: 2007 },
  { name: "Viettel", category: "Telecommunication", start: 1992, end: 2008 },
  { name: "Vinamilk", category: "Food", start: 1981, end: 2003 },
  { name: "FPT", category: "Technology", start: 1988, end: 2015 },
  { name: "Mobifone", category: "Telecommunication", start: 1993, end: 2020 },
];

const ages = [45, 62, 14, 16, 46, 26, 65, 33, 34, 13, 21, 17, 6, 55, 22];

// Print original array
console.log("📋 Original companies array:");
companies.forEach((company, index) => {
  console.log(
    `   ${index + 1}. ${company.name} (Start: ${company.start}, End: ${
      company.end
    })`
  );
});

// Sort
const companiesSorted = companies.sort(function (comA, comB) {
  console.log("\n");
  console.log("🔍 Comparing companies:");
  console.log("   📌 comA:", comA);
  console.log("   📌 comB:", comB);

  let result;
  if (comA.start > comB.start) {
    result = `   ↪️ ${comA.name} (Start: ${comA.start}) started later than ${comB.name} (Start: ${comB.start}), so it should come after.`;
    console.log(result);
    console.log("=".repeat(50));
    console.log("🔄 Array state:");
    console.log(`[${comB.name}, ${comA.name}]`);
    console.log("=".repeat(50));
    return 1;
  } else {
    result = `   ↩️ ${comA.name} (Start: ${comA.start}) started earlier than or at the same time as ${comB.name} (Start: ${comB.start}), so it should come before.`;
    console.log(result);
    console.log("=".repeat(50));
    console.log("🔄 Array state:");
    console.log(`[${comA.name}, ${comB.name}]`);
    console.log("=".repeat(50));
    return -1;
  }
});

// Print final sorted array
console.log("🏁 Sorted companies by start year:");
companiesSorted.forEach((company, index) => {
  console.log(
    `   ${index + 1}. ${company.name} (Start: ${company.start}, End: ${
      company.end
    })`
  );
});
