/**
 * Đây là ví dụ trong file markdown
 */
// Tạo một mảng số nguyên
var numbers = [1, 5, 10, 20, 3]

// Sử dụng apply và Math.max để tìm giá trị lớn nhất trong mảng
var maxNumber = Math.max.apply(null, numbers)

console.log('Giá trị lớn nhất trong mảng là: ' + maxNumber)
