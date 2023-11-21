function Threesum(nums) {
  const results = [];
  if (!nums || nums.length < 3) return results;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue; // avoid looking for the same target value in sorted nums array

    twoSum(nums, i + 1, nums.length - 1, -nums[i], results);
  }

  return results;
}
function twoSum(nums, left, right, target, results) {
  while (left < right) {
    if (nums[left] + nums[right] === target) {
      results.push([-target, nums[left], nums[right]]);
      left++;
      right--;
      while (left < right && nums[left] === nums[left - 1]) left++; // avoid duplicate - left pointer
      while (left < right && nums[right] === nums[right + 1]) right--; // avoid duplicate - right pointer
    } else if (nums[left] + nums[right] > target) {
      right--;
    } else {
      left++;
    }
  }
}

console.time(`Testing:`);
console.timeEnd(`Testing:`);
