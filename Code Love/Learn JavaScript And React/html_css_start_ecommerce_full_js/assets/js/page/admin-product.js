const selectCate = document.querySelector('.category_wrapper_form')

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

// Hiển thị danh mục khi load trang lần đầu
showCategoryInProduct()
