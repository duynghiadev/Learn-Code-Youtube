const arr = ['', 'duy', '', '', 'nghia', '']
// loại bỏ '' rỗng sau index = 2
// output: const b = ['', 'duy', 'nghia']

const b = arr.filter((item, index) => {
  console.log('index < 2:', index < 2, 'item:', item)
  return index < 2 || item
})
console.log('result:', b)
