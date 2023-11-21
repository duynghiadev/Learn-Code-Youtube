/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });

  const avgs = new Set([]);
  let i = 0,
    j = nums.length - 1;

  while (i < j) {
    avgs.add((nums[i] + nums[j]) / 2);

    i++;
    j--;
  }

  return avgs.size;
};
