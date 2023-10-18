// 1. chọn element
const btnSignUpSelector = document.querySelector('.btn-signup')
const inputNameSelector = document.querySelector('.name')
const inputEmailSelector = document.querySelector('.email')
const inputPasswordSelector = document.querySelector('.password')

// 2. function xử lý sự kiện + chạy lần đầu khi load
function handleSignUpClick(event) {
  event.preventDefault()
  // 1. Thực hiện validate

  // 1.1 Validate cho input name
  let inputValueName = inputNameSelector.value
  let errorNameSelector = inputNameSelector
    .closest('.form-group')
    .querySelector('.error_message')
  if (inputValueName === '') {
    inputNameSelector.classList.add('error')
    errorNameSelector.textContent = 'Tên không được để trống'
  } else {
    inputNameSelector.classList.remove('error')
    errorNameSelector.textContent = ''
  }

  // 1.2 Validate cho input email
  let inputValueEmail = inputEmailSelector.value
  let errorEmailSelector = inputEmailSelector
    .closest('.form-group')
    .querySelector('.error_message')
  if (inputValueEmail === '') {
    inputEmailSelector.classList.add('error')
    errorEmailSelector.textContent = 'Email không được để trống'
  } else {
    inputEmailSelector.classList.remove('error')
    errorEmailSelector.textContent = ''
  }

  // 1.3 Validate cho input password
  let inputPasswordValue = inputPasswordSelector.value
  let errorPassSelector = inputPasswordSelector
    .closest('.form-group')
    .querySelector('.error_message')
  if (inputPasswordValue === '') {
    inputPasswordSelector.classList.add('error')
    errorPassSelector.textContent = 'Password không được để trống'
  } else {
    inputPasswordSelector.classList.remove('error')
    errorPassSelector.textContent = ''
  }
}

// 3. Thêm sự kiện cho phần tử
btnSignUpSelector.addEventListener('click', handleSignUpClick)
