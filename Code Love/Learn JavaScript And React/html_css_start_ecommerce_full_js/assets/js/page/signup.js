// 1. chọn element
const btnSignUpSelector = document.querySelector('.btn-signup')
const inputAllSelector = document.querySelectorAll('.form-group input')
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const errorMessageAll = document.querySelectorAll('.error_message')

// validate cho từng field một (từng ô input một)
// trong từng ô input check sẽ đính kèm các rule (qua tắc validate) của nó

// 2. function xử lý sự kiện + chạy lần đầu khi load
function handleSignUpClick(event) {
  event.preventDefault()
  // 1. Thực hiện validate
  for (let i = 0; i < inputAllSelector.length; i++) {
    let inputSelector = inputAllSelector[i]
    let valueInput = inputSelector.value
    let divMessageSelector = inputSelector
      .closest('.form-group')
      .querySelector('.error_message')
    let name = inputSelector.name

    // validate not empty
    if (name === 'name') {
      // require
      if (!require(inputSelector)) {
        // show error
        showError(inputSelector, 'Tên không được để trống')
      } else {
        // show success
        showSuccess(inputSelector)
      }
    } else if (name === 'email') {
      // 1. require
      // 2. minlength
      // 3. regex validate email
    } else if (name === 'password') {
      // 1. require
      // 2. minlength
    } else {
      // 1. require
      // 2. minlength
      // 3. compare password
    }
  }

  // kiểm tra không có ô input nào có lỗi validate
  // 1. lưu user vào localStorage
  // 2. redirect đến màn hình login
}

// rule require
// output: return true or false

function require(inputSelector) {
  return inputSelector.value ? true : false
}

function showError(inputSelector, message = null) {
  // 1. Hiển thị màu đỏ cho ô input
  inputSelector.classList.add('error')
  // 2. Thêm nội dung lỗi cho div message dưới ô input
  let divMessageSelector = inputSelector
    .closest('.form-group')
    .querySelector('.error_message')
  divMessageSelector.textContent = message
}

// rule show success
function showSuccess(inputSelector) {
  inputSelector.classList.remove('error')
  let divMessageSelector = inputSelector
    .closest('.form-group')
    .querySelector('.error_message')
  divMessageSelector.textContent = ''
}

// rule compare data
function compareFieldsValidate(inputSelector, name, message) {
  let isValid = true
  let valueInput = inputSelector.value
  let compareSelectorClass = inputSelector.getAttribute('selector_compare')
  let compareSelector = document.querySelector('.' + compareSelectorClass)
  let divMessageSelector = inputSelector
    .closest('.form-group')
    .querySelector('.error_message')
  if (compareSelector.value !== valueInput) {
    isValid = false
    inputSelector.classList.add('error')
    // hiển thị message lỗi
    let messageError =
      'dữ liệu nhập ở ' +
      name +
      ' không trùng với dữ liệu nhập ở ' +
      compareSelectorClass
    if (message) {
      messageError = message
    }
    divMessageSelector.textContent = messageError
  }
  return isValid
}

// rule required validate
function requireValidate(inputSelector, name, message) {
  // 1. Kiểm tra xem rule có hợp lệ hay không?
  // 2. Nếu không hợp lệ, hiển thị thông báo lỗi dưới ô input

  let isValid = true
  let valueInput = inputSelector.value
  let divMessageSelector = inputSelector
    .closest('.form-group')
    .querySelector('.error_message')
  if (valueInput === '') {
    isValid = false
    // thêm viền đỏ cho input
    inputSelector.classList.add('error')
    // hiển thị message lỗi
    let messageError = name + ' không được để trống'
    if (message) {
      messageError = message
    }
    divMessageSelector.textContent = messageError
  }
  return isValid
}

// rule validate email
function emailRegexValidate(inputSelector, name, message) {
  let isValid = true
  let valueInput = inputSelector.value
  let divMessageSelector = inputSelector
    .closest('.form-group')
    .querySelector('.error_message')
  let isValidRegex = regexEmail.test(valueInput)
  if (isValidRegex === false) {
    isValid = false
    inputSelector.classList.add('error')
    let messageError = name + ' không phải định dạng email hợp lệ'
    if (message) {
      messageError = message
    }
    divMessageSelector.textContent = messageError
  }
  return isValid
}

// rule validate min-length
function minLengthValidate(inputSelector, name, message) {
  let isValid = true
  let valueInput = inputSelector.value
  let divMessageSelector = inputSelector
    .closest('.form-group')
    .querySelector('.error_message')
  // optional
  let minLength = inputSelector.getAttribute('min_length')

  if (valueInput.length < minLength) {
    isValid = false
    inputSelector.classList.add('error')
    let messageError = name + ' tối thiểu ' + minLength + ' kí tự'
    if (message) {
      messageError = message
    }
    divMessageSelector.textContent = messageError
  }
  return isValid
}

// 3. Thêm sự kiện cho phần tử
btnSignUpSelector.addEventListener('click', handleSignUpClick)
