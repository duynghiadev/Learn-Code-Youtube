/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let y = Math.abs(x);
  return x == y.toString().split("").reverse().join("");
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
