/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let result = nums[0];

  let min_so_far = nums[0];
  let max_so_far = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    temp_max = Math.max(current, current * max_so_far, current * min_so_far);
    min_so_far = Math.min(current, current * max_so_far, current * min_so_far);

    max_so_far = temp_max;

    result = Math.max(result, max_so_far);
  }

  return result;
};
