// page 37
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const set = new Set();
  for (const ch of sentence.toLowerCase()) {
    set.add(ch);
  }
  return set.size === 26;
};
console.time(`Testing2`);
console.timeEnd(`Testing2`);