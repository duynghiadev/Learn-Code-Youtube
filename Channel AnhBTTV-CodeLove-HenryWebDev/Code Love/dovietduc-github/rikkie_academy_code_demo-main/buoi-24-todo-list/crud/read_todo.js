// 1. Các câu lệnh selector và khai báo biến global
let todosData = [
  { id: 1, name: 'Quét nhà' },
  { id: 2, name: 'Giặt quần áo' },
  { id: 3, name: 'Đi chơi' }
]
let ulSelector = document.querySelector('.content_data_todos')

// 2. Tạo hàm hiển thị các công việc
// 2.1 công việc cố gắng: chuyển đổi dữ liệu array sang mã html
// 2.2 để làm việc này chúng ta cần for array và tạo string html

function showTodoList() {
  // output: tạo string html
  let resultHtml = ''

  for (let i = 0; i < todosData.length; i++) {
    resultHtml = resultHtml + '<li>' + todosData[i].name + '</li>'
  }
  // 2. đưa html vào trong ul
  ulSelector.innerHTML = resultHtml
}

showTodoList()
