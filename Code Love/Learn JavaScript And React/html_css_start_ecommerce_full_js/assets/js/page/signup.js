// 1. chọn element
const btnSignUpSelector = document.querySelector(".btn-signup")
const inputNameSelector = document.querySelector(".name")

// 2. function xử lý sự kiện + chạy lần đầu khi load
function handleSignUpClick(event) {
  event.preventDefault()
  // 1. Thực hiện validate
  let inputValueName = inputNameSelector.value
  let errorNameSelector = inputNameSelector
    .closest(".form-group")
    .querySelector(".error_message")
  if (inputValueName === "") {
    inputNameSelector.classList.add("error")
    errorNameSelector.textContent = "Tên không được để trống"
  } else {
    inputNameSelector.classList.remove(".error")
    errorNameSelector.textContent = ""
  }
}

// 3. Thêm sự kiện cho phần tử
btnSignUpSelector.addEventListener("click", handleSignUpClick)
