// callback function

const nums = [2, 4, 6, 8]
const callback = (item, index) => {
  console.log(`Numerical: ${index} is ${item}`)
}
nums.forEach(callback)
