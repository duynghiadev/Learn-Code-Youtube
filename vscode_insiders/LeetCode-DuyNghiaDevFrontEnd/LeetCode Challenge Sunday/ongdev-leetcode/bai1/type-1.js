/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const visitedNums = {}

  for (let i = 0; i < nums.length; i++) {
    const indexOfNeededNum = visitedNums[target - nums[i]]
    if (indexOfNeededNum >= 0) {
      return [i, indexOfNeededNum]
    }
    visitedNums[nums[i]] = i
  }
}

console.time(`Testing1`)
console.log(twoSum([2, 7, 11, 15], 9)) // Example test case
console.timeEnd(`Testing1`)

// Additional test cases
console.time(`Testing2`)
console.log(twoSum([3, 2, 4], 6))
console.timeEnd(`Testing2`)

console.time(`Testing3`)
console.log(twoSum([3, 3], 6))
console.timeEnd(`Testing3`)
