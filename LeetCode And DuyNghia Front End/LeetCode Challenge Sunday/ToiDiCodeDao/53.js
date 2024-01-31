// 53. Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const newSum = Math.max(num, sum + num);

    sum = Math.max(num, sum + num);
    max = Math.max(sum, max);

    console.log({ num, newSum, sum, max });
  }
  return max;
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
