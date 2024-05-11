function fibonacci(n) {
  const fibo = [0, 1]
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]
  }
  return fibo
}

console.log('fibonacci(2):', fibonacci(2))
console.log('fibonacci(3):', fibonacci(3))
console.log('fibonacci(7):', fibonacci(7))

/**
 * Do chương trình của mình có 1 vòng lặp nên có độ phức tạp là tuyến tính:
 * => BigO = O(n)
 *
 * Có nghĩa là n nó tăng lên bao nhiêu thì cái độ phức tạp về thời gian nó tăng lên cùng tỷ lệ
 */
