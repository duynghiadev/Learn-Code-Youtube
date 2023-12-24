/**
 * Lưu ý: trong ví dụ này chúng ta có sử dụng thuật toán Bubble Sort ✌✌✌✌
 */

/**
 * - Dưới đây là một ví dụ phức tạp hơn, trong đó chúng ta sẽ sử dụng vòng lặp for lồng nhau để thực hiện một số phương pháp sắp xếp đơn giản, và sau đó sử dụng break và continue để kiểm soát luồng của vòng lặp:
 *
 * - Trong ví dụ này, chúng ta sử dụng bubble sort để sắp xếp mỗi hàng của ma trận. Vòng lặp bên ngoài (i) duyệt qua từng hàng, và vòng lặp bên trong (j và k) thực hiện sắp xếp.
 *
 * - Quan trọng nhất là, chúng ta sử dụng break để thoát khỏi vòng lặp khi điều kiện nhất định được đáp ứng (ví dụ: nếu hàng đã được sắp xếp và không cần thêm sắp xếp), và continue để bỏ qua các bước thực hiện khi điều kiện nhất định được đáp ứng (ví dụ: nếu phần tử đã ở đúng vị trí).
 */
const matrix = [
  [5, 2, 9],
  [8, 1, 6],
  [4, 7, 3]
]

// Sắp xếp các hàng của ma trận theo thứ tự tăng dần
for (let i = 0; i < matrix.length; i++) {
  console.log(`Array before sorting: ${matrix[i]}`)

  // Sử dụng bubble sort cho mỗi hàng
  for (let j = 0; j < matrix[i].length; j++) {
    for (let k = 0; k < matrix[i].length - j - 1; k++) {
      console.log('j:', j)
      console.log('k:', k)
      console.log('matrix[0]:', matrix[0])
      console.log('matrix[1]:', matrix[1])
      console.log('matrix[2]:', matrix[2])
      console.log(`i: ${i}, matrix[${i}]: ${matrix[i]}`)
      console.log('matrix[i].length:', matrix[i].length)
      console.log('matrix[i].length - j:', matrix[i].length - j)
      console.log('matrix[i].length - j - 1:', matrix[i].length - j - 1)
      console.log('-----------------------------------------')

      console.log(`matrix[i][k] is matrix[${i}][${k}]: ${matrix[i][k]}`)
      console.log(`matrix[i][k + 1] is matrix[${i}][${k + 1}]: ${matrix[i][k + 1]}`)
      console.log('matrix[i][k] > matrix[i][k + 1]:', matrix[i][k] > matrix[i][k + 1])
      console.log('-----------------------------------------')

      console.log(`matrix[i][j] is matrix[${i}][${j}]: ${matrix[i][j]}`)
      console.log(`matrix[i][j + 1] is matrix[${i}][${j + 1}]: ${matrix[i][j + 1]}`)
      console.log('matrix[i][j] > matrix[i][j + 1]:', matrix[i][j] > matrix[i][j + 1])
      console.log('-----------------------------------------')

      if (matrix[i][k] > matrix[i][k + 1]) {
        // Swap giá trị nếu cần
        console.log(`matrix[i][j]: matrix[${i}][${j}] = ${matrix[i][j]}`)
        console.log(
          `Before swap: matrix[${i}][${k}] = ${matrix[i][k]}, matrix[${i}][${k + 1}] = ${
            matrix[i][k + 1]
          }`
        )
        const temp = matrix[i][k]
        matrix[i][k] = matrix[i][k + 1]
        matrix[i][k + 1] = temp
        console.log(
          `After swap: matrix[${i}][${k}] = ${matrix[i][k]}, matrix[${i}][${k + 1}] = ${
            matrix[i][k + 1]
          }`
        )
        console.log(`Array after sorting i: ${i}, matrix[${i}]: ${matrix[i]}`)
        console.log('-----------------------------------------')
      }
    }
  }

  console.log(`After sorting: ${matrix[i]}`)
  console.log('matrix:', matrix)
  console.log('-----------------------------------------')
}

// Kết quả cuối cùng của ma trận sau sắp xếp
console.log('Final matrix:', matrix)
