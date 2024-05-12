// Higher Order Function phần 2:

/**
 * - closure và stateful function: tạo biến private trong hàm. Là hàm factory
 * - currying: một hàm nhiều tham số --> nhiều hàm một tham số (preload data)
 * - callback: thực thi hàm theo thứ tự synchronous khi chạy code asynchronous
 */

function a(x) {
  x++
  return function b() {
    console.log(++x)
  }
}

a(1)()
a(1)()
a(1)()

let x = a(1)
x()
x()
x()

// ========================================
console.log('='.repeat(40))
// ========================================

function c(x) {
  x++
  return function d() {
    x++
    return function e() {
      console.log(++x)
    }
  }
}
c(1)()()
c(1)()()
c(1)()()

// ========================================
console.log('='.repeat(40))
console.log('preload factory')
// ========================================

/**
 * preload factory
 */

function tinhtoan(x) {
  return function add(y) {
    console.log(x + y)
  }
}

const add10 = tinhtoan(10)
const add20 = tinhtoan(20)

add10(5)
add10(10)

add20(5)
add20(10)

// ========================================
console.log('='.repeat(40))
console.log('currying function')
// ========================================

/**
 * currying function
 */
function thunghiem(x, y, z) {
  console.log(x + y + z)
}
thunghiem(1, 2, 3)

function f(x) {
  return function g(y) {
    return function k(z) {
      console.log(x + y + z)
    }
  }
}
x(1, 2, 3)

// ========================================
console.log('='.repeat(40))
console.log('closure')
// ========================================

/**
 * closure
 */
function taikhoan(tiencuatoi) {
  let myMoney = tiencuatoi

  return {
    xem: function () {
      return `Bạn có ${myMoney} đô trong tài khoản`
    },
    nap: function (amount) {
      myMoney = myMoney + amount
    },
    rut: function (amount) {
      if (amount > myMoney) {
        return 'Hết tiền rồi bồ tèo'
      }
      myMoney = myMoney - amount
      return `Bạn đã rút ${amount} đô từ tài khoản`
    }
  }
}

const nghia = taikhoan(10)

console.log('nghia.xem():', nghia.xem())
console.log(`nghia.rut(5): ${nghia.rut(5)}`)
console.log(`nghia.rut(5): ${nghia.rut(10)}`)
console.log('nghia.xem():', nghia.xem())

// ========================================
console.log('='.repeat(40))
console.log('callback')
// ========================================

/**
 * callback
 */
function first(callback) {
  console.log('Calling callback before setTimeout 👇')
  callback() // Call the callback function before setTimeout
  setTimeout(() => {
    console.log('Inside setTimeout callback 👉', 1)
    callback() // Call the callback function inside setTimeout
  }, 1000)
}

function second() {
  console.log('Executing second function', 2)
}

first(second)
