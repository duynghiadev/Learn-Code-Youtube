// CRUD
function validateInput() {
  let formElement = document.querySelector('.form')
  let inputElement = formElement.querySelectorAll('.form-input')
  for (let i = 0; i < inputElement.length; i++) {
    if (inputElement[i].value === '') {
      inputElement[i].parentElement.querySelector(
        '.error-message'
      ).innerText = `Please enter your ${inputElement[i].id}`
    } else {
      inputElement[i].parentElement.querySelector('.error-message').innerText = ''
    }
  }
}

function addNew() {
  validateInput()
  let formElement = document.querySelector('.form')
  let errorElement = formElement.querySelectorAll('.error-message')
  let arrErrorElement = []
  for (let i = 0; i < errorElement.length; i++) {
    arrErrorElement.push(errorElement[i].innerText)
  }
  let checkErrorElement = arrErrorElement.every((value) => value === '')
  if (checkErrorElement) {
    // Save code
  }
}
