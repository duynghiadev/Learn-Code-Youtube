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

/**
 * By Value vs By Reference Trong Javascript | Justin Nguyen🚀
 */
/**
 * - Ở trong bài này thì chúng ta cùng tìm hiểu về Static types, Dynamic types, Primitive types (kiểu nguyên thủy), Object
 * - By value và By references
 *
 * - Tất cả các kiểu primitive type đều là tham trị (pass by value)
 * - Còn tất cả các kiểu mà mình khai báo kiểu object thì đều là tham chiếu (pass by reference)
 *
 * - Primitive type: được gán theo giá trị
 * - Object type: được gán theo vùng nhớ
 */
var num = 10
var str = 'Duy Nghia Dev'
str = 'Ku Nhi' // chúng ta có thể thay đổi giá trị của biến đã khai báo trước đó rồi

var num1 = num
num = 100
console.log('num1:', num1)
console.log('num:', num)
console.log('---------------------------------------')

var obj = { str: 'hello duynghiadev' }
var objRef = obj
obj.str = 'Updated str'
console.log('objRef:', objRef)
hello_1(obj) // Khi chạy đến dòng này thì params trong obj.str đã thay đổi thành rồi, vì tham số mình truyền vào và biến obj có chung 1 vùng nhớ
console.log('obj:', obj) // Khi log ra thì obj sẽ nhận giá trị mới trong hàm hello_1
console.log('obj.str:', obj.str)
console.log('---------------------------------------')

function hello_1(object) {
  object.str = 'Inline function'
}

/**
 * Tại Sao 2 + 2 = 22 Trong Javascript | Justin Nguyen🚀
 */
/**
 * - Coercion, Precedence, Associativity
 * - Comparision table, Booleans in Existence
 *
 * - Lưu ý: Không có giá trị là null hoặc undefined
 */
var num3 = 2
var num4 = '2'
var num5 = 0
var totalNum = num3 + num4
console.log('totalNum:', totalNum)
console.log('typeof totalNum:', typeof totalNum)
console.log('---------------------------------------')

if (num3 == num4) {
  console.log('Bằng nhau')
} else {
  console.log('Không bằng nhau')
}
console.log('---------------------------------------')

if (num3 === num4) {
  console.log('Bằng nhau')
} else {
  console.log('Không bằng nhau')
}
console.log('---------------------------------------')

if (num5) {
  console.log(`Có giá trị, num5 là ${num5}`)
} else {
  console.log(`Không có giá trị, num5 là ${num5}`)
}
console.log('---------------------------------------')

if (num5 || num5 === 0) {
  console.log(`Có giá trị, num5 là ${num5}`)
} else {
  console.log(`Không có giá trị, num5 là ${num5}`)
}
console.log('---------------------------------------')

/**
 * CLOSURE Trong Javascript Là Gì🚀
 */
/**
 * JavaScript Closure (Lexical -> Closure, Factory method)
 *
 * Đây là ví dụ 1👍
 */
var say = 'Hello Ku Nhi Dev'
function hello_2() {
  var say = 'Hello DuyNghiaDev in function hello_2'
  function sayHello() {
    console.log('say in function hello_2:', say)
  }
  sayHello()
}
hello_2()
console.log('---------------------------------------')

// Đây là ví dụ 2👍
function hello_3() {
  var say = 'Hello DuyNghiaDev in function hello_3' // outer
  function sayHello_1(name) {
    console.log(`say in function hello_3: ${say} ${name}`) // local
  }
  return sayHello_1
}
const callSayHello = hello_3()
callSayHello('Justin')
console.log('callSayHelo:', callSayHello)
console.log('---------------------------------------')

// Đây là ví dụ 3👍
function hello_4(say) {
  function sayHello(name) {
    console.log(`${say} ${name}`)
  }
  return sayHello
}
const sayEn = hello_4('Hello')
const sayVn = hello_4('Xin chào')
sayEn('Justin')
sayVn('Duy Nghĩa')
console.log('---------------------------------------')

