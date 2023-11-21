// 1: Two sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hashMap[target - num] !== undefined) {
      return [i, hashMap[target - num]];
    }
    hashMap[num] = i;
  }
};
console.time(`Testing:`);
console.timeEnd(`Testing:`);
