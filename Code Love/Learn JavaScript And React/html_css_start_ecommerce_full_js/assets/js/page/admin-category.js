let validateCategory = new Validate({
  container: '#category_form_add',
  btnClassSubmit: 'btn_category_save',
  rules: {
    category_name: {
      required: true
    }
  },
  messages: {
    category_name_required: 'Danh mục không được để trống'
  },
  success: function () {
    console.log('success')
  }
})
