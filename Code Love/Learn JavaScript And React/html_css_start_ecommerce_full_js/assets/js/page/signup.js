let signupInstanceValidate = new Validate({
  container: '.form_register',
  rules: {
    name: {
      required: true
    },
    email: {
      required: true,
      minlength: 3,
      email: true
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
    email_required: 'Email không được để trống'
  }
})
