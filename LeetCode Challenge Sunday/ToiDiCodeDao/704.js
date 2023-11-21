// 704. Binary Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // O(log n)
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const pivot = Math.floor((high + low) / 2);
    const num = nums[pivot];

    console.log({ low, high, num, pivot });

    if (num === target) {
      return pivot;
    } else if (num < target) {
      low = pivot + 1;
    } else {
      high = pivot - 1;
    }
  }
  return -1;
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
