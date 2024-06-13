/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const visitedNums = new Map()

  for (let i = 0; i < nums.length; i++) {
    const neededNum = target - nums[i]
    const indexOfNeededNum = visitedNums.get(neededNum)
    if (indexOfNeededNum >= 0) {
      return [indexOfNeededNum, i]
    }
    visitedNums.set(nums[i], i)
  }
}

console.time('time')
console.log(twoSum([1, 2, 3, 4], 6))
console.timeEnd('time')
