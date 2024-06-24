/**
 * Code trong javascript sẽ có 2 trường hợp được thực thi
 * 1. Chạy ngay từ đầu khi load lại trang
 * 2. Chạy ngay khi nhận một tương tác từ người dùng (nhấn chuột click -> onclick, rê chuột -> hover,...)
 */
function handleClick() {
  console.log('handleClick')
}

let colorSkinId = document.getElementById('color-skin')
let containerDiv = document.querySelector('.container')

function changeStyleColor(href) {
  colorSkinId.setAttribute('href', href)
  console.log('color:', href)
}

function changeStyleContainer(type) {
  let newClass = 'container ' + type
  containerDiv.setAttribute('class', newClass)
  console.log('type:', type)
}
