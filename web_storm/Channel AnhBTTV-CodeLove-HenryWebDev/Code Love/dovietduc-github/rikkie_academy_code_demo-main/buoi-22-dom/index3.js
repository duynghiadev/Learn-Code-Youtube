// Cách thêm sự kiện cho DOm
const buttonAdd = document.querySelector('.btn')
const demoDiv = document.querySelector('.demo')

function handleClick() {
  // anh muốn
  demoDiv.innerHTML = demoDiv.innerHTML + '<p>Chao ban</p>'
}

// Thêm sự kiện cho button
// tham số 1 tên sự kiện
// NHớ khi click button thì chạy cho tôi hàm handleClick
buttonAdd.addEventListener('click', handleClick)

// yêu cầu: Thêm sự kiện click cho button
// Nghĩa là: Khi anh là người dùng trang web thì khi anh click button
// Thì hãy nói câu xin chào anh đức
