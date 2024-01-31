// false -- không phải là số nguyên tố

// cách 1: Làm theo cách thông thường
function isPrime_1(number) {
  for (let i = 2; i <= number; i++) {
    console.log('number_1:', number)
    console.log('i_1:', i)
    if (number % i === 0) {
      return false
    }
  }
  return true
}

const isPrimeTest_1 = isPrime_1(10)
if (isPrimeTest_1) {
  console.log('là số nguyên tố 🚀')
  console.log('-----------------------')
} else {
  console.log('không là số nguyên tố 👎')
  console.log('-----------------------')
}

// cách 2: phân tích sâu thêm 1 tí
function isPrime_2(number) {
  for (let i = 2; i <= number / 2; i++) {
    console.log('number_2:', number)
    console.log('i_2:', i)
    if (number % i === 0) {
      return false
    }
  }
  return true
}

const isPrimeTest_2 = isPrime_2(9)
if (isPrimeTest_2) {
  console.log('là số nguyên tố ✅')
  console.log('-----------------------')
} else {
  console.log('không là số nguyên tố ❌')
  console.log('-----------------------')
}

// cách 3: phân tích sâu thêm tí nữa, và khi lên vị trí cao thì chúng ta nên sử dụng cách này để tối ưu thuật toán
function isPrime_3(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    console.log('number_3:', number)
    console.log('i_3:', i)
    if (number % i === 0) {
      return false
    }
  }
  return true
}

const isPrimeTest_3 = isPrime_3(20)
if (isPrimeTest_3) {
  console.log('là số nguyên tố 🎉')
  console.log('-----------------------')
} else {
  console.log('không là số nguyên tố 🤷‍♂️')
  console.log('-----------------------')
}

// Đây là version tự code thêm để nhập số từ bàn phím
function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

function displayResult(number, result) {
  const resultElement = document.getElementById('result')
  resultElement.textContent = number + (result ? ' is prime' : ' is not prime')
  resultElement.className = result ? 'prime' : 'not-prime'
}

document.getElementById('checkButton').addEventListener('click', function () {
  const inputElement = document.getElementById('numberInput')
  let inputNumber = parseInt(inputElement.value)

  // Check if the input is a valid number
  if (isNaN(inputNumber) || inputNumber < 1) {
    alert('Please enter a valid positive integer.')
    inputElement.value = ''
    return
  }

  // Check if the input is already 1
  if (inputNumber === 1) {
    alert('1 is not a prime number.')
    return
  }

  // Update the input value and perform the prime check
  inputNumber--
  inputElement.value = inputNumber
  const isPrimeTest = isPrime(inputNumber)
  displayResult(inputNumber, isPrimeTest)
})