// Đây là ví dụ 4👍
/**
 * - Nếu như ta làm cách này thì sẽ sai quy tắc closure
 * - Khi ta lấy phần tử đầu tiên của callSays thì nó có giá trị là 5, và cứ thế khi ta gọi tất cả phần tử trong đó thì nó cũng có giá trị là 5
 *
 * - Tại sao lại vậy? Ta sẽ sửa khai báo biến từ var thành let. Và sửa function bình thường thành arrow function
 *  - Vì var scope là function cho nên nó sẽ được cập nhật theo vòng lặp, còn let scope là block (vòng lặp) cho nên mỗi lần lặp là có cái value riêng của nó
 *  - Vì mỗi khi let lặp qua thì mỗi phần tử của nó đều có giá trị riêng và không bị ghi đè
 *  - Còn var thì khi lặp qua, nó có giá trị và lần lặp tiếp theo thì nó bị ghi đè. Cho nên khi lặp qua thì nó có 1 giá trị thôi
 *
 *  - giải pháp bài này nằm ở ví dụ 5✅
 */
function hello_5() {
  var says = []
  for (var index = 0; index < 5; index++) {
    says.push(function () {
      console.log('index:', index)
    })
  }
  return says
}
const callSays = hello_5()
console.log('callSays:', callSays)
callSays[0]()
callSays[1]()
callSays[2]()
callSays[3]()
callSays[4]()
console.log('---------------------------------------')

// Đây là ví dụ 5👍
function hello_6() {
  var says = []
  for (let index = 0; index < 5; index++) {
    says.push(() => {
      console.log('index:', index)
    })
  }
  return says
}
const callSays_1 = hello_6()
console.log('callSays_1:', callSays_1)
callSays_1[0]()
callSays_1[1]()
callSays_1[2]()
callSays_1[3]()
callSays_1[4]()
console.log('---------------------------------------')

/**
 * Hàm Bind vs Call vs Apply Trong Javascript | Justin Nguyen 🚀
 */
/**
 * - Trong bài này chúng ta học về JavaScript bind, call and apply
 * - Dưới đây là ví dụ về gọi hàm và truyền tham số theo cách bình thường ✅
 */
function multiply(a, b) {
  return a * b
}
const multiplyByTwo = (a) => multiply(2, a)
const multiplyByTen = (a) => multiply(10, a)
console.log(multiplyByTwo(2))
console.log(multiplyByTen(10))
console.log('---------------------------------------')

// Dưới đây chúng ta gọi hàm và truyền tham số theo cách dùng method bind()✅
function multiply_1(a, b) {
  return a * b
}
const multiplyByTwo_1 = multiply_1.bind(this, 2)
const multiplyByTen_1 = multiply_1.bind(this, 10)
console.log('Dưới đây là kết quả mình sử dụng method bind()')
console.log(multiplyByTwo_1(2))
console.log(multiplyByTen_1(10))
console.log('---------------------------------------')

// Ví dụ 3✅
const vanhein = {
  weapon: 'Phi Tiêu',
  attack() {
    console.log('this in function vanhein:', this)
    console.log('Attacked by:', this.weapon)
  }
}
vanhein.attack()

const yorn = {
  weapon: 'Bow',
  attack() {
    console.log('this in function yorn:', this)
    console.log('Attacked by:', this.weapon)
  }
}
yorn.attack()
console.log('---------------------------------------')

