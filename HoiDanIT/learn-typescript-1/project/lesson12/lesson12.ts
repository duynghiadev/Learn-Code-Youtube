let test: (string | number | boolean)[] = ["hoidanit", "duynghia", 98, true];
let test1 = ["hoidanit", "duynghia", 98];

test.push(25);
test.push(false);
test1.push(25);

test.push("Kunhi");
test1.push("Kunhi");

console.log(">>> check typeof test.push: ", typeof test.push);
console.log("\n>>> check  test.push: ", test.push);

console.log("\n>>> check typeof test: ", typeof test);
console.log("\n>>> check test: ", test);

console.log("\n>>> check typeof test1: ", typeof test1);
console.log("\n>>> check test1: ", test1);
