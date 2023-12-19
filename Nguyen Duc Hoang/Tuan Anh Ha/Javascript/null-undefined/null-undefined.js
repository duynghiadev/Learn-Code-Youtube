/**
 * null && undefined JavaScript
 *
 * - undefined: có nghĩa là chúng ta khai báo cho nó 1 cái biến, nhưng mà chúng ta không gán cho nó giá trị nào cả
 * - null: có nghĩa là chúng ta chủ động trả về giá trị 0 và được gán kết quả là null -> có nghĩa là không mang lại kết quả gì cả
 */

let name
console.log('name:', name)
name = 'Jon'
console.log('name:', name)

let result = null
console.log('result:', result)

console.log('typeof null:', typeof null)
console.log('typeof undefined:', typeof undefined)

let greet = (param) => {
  console.log('param:', param)
}
greet('Hello')
greet()
greet(null)

let greet_1 = (param_1 = 'Hi') => {
  console.log('param_1:', param_1)
}
greet_1()
greet_1('Good morning!!!')
