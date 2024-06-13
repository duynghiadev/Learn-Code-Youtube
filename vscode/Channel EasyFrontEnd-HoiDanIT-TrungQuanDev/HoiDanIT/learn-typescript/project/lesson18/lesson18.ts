function addNumberOrString(
  a: number | string | object | boolean,
  b: number | string
) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "boolean" && typeof b === "string") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  throw new Error("Parameters must be numbers or strings");
}

// lỗi khi running
// lỗi khi compile
// Nếu lỗi thì sẽ bắn ra lỗi (new Error)
// console.log(">>> check: ", addNumberOrString(true, false));

console.log(">>> check number + number: ", addNumberOrString(6, 9));
console.log(">>> check boolean + string: ", addNumberOrString(true, " ku nhi"));
console.log(
  ">>> check string + string: ",
  addNumberOrString("duy nghia", " Hoi dan it")
);
