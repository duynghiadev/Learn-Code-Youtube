/**
 * Đoạn code này trong file markdown
 */
const array = [5, 2, 9, 8, 1, 6, 4, 7, 3]

for (let j = 0; j < array.length; j++) {
  for (let k = 0; k < array.length - j - 1; k++) {
    if (array[k] > array[k + 1]) {
      // Swap giá trị nếu cần
      const temp = array[k]
      array[k] = array[k + 1]
      array[k + 1] = temp
    }
  }
}

console.log('Mảng đã sắp xếp:', array)

console.log('------------------------------------')
console.log('Đây là phần bonus để tìm hiểu thêm mảng 2 chiều và mảng 1 chiều')

const matrix1 = [
  [5, 2, 9],
  [8, 1, 6],
  [4, 7, 3]
]
const array1D = [5, 2, 9, 8, 1, 6, 4, 7, 3]

const matrix1_compare = JSON.stringify(matrix1)
const array1D_compare = JSON.stringify(array1D)

console.log('matrix1_compare:', matrix1_compare)
console.log('array1D_compare:', array1D_compare)

console.log(JSON.stringify(matrix1) === JSON.stringify(array1D)) // false
