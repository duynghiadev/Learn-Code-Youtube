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
      if (!require(inputSelector)) {
        showError(inputSelector, 'Email không được để trống')
      } else if (!minlength(inputSelector)) {
        showError(
          inputSelector,
          `Email tối thiểu ${inputSelector.getAttribute('min_length')} kí tự`
        )
      } else if (!emailRegex(inputSelector)) {
        showError(inputSelector, 'Email không đúng định dạng')
      } else {
        showSuccess(inputSelector)
      }
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

// 3. Thêm sự kiện cho phần tử
btnSignUpSelector.addEventListener('click', handleSignUpClick)
