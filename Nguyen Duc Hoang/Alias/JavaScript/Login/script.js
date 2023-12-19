let x = true

function myFunction() {
  if (x) {
    document.getElementById('pass').type = 'text'
    x = false
  } else {
    document.getElementById('pass').type = 'password'
    x = true
  }
}
