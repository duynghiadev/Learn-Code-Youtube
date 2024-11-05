// reduce cách 1:
// + Dạng 1: Không truyền initialValue
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = numbers.reduce((total, number) => {
//   return total + number;
// });

// Dạng 2: Có truyền initialValue
// console.log(result);
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = numbers.reduce((total, number) => {
//   return total + number;
// }, 10); // initialValue = 10

// console.log(result);

// reduce cách 2:
// Dạng 1: Không truyền initialValue
// Array.prototype.reduce2 = function (callback, result) {
//   let i = 0;
//   if (arguments.length < 2) {
//     i = 1;
//     result = this[0];
//   }
//   for (; i < this.length; i++) {
//     result = callback(result, this[i], i, this);
//   }
//   return result;
// };

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = numbers.reduce2((total, number) => {
//   return total + number;
// });  

// console.log(result);  // result = 55 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

// Dạng 2: Có truyền initialValue
Array.prototype.reduce2 = function (callback, result) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.reduce2((total, number) => {
  return total + number;
}, 10); // initialValue = 10; result = 65 = 10 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

console.log(result);
