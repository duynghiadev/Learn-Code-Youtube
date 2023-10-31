function showDataCateFromLocal() {
  // 1. Lấy toàn bộ danh mục trong local
  const categories = JSON.parse(localStorage.getItem('categories')) || []
  // 2. Xây dụng cấu trúc html cho danh mục
  let htmlResult = ''
  categories.forEach(function (element) {
    htmlResult =
      htmlResult +
      `<tr>
          <td>${element.name}</td>
          <td>
            <button class="btn_common btn_eidt">
              Edit
            </button>
            <button data-id="${element.id}" class="btn_common btn_delete">
              Delete
            </button>
          </td>
        </tr>`
  })
  // 3. Đưa kết quả toàn bộ danh mục tbody của table
  document.querySelector('.category_table').innerHTML = htmlResult
}

function validateSuccess() {
  // 1. Lấy ra thông tin của danh mục
  const nameCategory = document.querySelector('.category_name').value
  // 2. Tạo ra object chứa thông tin danh mục
  const newCate = {
    id: crypto.randomUUID(),
    name: nameCategory
  }
  // 3. Đưa object vào trong mảng category
  const categories = JSON.parse(localStorage.getItem('categories')) || []
  const categoriesUpdate = [newCate, ...categories]
  // 4. Lưu vào trong localStorage
  localStorage.setItem('categories', JSON.stringify(categoriesUpdate))
  // 5. Hiển thị dữ liệu ngay lập tức khi thêm thành công
  showDataCateFromLocal()
}

function handleProcessData(event) {
  const clicked = event.target
  // Lấy ra tất cả danh mục trong local
  const categories = JSON.parse(localStorage.getItem('categories')) || []
  if (
    clicked.classList.contains('btn_delete') &&
    confirm('Bạn chắc chắn muốn delete')
  ) {
    const idDelete = clicked.getAttribute('data-id')
    // Mảng lọc ra phần tử cần delete
    const categoriesFilter = categories.filter(function (element) {
      return element.id !== idDelete
    })
    // Lưu vào localStorage
    localStorage.setItem('categories', JSON.stringify(categoriesFilter))
    // 5. Hiển thị dữ liệu ngay lập tức khi thêm thành công --> Re-render app
    showDataCateFromLocal()
  }
}

// Hiển thị dữ liệu category từ local
showDataCateFromLocal()

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

document
  .querySelector('.category_table')
  .addEventListener('click', handleProcessData)
