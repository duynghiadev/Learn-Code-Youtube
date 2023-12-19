function show() {
  if (document.getElementById('team').style.display == 'block') {
    document.getElementById('team').style.display = 'none'
    document.getElementById('showmore').innerHTML = 'SHOW MORE'
  } else {
    document.getElementById('team').style.display = 'block'
    document.getElementById('showmore').innerHTML = 'SHOW LESS'
  }
}

function check() {
  let email = document.getElementById('email').value
  if (email === '') {
    alert('Please fill your email')
  } else {
    let usa = document.getElementById('USA')
    let uk = document.getElementById('UK')
    if (usa.checked || uk.checked) {
      let input = document.getElementsByTagName('input')
      let capchar = input[3].value
      if (capchar === 'cVr12TY') {
        alert('Thank you very much')
        location.reload()
      } else {
        alert('Please check your capcha')
      }
    } else {
      alert('Please check your options')
    }
  }
}