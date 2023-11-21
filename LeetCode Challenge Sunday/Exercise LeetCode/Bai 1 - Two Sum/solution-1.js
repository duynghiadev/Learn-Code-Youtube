/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Cách 1: 🚀
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var twoSum = function (nums, target) {
  const visitedNums = {}
  for (let i = 0; i < nums.length; i++) {
    const indexOfNeededNum = visitedNums[target - nums[i]]
    if (indexOfNeededNum !== undefined) {
      return [indexOfNeededNum, i]
    }
    visitedNums[nums[i]] = i
  }
  throw new Error('No two sum solution')
}

rl.question('Enter numbers separated by spaces: ', (input) => {
  const nums = input.split(' ').map(Number)

  rl.question('Enter the target sum: ', (targetInput) => {
    const target = Number(targetInput)

    try {
      const result = twoSum(nums, target)
      console.log(`Indices of the two numbers that add up to ${target}: [${result}]`)
    } catch (error) {
      console.error(error.message)
    } finally {
      rl.close()
    }
  })
})

// console.time(`Testing2`);
// console.timeEnd(`Testing2`);
