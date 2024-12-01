// ES5
// function congHaiSo(x, y) {
//   if (y === undefined) {
//     y = 2;
//   }
//   return x + y;
// }
// console.log("congHaiSo has y:", congHaiSo(4, 5));
// console.log("congHaiSo doesn't y:", congHaiSo(4));

// ===========================================

// ES6
// const congHaiSo = (x, y = 2) => x + y;

// console.log("congHaiSo has y:", congHaiSo(4, 5));
// console.log("congHaiSo doesn't y:", congHaiSo(4));

// ===========================================
// bai tap
const nhanHaiSo = (x, y = 5) => x * y;
console.log("nhanHaiSo:", nhanHaiSo(2, 5));
console.log("nhanHaiSo:", nhanHaiSo(6));
