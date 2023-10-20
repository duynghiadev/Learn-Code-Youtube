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

const methodsRule = {
  required: function (valueInput, paramsInput) {
    console.log('require running')
  },
  minlength: function (valueInput, paramsInput) {
    console.log('minlength running')
  },
  email: function (valueInput, paramsInput) {
    console.log('email running')
  },
  equal_to: function (valueInput, paramsInput) {
    console.log('equal_to running')
  },
}

// =============== Start Listener Funtion ===============

function handleSignUpClick(event) {
  event.preventDefault()
  // loop qua từng phần tử validate
  for (const keyNameInput in rules) {
    let inputElement = document.querySelector('.' + keyNameInput)
    let valueInput = inputElement.value
    console.log(inputElement)

    let ruleAllForInput = rules[keyNameInput]
    console.log(ruleAllForInput)
    // loop qua từng rule validate của input đấy
    for (const ruleItemKey in ruleAllForInput) {
      console.log(ruleItemKey)
      let paramsInput = ruleAllForInput[ruleItemKey]
      console.log(paramsInput)
      methodsRule[ruleItemKey](valueInput, paramsInput)
    }
  }
}

// =============== End Listener Funtion ===============

// 3. Thêm sự kiện cho phần tử
btnSignUpSelector.addEventListener('click', handleSignUpClick)
