// page 29
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = 0;
  for (const candy of candies) {
    if (candy > max) {
      max = candy;
    }
  }
  return candies.map((candy) => candy + extraCandies >= max);
};
console.time(`Testing2`);
console.timeEnd(`Testing2`);