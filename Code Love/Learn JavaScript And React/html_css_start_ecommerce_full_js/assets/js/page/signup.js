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

    // validate not empty
    if (valueInput === '') {
      // thêm viền đỏ cho input
      inputSelector.classList.add('error')
      // hiển thị message lỗi
      let name = inputSelector.name
      let message = name + ' không được để trống'
      divMessageSelector.textContent = message
    }
  }
}

// 3. Thêm sự kiện cho phần tử
btnSignUpSelector.addEventListener('click', handleSignUpClick)
