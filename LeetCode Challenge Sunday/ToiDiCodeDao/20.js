// 20. Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const stack = [];

  const match = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const ch of s) {
    console.log({ ch, stack });

    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      const top = stack.pop();
      if (match[ch] !== top) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
