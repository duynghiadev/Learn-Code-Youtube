/**
 * Hàm arraysEqual sử dụng đệ quy để so sánh từng phần tử của mảng, giúp nhận biết sự khác biệt giữa mảng 2D và mảng 1D.
 */
function arraysEqual(arr1, arr2) {
  // Compare elements or nested arrays
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      arraysEqual(arr1[i], arr2[i])
    } else if (arr1[i] !== arr2[i]) {
      console.log(`Elements at index ${i} are different: ${arr1[i]} !== ${arr2[i]}`)
    }
  }

  // Check lengths
  if (arr1.length !== arr2.length) {
    console.log(`Lengths are different: ${arr1.length} !== ${arr2.length}`)
  } else {
    console.log('Arrays are equal')
  }
}

// Sử dụng hàm arraysEqual
const matrix1 = [
  [5, 2, 9],
  [8, 1, 6],
  [4, 7, 3]
]

const array1D = [5, 2, 9, 8, 1, 6, 4, 7, 3]

arraysEqual(matrix1, array1D)
