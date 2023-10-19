// 1. chọn element
const btnSignUpSelector = document.querySelector('.btn-signup')
const inputNameSelector = document.querySelector('.name')
const inputEmailSelector = document.querySelector('.email')
const inputPasswordSelector = document.querySelector('.password')

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
    let valueInput = inputSelector.value
    let divMessageSelector = inputSelector
      .closest('.form-group')
      .querySelector('.error_message')
    let name = inputSelector.name

    // validate not empty
    if (name === 'name') {
      let isRequireValid = requireValidate(inputSelector, name)
      // check success
      if (isRequireValid) {
        showSuccess(inputSelector, divMessageSelector)
      }
    } else if (name === 'email') {
      let isMinlengthValid
      let isEmailRegexValid
      let isRequireValid = requireValidate(inputSelector, name)
      // validate password tối thiểu 3 kí tự
      if (isRequireValid) {
        isMinlengthValid = minLengthValidate(inputSelector, name)
      }
      // validate email
      if (isRequireValid && isMinlengthValid) {
        isEmailRegexValid = emailRegexValidate(inputSelector, name)
      }
      // check validate success
      if (isRequireValid && isMinlengthValid && isEmailRegexValid) {
        showSuccess(inputSelector, divMessageSelector)
      }
    } else if (name === 'password') {
      let isRequireValid = requireValidate(inputSelector, name)
      let isMinlengthValid
      // validate password tối thiểu 8 kí tự
      isMinlengthValid = minLengthValidate(
        inputSelector,
        name,
        'password phải có tối thiểu 8 kí tự cho bảo mật'
      )
      // check success
      if (isRequireValid && isMinlengthValid) {
        showSuccess(inputSelector, divMessageSelector)
      }
    } else {
      showSuccess(inputSelector, divMessageSelector)
    }
  }
}

// rule show success
function showSuccess(inputSelector, divMessageSelector) {
  inputSelector.classList.remove('error')
  divMessageSelector.textContent = ''
}

// rule required validate
function requireValidate(inputSelector, name, message) {
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
