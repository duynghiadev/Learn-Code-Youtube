/**
 * Code ở đây được viết theo ES5
 * Ví dụ phức tạp hơn về call và kết hợp với Array Method
 */
// Hàm thực hiện phép tính theo toán tử và mảng số
function calculate(operator) {
  var numbers = Array.prototype.slice.call(arguments, 1)

  if (operator === 'add') {
    return numbers.reduce(function (sum, num) {
      return sum + num
    }, 0)
  } else if (operator === 'subtract') {
    return numbers.reduce(function (difference, num) {
      return difference - num
    })
  } else if (operator === 'multiply') {
    return numbers.reduce(function (product, num) {
      return product * num
    }, 1)
  } else if (operator === 'divide') {
    if (
      numbers.some(function (num) {
        return num === 0
      })
    ) {
      return 'Không thể chia cho 0'
    }
    return numbers.reduce(function (quotient, num) {
      return quotient / num
    })
  } else {
    return 'Phép toán không hợp lệ'
  }
}

// Mảng các số cần thực hiện phép tính
var numbers = [2, 3, 5, 8]

// Áp dụng hàm calculate sử dụng apply để thực hiện phép cộng
var sum = calculate.apply(null, ['add'].concat(numbers))
console.log('Tổng các số:', sum)

// Áp dụng hàm calculate sử dụng apply để thực hiện phép nhân
var product = calculate.apply(null, ['multiply'].concat(numbers))
console.log('Tích các số:', product)

// Áp dụng hàm calculate sử dụng apply để thực hiện phép chia
var quotient = calculate.apply(null, ['divide'].concat(numbers))
console.log('Thương các số:', quotient)

// Áp dụng hàm calculate sử dụng apply để thực hiện phép trừ
var difference = calculate.apply(null, ['subtract'].concat(numbers))
console.log('Hiệu các số:', difference)
