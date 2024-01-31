/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (prefix.length > strs[i].length) {
      prefix = prefix.substring(0, strs[i].length);
    }
    for (let j = 0; j < prefix.length; j++) {
      if (prefix.charAt(j) != strs[i].charAt(j)) {
        prefix = prefix.substring(0, j);
      }
    }
  }
  return prefix;
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
