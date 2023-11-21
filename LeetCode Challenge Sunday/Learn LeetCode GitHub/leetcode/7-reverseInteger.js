/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x < 0) {
    return -reverse(-x);
  } else {
    let result = (x + "").split("").reverse().join("");
    if (number > 2147483647) {
      return 0;
    } else {
      return Number(result);
    }
  }
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
