function validateSuccess() {
  // 1. Lấy ra thông tin của danh mục
  const nameCategory = document.querySelector('.category_name').value
  // 2. Tạo ra object chứa thông tin danh mục
  const newCate = {
    id: crypto.randomUUID(),
    name: nameCategory
  }
  // 3. Đưa object vào trong mảng category
  let categories = JSON.parse(localStorage.getItem('categories')) || []
  console.log('categories', categories)
  categories.push(newCate)
  // 4. Lưu vào trong localStorage
  localStorage.setItem('categories', JSON.stringify(categories))
}

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
  success: validateSuccess
})
