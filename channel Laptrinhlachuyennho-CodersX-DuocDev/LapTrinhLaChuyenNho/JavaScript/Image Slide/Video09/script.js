function isPowerOfTwo(n) {
  if (n < 1) {
    return false
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false
    }
    n = n / 2
  }
  return true
}

console.log('isPowerOfTwo(1):', isPowerOfTwo(1))
console.log('isPowerOfTwo(2):', isPowerOfTwo(2))
console.log('isPowerOfTwo(3):', isPowerOfTwo(3))
console.log('isPowerOfTwo(4):', isPowerOfTwo(4))
console.log('isPowerOfTwo(5):', isPowerOfTwo(5))

/**
 * Trong thuật toán của chúng ta viết thì mỗi số đầu vào thì nó sẽ giảm đi 1 nữa
 * => BigO là: O(log(n))
 */
