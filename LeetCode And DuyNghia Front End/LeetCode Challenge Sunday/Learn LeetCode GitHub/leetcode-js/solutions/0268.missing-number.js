/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let s = 0;
  let n = nums.length;

  for (let x of nums) {
    s += x;
  }

  return (n * (n + 1)) / 2 - s;
};
