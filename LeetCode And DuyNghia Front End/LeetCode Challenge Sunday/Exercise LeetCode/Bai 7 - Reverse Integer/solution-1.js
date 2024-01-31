/**
 * @param {number} x
 * @return {number}
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var reverse = function (x) {
  // Make the number positive and turn it into a string
  let s = Math.abs(x).toString();
  let arr = [];

  // Push each "number" from last to first into an array
  for (let i = s.length - 1; i >= 0; i--) {
    arr.push(s[i]);
  }

  // Turn the reversed string into a number
  let result = Number(arr.join(""));

  // If the number exceeds the range, return 0
  if (result > 2 ** 31 - 1) {
    return 0;
  }
  // If the original input number was negative, turn the final number negative
  if (x < 0) {
    result *= -1;
  }
  return result;
};

rl.question("Enter an integer: ", (input) => {
  const x = parseInt(input);

  const reversed = reverse(x);
  console.log(`Reversed integer: ${reversed}`);

  rl.close();
});

// console.time(`Testing`);
// console.timeEnd(`Testing`);
