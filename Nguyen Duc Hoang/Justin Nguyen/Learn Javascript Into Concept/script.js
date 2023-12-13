/**
 * Syntax parser, Lexical Enviroment, Execution Context (Creation/Hoisting, Run Phases)
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
 * Javascript Execution Stack, Invocation và Variable Environment | Justin Nguyen
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
