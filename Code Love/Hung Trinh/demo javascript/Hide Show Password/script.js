function togglePassword() {
  let password = document.getElementById('password')
  let checkbox = document.getElementById('checkbox')
  if (checkbox.checked) {
    password.type = 'text'
  } else {
    password.type = 'password'
  }
}

function checkForm() {
  let email = document.getElementById('email').value
  let regexEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  let checkEmail = regexEmail.test(email)

  let password = document.getElementById('password').value
  let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/gm
  let checkPassword = regexPassword.test(password)

  if (!checkEmail) {
    alert('Invalid Email')
  } else if (!checkPassword) {
    alert('Invalid Password')
  } else {
    alert('Success')
  }
}
