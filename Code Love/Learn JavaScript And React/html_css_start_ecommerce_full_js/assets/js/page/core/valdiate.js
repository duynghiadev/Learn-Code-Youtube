function Validate(options) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  // 1. Lấy ra container bao đóng form
  const container = document.querySelector(options.container)
  // 2. Tất cả các elements khác query dựa vào container
  const btnSignUpSelector = container.querySelector('.btn-signup')
  const rules = options.rules
  const messages = options.messages

  const rulesMethod = {
    required: function (valueInput, valueRule) {
      return valueInput !== ''
    },
    minlength: function (valueInput, valueRule) {
      return valueInput.length >= valueRule
    },
    email: function (valueInput, valueRule) {
      return regexEmail.test(valueInput)
    },
    equal_to: function (valueInput, valueRule) {
      let passSelector = container.querySelector('.' + valueRule)
      let valuePass = passSelector.value
      return valueInput === valuePass
    }
  }

  function initEventAndData() {
    btnSignUpSelector.addEventListener('click', handleSignUpClick)
  }

  function handleSignUpClick(event) {
    event.preventDefault()
    for (const keyInputName in rules) {
      console.group()
      let inputSelector = container.querySelector('.' + keyInputName)
      let valueInput = inputSelector.value
      console.log('rules for item input', rules[keyInputName])

      const ruleAllForInputItem = rules[keyInputName]

      for (const ruleItemKey in ruleAllForInputItem) {
        let valueRule = ruleAllForInputItem[ruleItemKey]
        let result = rulesMethod[ruleItemKey](valueInput, valueRule)
        console.log('result for input: ' + keyInputName, result)
        if (!result) {
          // show error
          break
        }
      }
      console.groupEnd()
    }
  }

  // add event listener + data init
  initEventAndData()
}
