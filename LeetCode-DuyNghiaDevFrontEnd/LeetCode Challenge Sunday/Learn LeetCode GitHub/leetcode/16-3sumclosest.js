/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  if (nums === null || nums.length < 3) {
    return -1;
  }
  nums.sort((a, b) => a - b);
  let bestSum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length; i++) {
    let start = i + 1,
      end = nums.length - 1;
    while (start < end) {
      sum = nums[i] + nums[start] + nums[end];
      if (Math.abs(target - sum) < Math.abs(target - bestSum)) {
        bestSum = sum;
      }
      if (target - sum < 0) {
        end--;
      } else {
        start++;
      }
    }
  }
  return bestSum;
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
