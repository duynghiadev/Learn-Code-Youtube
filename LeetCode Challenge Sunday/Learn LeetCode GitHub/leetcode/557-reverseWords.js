/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let reversed = s.split(" ").map(function (word) {
    word = word.split("").reverse().join("");
    return word;
  });
  return reversed.join(" ");
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
