/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const out = [-1, -1];

  out[0] = getFirst(nums, target);
  out[1] = getLast(nums, target);

  return out;
};

var getFirst = function (nums, target) {
  var lo = 0,
    hi = nums.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (target === nums[mid] && (mid === 0 || nums[mid - 1] < target)) {
      return mid;
    } else if (target > nums[mid]) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;
};

var getLast = function (nums, target) {
  var lo = 0,
    hi = nums.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (
      target === nums[mid] &&
      (mid === nums.length - 1 || nums[mid + 1] > target)
    ) {
      return mid;
    } else if (target < nums[mid]) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return -1;
};
