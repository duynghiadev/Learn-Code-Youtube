/**
 * - Truy xuất phần tử bằng selector của CSS
 * - Yêu cầu: phải nắm rõ phần Selector của CSS: #demo {}, .classDemo {}, Attribute Selector
 *
 * - Có thể sử dụng cách này để thay thế cho việc truy xuất trong file script.js
 *  + getElementById
 *  + getElementsByClassName
 *  + getElementsByTagName
 *
 *  + querySelector("demo") -> Trả về cho mình một phần tử đầu tiên tìm thấy được mà match với selector
 *  + querySelectorAll(".demo") -> Trả về cho mình nhiều phần tử match với selector truyền vào -> không phải là array. Muốn ép kiểu về array thì dùng Array.from()
 */

let demoId = document.querySelector('#demo')
console.log('demoId:', demoId)

let demoClass_See_One = document.querySelector('.demo')
console.log('demoClass_See_One:', demoClass_See_One) // Trả về class .demo đầu tiên nó tìm thấy thôi

let demoClass = document.querySelectorAll('.demo')
console.log('demoClass:', demoClass)
console.log('Array.from(demoClass):', Array.from(demoClass))
console.log('Array.from(demoClass).push(123):', Array.from(demoClass).push(123))

let demoClassArray = Array.from(demoClass)
console.log('demoClassArray:', demoClassArray)
console.log('demoClassArray.push(456):', demoClassArray.push(456))
console.log('demoClassArray:', demoClassArray)

let btnModal = document.querySelector("body [data-toggle='modal']")
console.log('btnModal:', btnModal)
