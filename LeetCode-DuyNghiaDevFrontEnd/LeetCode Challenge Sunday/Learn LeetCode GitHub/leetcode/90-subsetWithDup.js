/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const results = [];
  const helper = function (nums, index, subSet) {
    results.push(subSet.concat());

    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) continue;
      subSet.push(nums[i]);
      helper(nums, i + 1, subSet);
      subSet.pop();
    }
  };

  helper(nums, 0, []);

  return results;
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
