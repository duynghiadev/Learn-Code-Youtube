function hien_thi(check) {
  let other_hobbies = document.getElementById('other_hobbies')
  other_hobbies.style.display = check ? '' : 'none'
}

function kiemtra() {
  let ho = document.getElementById('firstname')
  let ten = document.getElementById('lastname')
  let date = document.getElementById('date')
  let genders = document.getElementsByName('gender')
  let phone = document.getElementById('phone')
  let hobbies = document.getElementsByName('hobbies')

  if (ho.value.trim().length === 0) {
    alert('Vui lòng nhập họ')
    return false
  }

  if (ten.value.trim().length === 0) {
    alert('Vui lòng nhập tên')
    return false
  }

  if (date.value.trim().length === 0) {
    alert('Vui lòng chọn ngày sinh')
    return false
  }

  let genderSelected = false
  for (let i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      genderSelected = true
      break
    }
  }
  if (!genderSelected) {
    alert('Vui lòng chọn giới tính')
    return false
  }

  if (phone.value.trim().length !== 10) {
    alert('Số điện thoại phải có 10 chữ số')
    return false
  }

  let hobbiesSelected = false
  for (let i = 0; i < hobbies.length; i++) {
    if (hobbies[i].checked) {
      hobbiesSelected = true
      break
    }
  }
  if (!hobbiesSelected) {
    alert('Vui lòng chọn ít nhất 1 sở thích')
    return false
  }

  return true
}
