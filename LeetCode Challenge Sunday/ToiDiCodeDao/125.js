// 125. Valid Palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const cleaned = s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  for (let i = 0; i < cleaned.length - 1; i++) {
    if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
      return false;
    }
  }

  console.log(cleaned);
  return true;
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
