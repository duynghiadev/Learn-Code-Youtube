let img =
  'https://images.unsplash.com/photo-1701894160394-58d5be1605b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8'

let image = document.querySelector('.image')
console.log('image:', image)

/**
 * - Thay đổi thuộc tính có sẳn
 * - Trong javascript có 2 kiểu thiết lập:
 *  + GET: lấy dữ liệu, lấy thông tin
 *  + SET: Thiết lập dữ liệu mới, thiết lập thông tin mới
 */

// SET ✅✅✅
image.setAttribute('src', img)
image.setAttribute('alt', 'This is a image')
image.setAttribute('width', '300')
image.setAttribute('title', 'Duy Nghia Dev')

// GET ✅✅✅
let elDataTitle = document.querySelectorAll('[data-title]')
console.log('elDataTitle:', elDataTitle)

let elDataTitleArray = Array.from(document.querySelectorAll('[data-title]'))
console.log('elDataTitleArray:', elDataTitleArray)

for (let index = 0; index < elDataTitleArray.length; index++) {
  console.log('elDataTitleArray[index]:', elDataTitleArray[index])
  console.log(
    "elDataTitleArray[index].getAttribute('data-title'):",
    elDataTitleArray[index].getAttribute('data-title')
  )
}

// Dạng này là nối chuỗi => để thêm giá trị vào property ✅✅✅
let temp = ''
for (let index = 0; index < elDataTitleArray.length; index++) {
  temp = temp + elDataTitleArray[index].getAttribute('data-title') + ' '
}
console.log('temp:', temp) // Bị dư 1 khoảng trắng ở cuối cùng

// Khi set giá trị data-title mới cho #demo => thì phải dùng method trim()
let trimElement = document.querySelector('#demo')
trimElement.setAttribute('data-title', temp.trim())
console.log('trimElement:', trimElement)

// Bonus 🚀🚀🚀
// 2 cách này tương đương nhau 👍👍👍
console.log('truy xuất thuộc tính cách 2:', image.src)
console.log('truy xuất thuộc tính cách 2:', image.getAttribute('src'))
