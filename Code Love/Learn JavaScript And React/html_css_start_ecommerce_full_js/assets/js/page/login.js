function rules() {
  return {
    email: {
      required: true,
      minlength: 3,
      regex: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    },
    password: {
      required: true,
      minlength: 8
    }
  }
}

function messages() {
  return {
    name_required: 'Tên không được để trống',
    email_required: 'Email không được để trống',
    email_regex: 'Email không đúng định dạng'
  }
}

function validateSuccess() {
  console.log('validate success')
}

let loginInstanceValidate = new Validate({
  container: '.login_form',
  btnClassSubmit: 'btn-login',
  rules: rules(),
  messages: messages(),
  success: validateSuccess
})
