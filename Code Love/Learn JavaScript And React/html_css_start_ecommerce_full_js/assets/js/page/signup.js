// 1. chọn element
const btnSignUpSelector = document.querySelector('.btn-signup')
const inputNameSelector = document.querySelector('.name')
const inputEmailSelector = document.querySelector('.email')
const inputPasswordSelector = document.querySelector('.password')

const inputAllSelector = document.querySelectorAll('.form-group input')

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
    if (valueInput === '') {
      // thêm viền đỏ cho input
      inputSelector.classList.add('error')
      // hiển thị message lỗi
      let message = name + ' không được để trống'
      divMessageSelector.textContent = message
    } else if (name === 'email') {
      // validate password tối thiểu 3 kí tự
      minLengthValidate(inputSelector, name, 'email phải có tối thiểu 3 kí tự')
    } else if (name === 'password') {
      // validate password tối thiểu 8 kí tự
      minLengthValidate(
        inputSelector,
        name,
        'password phải có tối thiểu 8 kí tự cho bảo mật'
      )
    }
  }
}

// rule validate min-length
function minLengthValidate(inputSelector, name, message) {
  let valueInput = inputSelector.value
  let divMessageSelector = inputSelector
    .closest('.form-group')
    .querySelector('.error_message')
  // optional
  let minLength = inputSelector.getAttribute('min_length')

  if (valueInput.length < minLength) {
    let messageError = name + ' tối thiểu ' + minLength + ' kí tự'
    if (message) {
      messageError = message
    }
    divMessageSelector.textContent = message
  }
}

// 3. Thêm sự kiện cho phần tử
btnSignUpSelector.addEventListener('click', handleSignUpClick)
