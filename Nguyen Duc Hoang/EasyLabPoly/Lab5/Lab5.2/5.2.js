function them(button) {
  let row = button.parentElement.parentElement.cloneNode(true)
  let btnXoa = row.getElementsByTagName('button')[0]
  btnXoa.innerText = 'Xóa'
  btnXoa.setAttribute('onclick', 'xoa(this)')
  document.getElementById('cart').appendChild(row)

  tinhtong()
}

function xoa(button) {
  let row = button.parentElement.parentElement
  document.getElementById('cart').removeChild(row)

  tinhtong()
}

function tinhtong() {
  let cart = document.getElementById('cart')
  let rows = cart.getElementsByTagName('tr')
  let tong = 0

  for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName('td')
    let price = cells[1].innerText.substring(1)
    tong += Number(price)
  }
  document.getElementById('tong').innerText = tong
}
