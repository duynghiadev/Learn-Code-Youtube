/**
 * Đoạn code này là ví dụ trong file markdown
 *
 * Ví dụ phức tạp hơn về call và kết hợp với Array Method được chuyển từ file call-apply-5-ES5.js
 */
// Hàm thực hiện phép tính theo toán tử và mảng số
function calculate(operator, ...numbers) {
  if (operator === 'add') {
    return numbers.reduce((sum, num) => {
      console.log('This is operator add:')
      console.log(`sum / num => ${sum} + ${num}`)
      console.log('Kết quả sum / num:', sum + num)
      console.log('----------------------------------')
      return sum + num
    }, 0)
  } else if (operator === 'subtract') {
    return numbers.reduce((difference, num) => {
      console.log('This is operator subtract:')
      console.log(`difference / num => ${difference} - ${num}`)
      console.log('Kết quả difference / num:', difference - num)
      console.log('----------------------------------')
      return difference - num
    })
  } else if (operator === 'multiply') {
    return numbers.reduce((product, num) => {
      console.log('This is operator multiply:')
      console.log(`product / num => ${product} * ${num}`)
      console.log('Kết quả product / num:', product * num)
      console.log('----------------------------------')
      return product * num
    }, 1)
  } else if (operator === 'divide') {
    if (numbers.some((num) => num === 0)) {
      return 'Không thể chia cho 0'
    }
    return numbers.reduce((quotient, num) => {
      console.log('This is operator divide:')
      console.log('quotient:', quotient)
      console.log('num:', num)
      console.log(`quotient / num => ${quotient} / ${num}`)
      console.log('Kết quả quotient / num:', quotient / num)
      console.log('----------------------------------')
      return quotient / num
    })
  } else {
    return 'Phép toán không hợp lệ'
  }
}

// Mảng các số cần thực hiện phép tính
const numbers = [2, 3, 5, 8]

// Áp dụng hàm calculate sử dụng apply để thực hiện phép cộng
const sum = calculate.apply(null, ['add', ...numbers])
console.log('Tổng các số:', sum)
console.log('----------------------------------')

// Áp dụng hàm calculate sử dụng apply để thực hiện phép trừ
const difference = calculate.apply(null, ['subtract', ...numbers])
console.log('Hiệu các số:', difference)
console.log('----------------------------------')

// Áp dụng hàm calculate sử dụng apply để thực hiện phép nhân
const product = calculate.apply(null, ['multiply', ...numbers])
console.log('Tích các số:', product)
console.log('----------------------------------')

// Áp dụng hàm calculate sử dụng apply để thực hiện phép chia
const quotient = calculate.apply(null, ['divide', ...numbers])
console.log('Thương các số:', quotient)
console.log('----------------------------------')
