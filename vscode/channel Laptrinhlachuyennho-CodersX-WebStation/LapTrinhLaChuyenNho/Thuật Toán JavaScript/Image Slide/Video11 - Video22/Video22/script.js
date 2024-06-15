function mergeSort(arr) {
  // Output a message indicating that mergeSort is called with the input array
  console.log('↳ mergeSort called with:', arr)

  // Base case: If the array has 0 or 1 elements, it's already sorted
  if (arr.length < 2) {
    console.log('✓ Base case reached. Return:', arr)
    return arr
  }

  // Find the middle index of the array
  const mid = Math.floor(arr.length / 2)

  // Divide the array into two halves: left and right
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)

  // Recursively sort the left and right halves
  console.log('➔ Sorting left part:', leftArr)
  const leftSorted = mergeSort(leftArr)
  console.log('➔ Sorting right part:', rightArr)
  const rightSorted = mergeSort(rightArr)

  // Merge the sorted left and right halves
  console.log('➔ Merging:', leftSorted, 'and', rightSorted)
  return merge(leftSorted, rightSorted)
}

function merge(leftArr, rightArr) {
  // Output a message indicating that merge is called with the two input arrays
  console.log('  ➔ merge called with:', leftArr, 'and', rightArr)

  const sortedArr = []

  // While both left and right arrays have elements
  while (leftArr.length && rightArr.length) {
    // Compare the first elements of both arrays
    if (leftArr[0] < rightArr[0]) {
      // If the first element of the left array is smaller, move it to the sorted array
      sortedArr.push(leftArr.shift())
    } else {
      // Otherwise, move the first element of the right array to the sorted array
      sortedArr.push(rightArr.shift())
    }
  }

  // Concatenate any remaining elements in leftArr or rightArr
  console.log('    ✓ Merged arrays:', [...sortedArr, ...leftArr, ...rightArr])
  return [...sortedArr, ...leftArr, ...rightArr]
}

// Input array
const arr = [-5, 22, 6, -3, 4]

// Call mergeSort with the input array
console.log('🚀 Initial array:', arr)
console.log('✅ Final array:', mergeSort(arr)) // Output the sorted array

/**
 * - Vòng lặp thứ 1: Trong bài toán của mình có dùng phép toán chia 1 nửa, khi nó chạy thì array sẽ giảm 1 nửa. Nên độ phức tạm là `O(logn)`
 *
 * - Vòng lặp thứ 2: Trong đó nó lặp bình thường, khi hết vòng lặp này thì đến vòng lặp khác. Cho nên nó là tuyến tính. Nên độ phức tạp là `O(n)`
 *
 * => Kết hợp 2 vòng lặp lại mình có được độ phức tạp: `O(nlogn)
 *
 * Vậy BigO = O(nlogn)
 */
