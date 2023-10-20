// 1. chọn element
const btnSignUpSelector = document.querySelector('.btn-signup')
const inputAllSelector = document.querySelectorAll('.form-group input')
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// validate cho từng field một (từng ô input một)
// trong từng ô input check sẽ đính kèm các rule (qua tắc validate) của nó

// 2. function xử lý sự kiện + chạy lần đầu khi load
function handleSignUpClick(event) {
  event.preventDefault()
  // 1. Thực hiện validate
  for (let i = 0; i < inputAllSelector.length; i++) {
    let inputSelector = inputAllSelector[i]
    let name = inputSelector.name

    // validate not empty
    if (name === 'name') {
      validateName(inputSelector)
    } else if (name === 'email') {
      validateEmail(inputSelector)
    } else if (name === 'password') {
      validatePassword(inputSelector)
    } else {
      validateConfirmPassword(inputSelector)
    }
  }

  // kiểm tra không có ô input nào có lỗi validate
}

// =============== Start Listener Funtion ===============

// hàm chỉ chạy khi người dùng nhập value => có sự thay đổi ô input
function handleChangeValue(event) {
  let inputSelector = event.target
  let nameInput = inputSelector.name
  if (nameInput === 'name') {
    validateName(inputSelector)
  } else if (nameInput === 'email') {
    validateEmail(inputSelector)
  } else if (nameInput === 'password') {
    validatePassword(inputSelector)
  } else {
    validateConfirmPassword(inputSelector)
  }
}

// =============== End Listener Funtion ===============

// =============== Start Validate Input Funtion ===============

function validateName(inputSelector) {
  // require
  if (!require(inputSelector)) {
    // show error
    showError(inputSelector, 'Tên không được để trống')
  } else {
    // show success
    showSuccess(inputSelector)
  }
}

function validateEmail(inputSelector) {
  if (!require(inputSelector)) {
    showError(inputSelector, 'email không được để trống')
  } else if (!minlength(inputSelector)) {
    showError(
      inputSelector,
      `email tối thiểu ${inputSelector.getAttribute('min_length')} kí tự`
    )
  } else if (!emailRegex(inputSelector)) {
    showError(inputSelector, 'email không đúng định dạng')
  } else {
    showSuccess(inputSelector)
  }
}

function validatePassword(inputSelector) {
  if (!require(inputSelector)) {
    showError(inputSelector, 'password không được để trống')
  } else if (!minlength(inputSelector)) {
    showError(
      inputSelector,
      `password tối thiểu ${inputSelector.getAttribute('min_length')} kí tự`
    )
  } else {
    showSuccess(inputSelector)
  }
}

function validateConfirmPassword(inputSelector) {
  if (!require(inputSelector)) {
    showError(inputSelector, 'confirm password không được để trống')
  } else if (!minlength(inputSelector)) {
    showError(
      inputSelector,
      `confirm password tối thiểu ${inputSelector.getAttribute(
        'min_length'
      )} kí tự`
    )
  } else if (!comparePass(inputSelector)) {
    showError(inputSelector, 'confirm password không trùng với password')
  } else {
    showSuccess(inputSelector)
  }
}

// =============== End Validate Input Funtion ===============

// =============== Start Rules Funtion ===============
function require(inputSelector) {
  return inputSelector.value ? true : false
}

function minlength(inputSelector) {
  let minLength = inputSelector.getAttribute('min_length')
  let inputValue = inputSelector.value
  if (inputValue.length < minLength) {
    return false
  }
  return true
}

function emailRegex(inputSelector) {
  let inputValue = inputSelector.value
  return regexEmail.test(inputValue)
}

function comparePass(inputSelector) {
  let valueConfirmPass = inputSelector.value
  let passwordSelector = document.querySelector(
    '.' + inputSelector.getAttribute('selector_compare')
  )
  let valuePassword = passwordSelector.value

  return valueConfirmPass === valuePassword
}

// =============== End Rules Funtion ===============

// =============== Start Message Funtion ===============

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

// =============== End Message Funtion ===============

// 3. Thêm sự kiện cho phần tử
btnSignUpSelector.addEventListener('click', handleSignUpClick)

// Thêm sự kiện cho các ô input nhập liệu
for (let i = 0; i < inputAllSelector.length; i++) {
  let inputElement = inputAllSelector[i]
  inputElement.addEventListener('input', handleChangeValue)
}
