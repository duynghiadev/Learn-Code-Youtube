/**
 * - Khi khai báo function thì chúng ta có nhiều cách để khai báo
 * - function không có tham số, và function có tham số
 * - Trong function thì có thể console.log ra giá trị nào đó
 * - Cũng có những function có tham số thì function đó return về giá trị luôn, và sau khi gọi thực thi function đó mình truyền tham số vào là được
 */

function sayHello() {
  console.log('sayHello')
}
sayHello()

function printOut(name) {
  console.log('name:', name)
}
printOut('duynghiadev')
printOut('Ronaldo')
printOut('messi')

function intro(name, age) {
  console.log(`name: is ${name}, age: is ${age}`)
}
intro('duynghia', 21)

function addNumber(a, b) {
  return a + b
}
let total = addNumber(5, 4)
console.log('total function addNumber:', total)
console.log('addNumber(10, 9):', addNumber(10, 9))
