var twoSum = function (nums, target) {
  const visitedNums = {};
  for (let i = 0; i < nums.length; i++) {
    const indexOfNeededNum = visitedNums[target - nums[i]];
    if (indexOfNeededNum >= 0) {
      return [i, indexOfNeededNum];
    }
    visitedNums[nums[i]] = i;
  }
};
console.time(`Testing1`);
console.timeEnd(`Testing1`);
