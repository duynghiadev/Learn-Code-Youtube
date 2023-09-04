const sum3 = (x: number, y: number) => {
  return x + y;
};

// pass ✅
console.log(">>> check sum3: ", sum3(5, 10));
console.log(">>> check typeof sum3: ", typeof sum3(5, 10));

// error ❌
// console.log(">>> check sum3: ", sum3('name', 10));
// console.log(">>> check typeof sum3: ", typeof sum3('name', 10));
