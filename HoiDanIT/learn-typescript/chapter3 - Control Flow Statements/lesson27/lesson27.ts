function sum_1(a: any, b: any) {
  return a + b;
}
// console.log("> check sum_1: ", sum_1(5, 8));

function sum(a: number, b: number) {
  return a + b;
}
console.log(">> check sum: ", sum(9, 8));

//anonymous function () => {}
const sum2 = (a1: number, b1: number) => {
  return a1 + b1;
};
console.log(">>> check sum2: ", sum2(6, 9));
