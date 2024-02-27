/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var result = [];
  if (nums == null || nums.length < 3) {
    return result;
  }
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1,
      right = nums.length - 1,
      target = -nums[i];
    twoSum(left, right, target, nums, result);
  }
  return result;
};
var twoSum = function (left, right, target, nums, result) {
  while (left < right) {
    if (nums[left] + nums[right] === target) {
      var anwser = [-target, nums[left], nums[right]];
      result.push(answer);
      left++;
      right--;

      while (left < right && nums[left] === nums[left - 1]) {
        left++;
      }
      while (left < right && nums[right] === nums[right + 1]) {
        right--;
      }
    } else if (nums[left] + nums[right] < target) {
      left++;
    } else {
      right--;
    }
  }
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
