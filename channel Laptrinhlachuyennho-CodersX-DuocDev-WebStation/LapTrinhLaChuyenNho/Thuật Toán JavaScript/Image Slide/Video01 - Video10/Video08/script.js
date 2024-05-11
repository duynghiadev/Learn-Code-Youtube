function isPrime(n) {
  if (n < 2) {
    return false
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
    return true
  }
}

console.log('isPrime(1):', isPrime(1))
console.log('isPrime(5):', isPrime(5))
console.log('isPrime(4):', isPrime(4))

/**
 * Độ phức tạp về thời gian của thuật toán này là:
 * - Thuật toán mình sử dụng vòng lặp, nên độ phức tạp thuật toán là hàm tuyến tính O(n)
 * => BigO notation: O(n)
 */
