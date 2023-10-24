function Validate(options) {
  // 1. Lấy ra container bao đóng form
  const container = document.querySelector(options.container)
  // 2. Tất cả các elements khác query dựa vào container
  const btnSignUpSelector = container.querySelector('.btn-signup')
  const rules = options.rules
  const messages = options.messages
  let errors

  const rulesMethod = {
    required: function (valueInput, valueRule) {
      return valueInput !== ''
    },
    minlength: function (valueInput, valueRule) {
      return valueInput.length >= valueRule
    },
    regex: function (valueInput, valueRule) {
      return valueRule.test(valueInput)
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
    errors = []

    for (const keyInputName in rules) {
      let inputSelector = container.querySelector('.' + keyInputName)
      let valueInput = inputSelector.value
      const ruleAllForInputItem = rules[keyInputName]

      for (const ruleItemKey in ruleAllForInputItem) {
        let valueRule = ruleAllForInputItem[ruleItemKey]
        let result = rulesMethod[ruleItemKey](valueInput, valueRule)
        let keyMessage = keyInputName + '_' + ruleItemKey
        // reset all errors
        resetErrors(inputSelector)

        if (!result) {
          // Đẩy lỗi vào biến đang lưu trữ
          errors.push({
            elementError: inputSelector,
            message: messages[keyMessage]
              ? messages[keyMessage]
              : keyInputName + ' not valid'
          })
          break
        }
      }
    }
    // Hiển thị lỗi
    if (errors.length) {
      showErrors()
    }

    function resetErrors(inputSelector) {
      inputSelector.classList.remove('error')
      let divError = inputSelector
        .closest('.form-group')
        .querySelector('.error_message')

      divError.textContent = ''
    }
  }

  function showErrors() {
    errors.forEach(function (element) {
      let inputElement = element.elementError
      let divError = inputElement
        .closest('.form-group')
        .querySelector('.error_message')

      inputElement.classList.add('error')
      divError.textContent = element.message
    })
  }

  // add event listener + data init
  initEventAndData()
}
