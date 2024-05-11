/**
 * Đây là thuật toán đã sử dụng cách tối ưu hơn bằng cách sử dụng Math.sqrt()
 * - Có nghĩa là khi mình đưa vào 100 số thì thuật toán nó sẽ dùng căn bậc 2 của 100 -> còn lại 10 số
 * - Khi mình nhập vào 1000 số thì nó cũng sẽ dùng căn bậc 2 của 1000 -> còn lại 100 số
 */
function isPrime(n) {
  if (n < 2) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
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
 * BigO = O(sqrt(n))
 *
 * -> Đây là giải thuật xem 1 số tự nhiên có phải là số nguyên tố hay không
 */
