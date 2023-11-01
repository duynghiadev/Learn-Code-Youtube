const selectCate = document.querySelector('.category_wrapper_form')
const formProduct = document.querySelector('#form_save_product')

function showCategoryInProduct() {
  // 1. Lấy toàn bộ danh mục trong local
  const cateAll = JSON.parse(localStorage.getItem('categories')) || []
  let htmlOption = '<option value="">Chọn danh mục</option>'
  cateAll.forEach(function (element) {
    htmlOption =
      htmlOption + `<option value="${element.id}">${element.name}</option>`
  })
  // 2. Đưa options vào trong select
  selectCate.innerHTML = htmlOption
}

function validateProductSuccess() {
  // 1. Lấy ra value của input
  let objValue = {}
  const inputAll = formProduct.querySelectorAll('.form-control-item')
  inputAll.forEach(function (element) {
    objValue[element.name] = element.value
  })
  console.log(objValue)
}

// Hiển thị danh mục khi load trang lần đầu
showCategoryInProduct()

let validateProduct = new Validate({
  container: '#form_save_product',
  btnClassSubmit: 'btn_save',
  rules: {
    name: {
      required: true
    },
    category_wrapper_form: {
      required: true
    },
    price_product: {
      required: true
    },
    image: {
      required: true
    },
    description: {
      required: true
    }
  },
  messages: {
    name_required: 'Tên không được để trống'
  },
  success: validateProductSuccess
})
