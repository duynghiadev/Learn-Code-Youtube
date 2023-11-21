/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = [];

  let i = 0;
  while (i < s.length) {
    if (
      stack.length &&
      Math.abs(s[i].charCodeAt(0) - stack[stack.length - 1].charCodeAt(0)) ===
        32
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }

    i++;
  }

  return stack.join("");
};
