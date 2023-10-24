function Validate(options) {
  // 1. Lấy ra container bao đóng form
  const container = document.querySelector(options.container)
  // 2. Tất cả các elements khác query dựa vào container
  const btnSignUpSelector = container.querySelector('.btn-signup')
  const rules = options.rules
  const messages = options.messages
  console.log(messages)

  function initEventAndData() {
    btnSignUpSelector.addEventListener('click', handleSignUpClick)
  }

  function handleSignUpClick(event) {
    event.preventDefault()
  }

  // add event listener + data init
  initEventAndData()
}
