// page 34
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  for (const account of accounts) {
    const sum = account.reduce((a, b) => a + b, 0);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};
console.time(`Testing2`);
console.timeEnd(`Testing2`);