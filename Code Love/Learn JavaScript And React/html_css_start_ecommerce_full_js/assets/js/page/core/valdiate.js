function Validate(option) {
  // 1. Lấy ra container bao đóng form
  const container = document.querySelector(option.container)
  // 2. Tất cả các elements khác query dựa vào container
  const btnSignUpSelector = container.querySelector('.btn-signup')

  function initEventAndData() {
    btnSignUpSelector.addEventListener('click', handleSignUpClick)
  }

  function handleSignUpClick(event) {
    event.preventDefault()
  }

  // add event listener + data init
  initEventAndData()
}
