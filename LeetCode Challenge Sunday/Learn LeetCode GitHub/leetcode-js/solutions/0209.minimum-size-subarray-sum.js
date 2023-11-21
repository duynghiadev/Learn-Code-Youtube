/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (nums.length === 0) {
    return 0;
  }

  let s = 0;
  let ok = false;
  let length = nums.length;
  let i = 0,
    j = 0;

  while (j < nums.length) {
    s += nums[j];

    if (s >= target) {
      ok = true;
      length = Math.min(j - i + 1, length);

      s -= nums[i];
      i++;
      while (s >= target) {
        length = Math.min(j - i + 1, length);
        s -= nums[i];
        i++;
      }
    }

    j++;
  }

  return ok ? length : 0;
};
