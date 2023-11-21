// 121. Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // O(N^2)

  let maxProfit = 0;
  let minPrice = prices[0];

  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    const profit = price - minPrice;
    maxProfit = Math.max(maxProfit, profit);
    console.log({ minPrice, profit, maxProfit });
  }

  return maxProfit;
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
