// 1. chọn element
const btnSignUpSelector = document.querySelector('.btn-signup')
const inputAllSelector = document.querySelectorAll('.form-group input')
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// input
const rules = {
  name: {
    required: true,
  },
  email: {
    required: true,
    minlength: 3,
    email: true,
  },
  password: {
    required: true,
    minlength: 8,
  },
  confirm_password: {
    required: true,
    minlength: 8,
    equal_to: 'password',
  },
}

// =============== Start Listener Funtion ===============

function handleSignUpClick(event) {
  event.preventDefault()
  console.log('click button')
}

// =============== End Listener Funtion ===============

// 3. Thêm sự kiện cho phần tử
btnSignUpSelector.addEventListener('click', handleSignUpClick)
