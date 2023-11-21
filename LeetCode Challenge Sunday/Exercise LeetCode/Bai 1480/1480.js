// page 30
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (i === 0) {
      result.push(num);
    } else {
      result.push(num + result[i - 1]);
    }
  }
  return result;
};
console.time(`Testing2`);
console.timeEnd(`Testing2`);