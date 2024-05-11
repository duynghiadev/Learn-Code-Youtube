function binarySearch(arr, target) {
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if (target === arr[middleIndex]) {
      return middleIndex
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
  }

  return -1
}

console.log('[-4,5,6,8,12], 12:', binarySearch([-4, 5, 6, 8, 12], 12))
console.log('[-4,5,6,8,12], 8:', binarySearch([-4, 5, 6, 8, 12], 8))
console.log('[-4,5,6,8,12], 7:', binarySearch([-4, 5, 6, 8, 12], 7))

// Bài toán của mình có 1 vòng lặp, mỗi lần chạy thì kích thước của mảng nó sẽ giảm đi 1 nữa (do có chia 2)
// BigO = O(logn)
