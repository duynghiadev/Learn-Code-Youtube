function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if (target === arr[middleIndex]) {
    return middleIndex
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1)
  } else {
    return search(arr, target, middleIndex + 1, rightIndex)
  }
}

console.log('[-4, 5, 6, 8, 12], 12:', recursiveBinarySearch([-4, 5, 6, 8, 12], 12))
console.log('[-4, 5, 6, 8, 12], 8:', recursiveBinarySearch([-4, 5, 6, 8, 12], 8))
console.log('[-4, 5, 6, 8, 12], 7:', recursiveBinarySearch([-4, 5, 6, 8, 12], 7))

// => Bài toán của mình có 1 vòng lặp, mỗi lần chạy thì kích thước của mảng nó sẽ giảm đi 1 nữa (do có chia 2)

// => Vậy thuật toán của bài mình là: `BigO = O(logn)`
