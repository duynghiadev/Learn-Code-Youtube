/**
 * - Trong bài này chúng ta học về Closure. Hãy tìm hiểu khái niệm closure là gì nhé?
 * + Closure là một khái niệm quan trọng trong JavaScript, và nó xuất hiện khi một hàm được khai báo trong phạm vi của một hàm khác và có thể truy cập các biến của hàm bên ngoài nó. Closure cho phép một hàm "ghi nhớ" và truy cập đến phạm vi của nó ngay cả khi nó được gọi ở nơi khác ngoài phạm vi khai báo.
 */

/**
 * Đây là cách viết thứ 1: Không dùng closure. Nếu như mà mình có 100 hàm, thì mình làm kiểu như này thì sẽ không ổn chút nào !!! ❌
 */
//const size12 = () => {
//  document.body.style.fontSize = '12px'
//}
//
//const size14 = () => {
//  document.body.style.fontSize = '14px'
//}
//
//const size16 = () => {
//  document.body.style.fontSize = '16px'
//}
//
//document.getElementById('size12').onclick = size12
//document.getElementById('size14').onclick = size14
//document.getElementById('size16').onclick = size16

/**
 * Đây là cách viết thứ 2: Đây là cách viết có sử dụng closure. Rất tiện lợi ✅
 */

const makeSize = (size) => {
  return () => {
    document.body.style.fontSize = size + 'px'
  }
}

const size12 = makeSize(12)
const size14 = makeSize(14)
const size16 = makeSize(16)

console.dir(size12)
console.dir(size14)
console.dir(size16)

document.getElementById('size12').onclick = size12
document.getElementById('size14').onclick = size14
document.getElementById('size16').onclick = size16
