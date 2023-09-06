let count2: number = 1; // OK

// count2 = 'name' // error ❌
count2 = 99; // passed ✅ (using method assignment)

console.log(">>> check count2: ", count2);

let names1: string[];
names1 = ["DuyNghia", "DuyNghiaDev", "Learn TypeScript"];
// names1.push(21) // error ❌
names1.push("Ku Nhi"); // passed ✅

console.log(">>> check names1: ", names1);
