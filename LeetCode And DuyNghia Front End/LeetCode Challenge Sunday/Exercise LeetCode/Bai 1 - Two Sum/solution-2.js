// Cách 2: 🚀
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i]
    if (map.has(remain)) {
      return [map.get(remain), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
}

rl.question('Enter numbers separated by spaces: ', (input) => {
  const nums = input.split(' ').map(Number)

  rl.question('Enter the target sum: ', (targetInput) => {
    const target = Number(targetInput)

    try {
      const result = twoSum(nums, target)
      if (result.length === 0) {
        console.log('No two sum solution')
      } else {
        console.log(`Indices of the two numbers that add up to ${target}: [${result}]`)
      }
    } catch (error) {
      console.error(error.message)
    } finally {
      rl.close()
    }
  })
})

// console.time(`Testing2`);
// console.timeEnd(`Testing2`);
