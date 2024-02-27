// 242. Valid Anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // O(nlogn)

  const a = s.split("");
  a.sort();

  const b = t.split("");
  b.sort();

  console.log({ a, b });

  return a.join("") === b.join("");
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
