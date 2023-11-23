// Nếu chúng ta không sử dụng hàm (function) mà sử dụng các câu điều kiện thì nó code trông sẽ rất dài và đọc cũng rất mệt

var number_1 = 10
var number_2 = 87
var number_3 = 88

// Kiểm tra các biến trên là số chẳn hay số lẻ, in ra màn hình thông báo
if (number_1 % 2 === 0) {
  alert(`${number_1} là số chẳn`)
} else {
  alert(`${number_1} là số lẻ`)
}
if (number_2 % 2 === 0) {
  alert(`${number_2} là số chẳn`)
} else {
  alert(`${number_2} là số lẻ`)
}
if (number_3 % 2 === 0) {
  alert(`${number_3} là số chẳn`)
} else {
  alert(`${number_3} là số lẻ`)
}

// Thay vì viết các điều kiện dài ở trên thì chúng ta nên viết 1 function cho ngắn gọn và dễ maintain
function XacDinhSoLe(x) {
  if (x % 2 === 0) {
    console.log(`${x} là số chẳn`)
  } else {
    console.log(`${x} là số lẻ`)
  }
}

XacDinhSoLe(number_1)
XacDinhSoLe(number_2)
XacDinhSoLe(number_3)

// hàm chỉ là một khối code thực thi
// code trong hàm sẽ không chạy cho đến khi nó được gọi đến

/*
 * Sau đây là ví dụ về hàm có return và hàm không có return
 */

function sum(a, b) {
  return a + b
}
console.log(sum(1, 2))

function showMessage(message) {
  message = message || 'Đây là giá trị mặc định của message'
  document.write(message)
}
showMessage('hello')
showMessage('-------------------------')
showMessage()

/*
 * Dưới đây là cách sử dụng arrow function
 */
const showMessage2 = (message) => {
  message = message || 'Xin chào thế giới'
  document.write(message)
}
showMessage2('duynghiadev')
showMessage2('-------------------------')
showMessage2()

/*
 * Dưới đây là ví dụ về cách tạo hàm:
 * - Viết chương trình kiểm tra năm nhuận hay không ?
 * - logic: Nếu chia hết cho 4 thì -> năm nhuận
 */

const checkYearly = (year) => {
  if (year % 4 === 0) {
    alert(`${year} là một năm nhuận`)
  } else {
    alert(`${year} là một năm không nhuận`)
  }
}
checkYearly(2023)