/**
 * - Khi chúng ta sử dụng hàm bind thì trong hàm yorn chúng ta không cần khai báo hàm attack. Mà thay vào đó chúng ta mượn hàm attack đó hàm vanhein, và gọi hàm đó trong hàm yorn.
 * - Dùng hàm bind trong đó có nghĩa là chúng ta đang copy hàm yorn_1 trong hàm attack ở trong hàm hàm vanhein. Kết quả thì đúng y chang
 *
 * - Dòng vanhein.attack.bind(yorn_1)() có ý nghĩa là:❌❌❌
 *  - Chúng ta bind hàm yorn_1 vào trong hàm vanhein
 *  - Tiếp theo đó khi nó chạy đến dòng log có this thì nó sẽ log ra các thuộc tính trong hàm yorn_1. Nó sẽ in ra {weapon: 'Bow'}
 *  - Và trong dòng log tiếp theo có từ this.weapon, thì nó sẽ in ra => Attacked by: Bow
 *
 * - Kiến thức này hơi khó hiểu, các bạn có thể search google để xem thêm cho hiểu
 */
const yorn_1 = {
  weapon: 'Bow'
}
console.log('Dưới đây chúng ta sử dụng method bind')
vanhein.attack()
vanhein.attack.bind(yorn_1)()
console.log('---------------------------------------')

/**
 * - Method call có nghĩa là chúng ta mượn hàm vanhein, nhưng chúng ta gọi nó trong cái context (ngữ cảnh) là hàm yorn_1 này, thì cái this nó vẫn y chang khi ta sử dụng method bind vậy thôi
 *
 * - Method apply thì cũng như vậy, nhưng có điều là nó khác 1 chút so với phương thức call
 *  - Nó khác ở chỗ từ tham số thứ 2 trở đi. Thay vì mình truyền từng tham số riêng lẻ -> call(yorn_1, 1, 2, 3). Thì so với hàm apply thì chúng ta không truyền như vậy nữa, mà phải truyền vào hàm apply một mảng các tham số
 *  - Thì cái call và apply nó chỉ khác nhau như vậy mà thôi
 *
 * - Chú ý:❌❌❌
 *  - Khi chúng ta sử dụng bind thì phải thêm dấu ngoặc để thực thi hàm
 *  - Còn chúng ta sử dụng call thì không cần phải thêm dấu ngoặc
 */
console.log('Dưới đây chúng ta sử dụng method call')
vanhein.attack()
vanhein.attack.call(yorn_1)
console.log('---------------------------------------')

console.log('Dưới đây chúng ta sử dụng method apply')
vanhein.attack()
vanhein.attack.apply(yorn_1)
console.log('---------------------------------------')

// Tiếp nối ví dụ trước, nhưng mình tách ra cho dễ hình dung✅
const vanhein_1 = {
  weapon: 'Phi Tiêu',
  attack(skill) {
    if (skill) {
      console.log('this in function vanhein:', this)
      console.log('Skill Attacked by:', this.weapon)
    } else {
      console.log('Attacked by:', this.weapon)
    }
  }
}
vanhein_1.attack()
console.log('Dưới đây chúng ta sử dụng method call và có tham số thứ 2')
vanhein_1.attack.call(yorn_1, true)
console.log('---------------------------------------')

vanhein_1.attack()
console.log('Dưới đây chúng ta sử dụng method apply và có tham số thứ 2')
vanhein_1.attack.apply(yorn_1, [true])
console.log('---------------------------------------')

console.log(
  'Vẫn gọi method apply như thế, nhưng chúng ta biến tấu 1 xíu, đặt tham số thứ 2 ra thành 1 biến'
)
vanhein_1.attack()
const params = [true]
vanhein_1.attack.apply(yorn_1, params)
console.log('---------------------------------------')

console.log(
  'Vẫn gọi method call như thế, nhưng chúng ta biến tấu 1 xíu, đặt tham số thứ 2 ra thành 1 biến. Nếu khi ta dùng method call thì ta phải sử dụng toán tử spread (ES6), thì nó sẽ chuyển cái mảng này những tham số riêng lẻ'
)
const params_1 = [true]
vanhein_1.attack()
vanhein_1.attack.call(yorn_1, ...params_1)
console.log('---------------------------------------')
