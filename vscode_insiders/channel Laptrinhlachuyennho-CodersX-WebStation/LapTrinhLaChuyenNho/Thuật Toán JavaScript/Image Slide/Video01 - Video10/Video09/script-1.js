// Đây là file code sử dụng thuật toán Bitwise -> để tối ưu lại

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false
  }

  return (n & (n - 1)) === 0
}

console.log('isPowerOfTwoBitWise(1):', isPowerOfTwoBitWise(1))
console.log('isPowerOfTwoBitWise(2):', isPowerOfTwoBitWise(2))
console.log('isPowerOfTwoBitWise(3):', isPowerOfTwoBitWise(3))
console.log('isPowerOfTwoBitWise(4):', isPowerOfTwoBitWise(4))
console.log('isPowerOfTwoBitWise(5):', isPowerOfTwoBitWise(5))

/**
 * Độ phức tạm về thời gian của thuật toán này là hằng số:
 *
 * -> BigO: O(1)
 */
