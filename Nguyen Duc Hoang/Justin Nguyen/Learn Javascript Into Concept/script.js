// Kí hiệu 🚀: có nghĩa là bài học mới. Mỗi bài học mới, mình sẽ để icon tên lửa (🚀)
/**
 * Syntax parser, Lexical Enviroment, Execution Context (Creation/Hoisting, Run Phases)🚀
 */
console.log('i before:', i)
var i = 10

function hello(params) {
  console.log('Duynghiadev is here', params)
}
hello(i)
console.log('i after:', i)
console.log('---------------------------------------')

/**
 * Javascript Execution Stack, Invocation và Variable Environment | Justin Nguyen🚀
 * Trong bài này chúng ta cùng tìm hiểu về:
 * - Single thread (synchronous), Innocation and Execution stack
 */
/**
 * Đây là ví dụ 1
 */
function a() {
  b()
}
function b() {
  c()
}
function c() {
  console.log('called C')
}
a()
console.log('done function a')
console.log('---------------------------------------')

/**
 * Đây là ví dụ 2
 */
let name = ' John'

function first() {
  let a = 'Hello'
  second()
  let x = a + name
  console.log('x:', x)
}
function second() {
  let b = 'Hi'
  third()
  let z_1 = b + name
  console.log('z_1:', z_1)
}
function third() {
  let c = 'Hey!'
  let z_2 = c + name
  console.log('z_2:', z_2)
}
first()
console.log('---------------------------------------')

/**
 * Đây là ví dụ 3
 */
var i_1 = 10
function a_1() {
  var i_1 = 100
  b_1()
  console.log(`a_1 ${i_1}`)
}
function b_1() {
  var i_1 = 1000
  c_1()
  console.log(`b_1 ${i_1}`)
}
function c_1() {
  /**
   * - Nếu như mình không khai báo biến a_1 thì nó sẽ chạy ra ngoài và lấy biến a_1 ở ngoài enviroment
   * - Đây được gọi là Variable Environment
   * - Đó là kiểu khi chúng ta khai báo biến với var. Còn khi chúng ta khai báo với biến let thì sẽ nó vẫn sẽ như vậy thôi (vẫn giống biến var)
   */
  // var i_1 = 1
  console.log(`called C ${i_1}`)
}
a_1()
console.log('done function a_1')
console.log('---------------------------------------')

/**
 * Scope Chain và Block Scope Trong Javascript | Justin Nguyen🚀
 */
/**
 * Trong bài này mình học về scope chain
 */
// Đây là ví dụ 1 👍
function foo() {
  var someVar = 100
  bar()
}
function bar() {
  var someVar = 1000
  console.log(`called bar: ${someVar}`)
}
var someVar = 10
foo()
console.log('done function foo')
console.log('---------------------------------------')

// Đây là ví dụ 2 👍
function foo_1() {
  function bar_1() {
    // var someVar_1 = 1000
    console.log(`called bar_1: ${someVar_1}`)
  }
  var someVar_1 = 100
  bar_1()
}
var someVar_1 = 10
foo_1()
console.log('done function foo_1')
console.log('---------------------------------------')

// Đây là ví dụ 3 👍
/**
 * - Tất cả các ví dụ ở trên là mình dùng biến var. Biến var được hiểu nôm na là global scope hoặc là function scope. Nên biến var rất ít người dùng. Hầu như là họ không dùng nữa mà chuyển qua dùng let, const
 * - let, const là ES6 (ES2015) thì nó có hỗ trợ block scope
 * - block scope là gì? Thì nó có nghĩa là các dòng code nằm trong dấu ngoặc nhọn {}. Đó là block scope. Ví dụ như các dòng code nằm trong if else, forEach, for,...Mỗi cái block như này thì nó sẽ tạo ra cho mình cái scope riêng
 * - Các biến nằm trong block đó thì biến đó chỉ tồn tại trong scope đó thôi. Nó không ảnh hưởng gì, và cũng không liên quan đến các biến bên ngoài
 */
function foo_2() {
  function bar_2() {
    let someVar_2 = 1000 // Nếu comment dòng này lại thì nó sẽ tìm ra bên ngoài và in ra giá trị đó
    console.log(`called bar_2: ${someVar_2}`)
  }
  let someVar_2 = 100
  bar_2()
}
let someVar_2 = 10
foo_2()
console.log('done function foo_2')
console.log('---------------------------------------')
