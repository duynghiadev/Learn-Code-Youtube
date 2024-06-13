/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// best practice
var twoSum = function (nums, target) {
  const visitedNums = {}

  for (let i = 0; i < nums.length; i++) {
    const indexOfNeededNum = visitedNums[target - nums[i]]
    if (indexOfNeededNum >= 0) {
      return [indexOfNeededNum, i]
    }
    visitedNums[nums[i]] = i
  }
}

console.time('time')
console.log(twoSum([1, 2, 3, 4], 6))
console.timeEnd('time')
