/**
 * - Thay đổi class (Thêm và Xóa)
 * - Thay đổi attribute (Sửa)
 * - Thêm mới một attribute cho một phần tử
 * - Bắt được sự kiện click chuột của người dùng
 * - Thêm một phần tử gắn vào trong cấu trúc HTML
 *
 * => Làm hiệu ứng động cho phần tử đó
 *
 * - Phải xác định được mình áp dụng công việc trên cho phần tử nào? => Nói nôm na là giống như viết CSS vậy đó (xác định được phần tử => và sau đó viết)
 *
 * 1. Học cách truy xuất phần tử bằng javascript
 * - Truy xuất bằng id của phần tử => Trả về HTMLElement => Một phần tử HTML
 * - Truy xuất bằng class của phần tử => Trả về HTMLCollectionOf => Tập hợp nhiều phần tử HTML
 *  + Lưu ý: HTMLCollectionOf không phải là Array. Nó chỉ gần giống 1 dạng Array. Nó có length => Vì thế nó có thể truy xuất vào phần tử bằng index
 *  + Nếu muốn sử dụng những method, những function dành riêng cho array thì mình phải "ép kiểu" nó về array
 *  => Dùng cú pháp: Array.from(HTMLCollectionOf)
 *
 * - Truy xuất bằng tên thẻ a, body,...
 * - Truy xuất bằng selector của CSS
 */

let demoId = document.getElementById('demo')
console.log('demoId', demoId)

let arrNumber = [1, 2, 3, 4, 5]
let demoClass = document.getElementsByClassName('demo')
// console.log(demoClass.push(6)) // Error ❌❌❌
console.log('demoClass:', demoClass)
console.log('Array.from(demoClass):', Array.from(demoClass)) // ✅✅✅

let demoClassArray = Array.from(demoClass) // ✅✅✅
demoClassArray.push('123')
console.log('demoClassArray:', demoClassArray)

arrNumber.push(6)
console.log('arrNumber:', arrNumber)

console.log('demoClass:', demoClass)
console.log('demoClass[0]:', demoClass[0])
console.log('demoClass[1]:', demoClass[1])
console.log('demoClass[2]:', demoClass[2])
console.log('demoClass.length:', demoClass.length)

let div = document.getElementsByTagName('div')
console.log('div:', div)

let h1 = document.getElementsByTagName('h1')
console.log('h1:', h1)
