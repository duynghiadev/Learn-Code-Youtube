/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const map = {
    0: 0,
  };
  let s = 0;

  for (let i = 0; i < nums.length; i++) {
    s += nums[i];
    const r = s % k;

    if (map[r] === undefined) {
      map[r] = i + 1;
    } else if (map[r] < i) {
      return true;
    }
  }

  return false;
};
