// perfect
const sum = (x, y) => {
  return x + y;
};

console.log(">>> check sum: ", sum(5, 10)); // 15
console.log(">>> check typeof sum: ", typeof sum(5, 10)); // 15

// need to validate
const sum2 = (x, y) => {
  // validate: x,y are number ?
  return x + y;
};

console.log(">>> check sum2: ", sum2("name", 10)); // name10
console.log(">>> check typeof sum2: ", typeof sum2("name", 10));
