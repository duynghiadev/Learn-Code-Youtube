// Cách 3: 🚀
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function twoSum(nums, target) {
  const numIndices = {}

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (numIndices[complement] !== undefined) {
      return [numIndices[complement], i]
    }

    numIndices[nums[i]] = i
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
