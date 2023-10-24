function Validate(options) {
  // 1. Lấy ra container bao đóng form
  const container = document.querySelector(options.container)
  // 2. Tất cả các elements khác query dựa vào container
  const btnSignUpSelector = container.querySelector('.btn-signup')
  const rules = options.rules
  const messages = options.messages

  const rulesMethod = {
    required: function (valueInput, valueRule) {
      console.log('required', valueRule)
    },
    minlength: function (valueInput, valueRule) {
      console.log('minlength', valueRule)
    },
    email: function (valueInput, valueRule) {
      console.log('email', valueRule)
    },
    equal_to: function (valueInput, valueRule) {
      console.log('equal_to', valueRule)
    }
  }

  function initEventAndData() {
    btnSignUpSelector.addEventListener('click', handleSignUpClick)
  }

  function handleSignUpClick(event) {
    event.preventDefault()
    for (const keyInputName in rules) {
      let inputSelector = container.querySelector('.' + keyInputName)
      let valueInput = inputSelector.value
      console.log(valueInput)

      console.log('keyInputName', keyInputName)
      console.log('rules for item input', rules[keyInputName])

      const ruleAllForInputItem = rules[keyInputName]

      for (const ruleItemKey in ruleAllForInputItem) {
        let valueRule = ruleAllForInputItem[ruleItemKey]
        rulesMethod[ruleItemKey](valueInput, valueRule)
      }
    }
  }

  // add event listener + data init
  initEventAndData()
}
