function Validate(options) {
  // khai báo biến có options
  const btnClassSubmit = options.btnClassSubmit || 'btn-signup'
  const errorClass = options.errorClass || 'error'
  const errorMessageClass = options.errorMessageClass || 'error_message'
  const formGroupClass = options.formGroupClass || 'form-group'
  const rules = options.rules
  const messages = options.messages

  // truy vấn DOM của thư viện
  const container = document.querySelector(options.container)
  const btnSignUpSelector = container.querySelector('.' + btnClassSubmit)

  const messageDefault = {
    required: 'This field is required',
    minlength: 'Please enter at latest {min} characters',
    regex: 'Please enter true format',
    equal_to: 'This field not same value'
  }

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
    // Sự kiện nhấn button submit form
    btnSignUpSelector.addEventListener('click', handleSignUpClick)
    // Sự kiện input khi thay đổi value cho element
    container.querySelectorAll(`.${formGroupClass} input`).forEach(function (element) {
      element.addEventListener('input', handleInputChange)
    })
    container.querySelectorAll(`.${formGroupClass} select`).forEach(function (element) {
      element.addEventListener('input', handleInputChange)
    })
    container.querySelectorAll(`.${formGroupClass} textarea`).forEach(function (element) {
      element.addEventListener('input', handleInputChange)
    })
  }

  function handleInputChange(event) {
    errors = errors || []
    const inputSelector = event.target
    // xóa bỏ lỗi element input ra khỏi mảng lỗi
    errors = errors.filter(function (element) {
      return element.elementError.name !== inputSelector.name
    })
    // thêm lỗi vào nếu element có lỗi
    validateOneElement(inputSelector)
    // reset error
    resetErrors(inputSelector)
    // hiển thị lỗi
    showErrors()
  }

  function validateOneElement(element) {
    const valueInput = element.value
    const keyInputName = element.name
    const ruleAllForInputItem = rules[keyInputName]

    for (const ruleItemKey in ruleAllForInputItem) {
      const valueRule = ruleAllForInputItem[ruleItemKey]
      const result = rulesMethod[ruleItemKey](valueInput, valueRule)
      const keyMessage = keyInputName + '_' + ruleItemKey
      if (!result) {
        // Đẩy lỗi vào biến đang lưu trữ
        let messageErrorDefault = messageDefault[ruleItemKey]
        messageErrorDefault = messageErrorDefault.replace('{min}', valueRule)
        errors.push({
          elementError: element,
          message: messages[keyMessage] ? messages[keyMessage] : messageErrorDefault
        })
        return false
      }
    }
  }

  function handleSignUpClick(event) {
    event.preventDefault()
    errors = []

    for (const keyInputName in rules) {
      const inputSelector = container.querySelector('.' + keyInputName)
      // reset all errors
      resetErrors(inputSelector)
      // check validate passed for one element input
      validateOneElement(inputSelector)
    }
    // Hiển thị lỗi
    showErrors()
    // gọi hàm thành công khi không có lỗi trong form
    if (!errors.length) {
      let successForm = options.success
      successForm()
    }
  }

  function resetErrors(inputSelector) {
    inputSelector.classList.remove(errorClass)
    let divError = inputSelector
      .closest(`.${formGroupClass}`)
      .querySelector(`.${errorMessageClass}`)

    divError.textContent = ''
  }

  function showErrors() {
    if (errors.length) {
      errors.forEach(function (element) {
        let inputElement = element.elementError
        let divError = inputElement
          .closest(`.${formGroupClass}`)
          .querySelector(`.${errorMessageClass}`)

        inputElement.classList.add(errorClass)
        divError.textContent = element.message
      })
    }
  }

  // add event listener + data init
  initEventAndData()
}
