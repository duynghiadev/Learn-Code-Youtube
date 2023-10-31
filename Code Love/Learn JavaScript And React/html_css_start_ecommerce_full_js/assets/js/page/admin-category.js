const tbodyCate = document.querySelector('.category_table')
const categoryInputName = document.querySelector('.category_name')
const buttonSave = document.querySelector('.btn_category_save')

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
            <button data-id="${element.id}" class="btn_common btn_eidt">
              Edit
            </button>
            <button data-id="${element.id}" class="btn_common btn_delete">
              Delete
            </button>
          </td>
        </tr>`
  })
  // 3. Đưa kết quả toàn bộ danh mục tbody của table
  tbodyCate.innerHTML = htmlResult
}

function validateSuccess() {
  if (buttonSave.classList.contains('update')) {
    updateCategory()
  } else {
    addCategory()
  }
}

function updateCategory() {
  // 1. Lấy ra thông tin của danh mục
  const nameCategory = categoryInputName.value
  // 2. Tạo ra dữ liệu update
  // 2.1 Lấy ra id update
  const categories = JSON.parse(localStorage.getItem('categories')) || []
  const idUpdate = buttonSave.getAttribute('data-id')
  const categoriesUpdate = categories.map(function (element) {
    if (element.id === idUpdate) {
      return {
        id: element.id,
        name: nameCategory
      }
    } else {
      return element
    }
  })
  // 3. Lưu vào localStorage
  localStorage.setItem('categories', JSON.stringify(categoriesUpdate))
  // 4. Hiển thị dữ liệu ngay lập tức khi thêm thành công
  showDataCateFromLocal()
  // 5. Reset form
  categoryInputName.value = ''
  // 6. Reset form đến trang add category
  buttonSave.textContent = 'Save'
  buttonSave.removeAttribute('data-id')
  buttonSave.classList.remove('update')
}

function addCategory() {
  // 1. Lấy ra thông tin của danh mục
  const nameCategory = categoryInputName.value
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
  // 6. Reset form
  categoryInputName.value = ''
}

function handleProcessData(event) {
  const clicked = event.target
  // Lấy ra tất cả danh mục trong local
  const categories = JSON.parse(localStorage.getItem('categories')) || []

  // Khi người dùng click vào button click delete
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

  // Khi người dùng click vào button click edit
  else if (clicked.classList.contains('btn_eidt')) {
    // 1. Lấy ra id của element edit
    const idEdit = clicked.getAttribute('data-id')

    // 2. Cách lấy ra object element theo id edit (cách làm dễ hiểu hơn. Nhưng mà dài dòng, nên dùng method find theo ở dưới phần 2.1 👇)

    // let elementEditing = undefined
    // for (let i = 0; i < categories.length; i++) {
    //   if (categories[i].id === idEdit) {
    //     elementEditing === categories[i]
    //     break
    //   }
    // }

    // 2.1 Lấy ra object element theo id edit (dùng method find)
    const elementEditing = categories.find(function (element) {
      return element.id === idEdit
    })
    // 3. Đưa name lên ô input đang chỉnh sửa
    categoryInputName.value = elementEditing.name
    // 4. Chỉnh sửa để người dùng nhận biết hiện tại đang edit form
    // 4.1 Thay đổi text button đến update
    buttonSave.textContent = 'Update'
    // 4.2 Thêm class âm thầm để biết là update
    buttonSave.classList.add('update')
    // 4.3 Thêm id để biết update cho object nào
    buttonSave.setAttribute('data-id', idEdit)
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

tbodyCate.addEventListener('click', handleProcessData)
