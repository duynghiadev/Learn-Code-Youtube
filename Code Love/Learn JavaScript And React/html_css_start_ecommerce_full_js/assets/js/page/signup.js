let signupInstanceValidate = new Validate({
  container: '.form_register',
  rules: {
    name: {
      required: true
    },
    email: {
      required: true,
      minlength: 3,
      regex: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    },
    password: {
      required: true,
      minlength: 8
    },
    confirm_password: {
      required: true,
      minlength: 8,
      equal_to: 'password'
    }
  },
  messages: {
    name_required: 'Tên không được để trống',
    email_required: 'Email không được để trống',
    email_regex: 'Email không đúng định dạng'
  },
  success: function () {
    // 1. Lấy dữ liệu input
    let dataForm = {}
    let users = JSON.parse(localStorage.getItem('users')) || []
    // check email is exit
    const email = document.querySelector('.form_register .email').value
    let isEmailExit = users.some(function (element) {
      return element.email === email
    })
    console.log('isEmailExit', isEmailExit)

    // Nếu email chưa tồn tại thì mới thêm thông tin user vào local
    if (!isEmailExit) {
      document
        .querySelectorAll('.form_register input')
        .forEach(function (element) {
          if (element.name !== 'confirm_password') {
            dataForm[element.name] = element.value
          }
        })
      // 2.1 Create data users array
      dataForm['id'] = crypto.randomUUID()
      users.push(dataForm)
      // 2.2 Save to localStorage
      localStorage.setItem('users', JSON.stringify(users))
    }
  }
})
