// 1. chọn element
const btnSignUpSelector = document.querySelector(".btn-signup")

// 2. function xử lý sự kiện + chạy lần đầu khi load
function handleSignUpClick(event) {
  event.preventDefault()
  console.log(1)
}

// 3. Thêm sự kiện cho phần tử
btnSignUpSelector.addEventListener("click", handleSignUpClick)
