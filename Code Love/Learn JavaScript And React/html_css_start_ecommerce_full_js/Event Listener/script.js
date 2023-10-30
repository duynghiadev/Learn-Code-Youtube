// 1. Có thể sử dụng inline

// 2. Có thể sử dụng dưới dạng set lại thuộc tính của object bằng function
const btn = document.querySelector('.btn')
btn.onclick = function () {
  console.log(1)
}

btn.onclick = function () {
  console.log(2)
}
// => Nó bị ghi đè

// 3. addEventListener
btn.addEventListener('click', function () {
  console.log('addEventListener 1')
})

btn.addEventListener('click', function () {
  console.log('addEventListener 2')
})

// Những điểm khác nhau giữa fresher và senior: hầu hết họ sẽ nghĩ nhiều -> sau đó họ tách các hàm ra gồm có những thành phần gì -> và sau đó họ research trên mạng và đọc rất nhiều tài liệu khác nhau -> và tìm ra các cách giải pháp khác nhau
