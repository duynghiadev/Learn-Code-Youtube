/**
 * - Dưới đây là một ví dụ phức tạp hơn về cách break và continue có thể được sử dụng trong một chương trình JavaScript. Trong ví dụ này, chúng ta sẽ tạo một ma trận và sử dụng vòng lặp lồng nhau để thực hiện các thao tác với các điểm trong ma trận. Chúng ta sẽ sử dụng break để thoát khỏi vòng lặp khi một điều kiện nhất định được đáp ứng và continue để bỏ qua một số điểm cụ thể trong quá trình xử lý.
 *
 * - Trong ví dụ này, chúng ta duyệt qua mỗi hàng của ma trận và xử lý từng phần tử. Sử dụng continue, chúng ta bỏ qua các số chẵn. Sử dụng break, chúng ta thoát khỏi vòng lặp khi gặp một số lẻ lớn hơn 5. Điều này thể hiện cách break và continue có thể được sử dụng để kiểm soát quá trình xử lý trong các tình huống phức tạp.
 */

// Tạo một ma trận 3x3
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// Vòng lặp chính qua các hàng của ma trận
for (let i = 0; i < matrix.length; i++) {
  console.log('matrix.length:', matrix.length)
  console.log(`Processing Row ${i + 1}`)
  console.log('--------------------------------------')

  // Vòng lặp qua các cột của ma trận
  for (let j = 0; j < matrix[i].length; j++) {
    const currentElement = matrix[i][j]
    console.log('currentElement[i]:', matrix[i])
    console.log('currentElement[j]:', matrix[j])
    console.log(`Giá trị tại matrix[${i}][${j}] là: ${currentElement}`)
    console.log('Ta được: matrix[i][j]:', matrix[i][j])
    console.log('currentElement:', currentElement)
    console.log('--------------------------------------')

    // Sử dụng continue để bỏ qua các số chẵn
    if (currentElement % 2 === 0) {
      console.log(`  Skipping even number: ${currentElement}`)
      continue
    }

    console.log(`  Processing element: ${currentElement}`)

    // Sử dụng break để thoát khỏi vòng lặp nếu gặp số lẻ lớn hơn 5
    if (currentElement > 5) {
      console.log(`  Found element greater than 5. Stopping processing.`)
      break
    }
  }
}

// Kết quả:
// Processing Row 1
//   Processing element: 1
//   Processing element: 3
//   Skipping even number: 2
// Processing Row 2
//   Processing element: 4
//   Skipping even number: 6
//   Found element greater than 5. Stopping processing.
