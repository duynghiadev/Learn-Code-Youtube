/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack === null || needle === null) {
    return -1;
  }
  for (var i = 0; i < haystack.length - needle.length + 1; i++) {
    var j;
    for (j = 0; j < needle.length; j++) {
      if (haystack.chatAt(i + j) !== needle.charAt(j)) {
        break;
      }
    }
    if (j === needle.length) {
      return i;
    }
  }
  return -1;
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
