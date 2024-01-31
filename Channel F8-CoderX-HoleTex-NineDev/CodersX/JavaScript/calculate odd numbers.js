/**
 * Link bài viết:
 * https://bom.so/2j0aZY
 */

// Step 1
function splitString(str) {
  return str.split("");
}

// Step 2
function filterOdds(arr) {
  return arr.filter(function (x) {
    return ["1", "3", "5", "7", "9"].indexOf(x) >= 0;
  });
}

// Step 3
function toNumber(arr) {
  return arr.map(function (x) {
    return Number(x);
  });
}

// Step 4
function sum(arr) {
  return arr.reduce(function (sum, num) {
    return sum + num;
  }, 0);
}

// lắp ráp (function có thể gọi function khác bên trong nó):
function sumOddsInString(str) {
  var characters = splitString(str);
  var oddCharacters = filterOdds(characters);
  var oddNumbers = toNumber(oddCharacters);
  var result = sum(oddNumbers);
  return result;
}

// chạy thử:
console.log(sumOddsInString("A129485730FA"));
console.log(sumOddsInString("12345678"));
