const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, curr) => {
  console.log('acc:', acc, 'curr:', curr)
  console.log('----')
  let result = acc + curr
  console.log('result:', result)
  return result
}, 0)
console.log('sum:', sum)
