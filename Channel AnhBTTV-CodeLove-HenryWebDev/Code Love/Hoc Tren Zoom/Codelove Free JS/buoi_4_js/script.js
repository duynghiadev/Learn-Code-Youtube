// Buổi 4: Hôm nay học scope test (kiểm tra kiến thức về scope) --> 28/1/2024

// ====================================================

var x = 10 // global variable

function changeValue() {
  /**
   * - Nếu như ta không khai báo x trong function này thì x trong function sẽ tìm ra bên ngoài
   * - Nếu như ta comments dòng var x = 10 lại thì ta sẽ có kết quả khác
   */
  var x = 10 // create variable
  x = 50 // update variable
}
changeValue()

x = x + 10 // update global variable
console.log('x:', x)

var x1 = 10
function changeValue1() {
  var x1 = 20
  function changeValueNested() {
    x1 = 50
  }
  changeValueNested()
}
changeValue1()

x1 = x1 + 10
console.log('x1:', x1)

// ====================================================

// Sự khác biệt giữa let, var, const

var a = 10
let b = 10

if (true) {
  var a = 20
  let b = 20
}
a = a + 10
b = b + 10
console.log('a:', a)
console.log('b:', b)

// ====================================================

console.log('c:', c)
var c = 10

function changeValue2() {
  if (false) {
    var d = 10
  }
  console.log('d:', d)
}
changeValue2()
