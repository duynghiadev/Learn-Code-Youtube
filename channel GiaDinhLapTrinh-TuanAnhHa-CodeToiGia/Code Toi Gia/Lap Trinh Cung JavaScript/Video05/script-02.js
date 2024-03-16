const a = [1, 2, 3, 4]
const b = [1, 2, 3, 4]

// Check if every element in 'a' matches every element in 'b'
const checkArray = a.every((value, index) => {
  console.log('value:', value, '👉 index:', index, '👉 b[index]:', b[index])
  console.log('🎯 value === b[index]:', value === b[index])

  return value === b[index]
})
const isCheck = a.length === b.length && checkArray

console.log('------------------------------')
console.log('isCheck:', isCheck)
