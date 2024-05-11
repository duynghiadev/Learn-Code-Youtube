function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}

console.log('[-4,6,12,5,8],12:', linearSearch([-4, 6, 12, 5, 8], 12))
console.log('[-4,6,12,5,8],5:', linearSearch([-4, 6, 12, 5, 8], 5))
console.log('[-4,6,12,5,8],7:', linearSearch([-4, 6, 12, 5, 8], 7))

// Độ phức tạp thời gian tuyến tính
// => BigO = O(n).
