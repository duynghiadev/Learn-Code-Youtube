function factorial(n) {
  let result = 1

  for (let i = 2; i <= n; i++) {
    result = result * i
  }
  return result
}

console.log('factorial(0):', factorial(0))
console.log('factorial(1):', factorial(1))
console.log('factorial(4):', factorial(4))
console.log('factorial(5):', factorial(5))

// Độ phức tạp về thời gian của thuật toán là:
// Do chúng ta sử dụng 1 vòng lặp nên độ phức tạp thời gian là tuyến tính. Tức là với n tăng lên thì độ phức tạp về thời gian cũng tăng lên luôn, nó tỉ lệ thuận với n
// => BigO = O(n)
