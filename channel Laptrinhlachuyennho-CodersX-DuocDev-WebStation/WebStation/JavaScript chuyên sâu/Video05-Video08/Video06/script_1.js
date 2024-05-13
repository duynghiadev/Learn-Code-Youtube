/**
 * 1. Callback là gì?
 * 2. Tại sao cần callback, khi xử lý đồng bộ (synchronous) và bất đồng bộ (asynchronous)
 * 3. Các built-in callback của WebAPI, nodejs
 * 4. Convention khi viết callback
 */

function con() {
  console.log('đây là hàm con')
}

function chau() {
  console.log('đây là hàm cháu')
}

function cha() {
  con()
  console.log('đây là hàm cha')
  chau()
}
cha()

console.log('='.repeat(40))

function nhan(a, b) {
  return a * b
}

function chia(a, b) {
  return a / b
}

function cong(a, b) {
  return a + b
}

function tru(a, b) {
  return a - b
}
console.log(nhan(2, 4))
console.log(chia(2, 4))
console.log(cong(2, 4))
console.log(tru(2, 4))

console.log('='.repeat(40))

function nhan1(a, b) {
  return a * b
}

function chia1(a, b) {
  return a / b
}

function cong1(a, b) {
  return a + b
}

function tru1(a, b) {
  return a - b
}

function maytinh(x, y, callback) {
  return callback(x, y)
}

const nhanResult1 = maytinh(2, 4, nhan)
const nhanResult2 = maytinh(6, 4, nhan)
const chiaResult = maytinh(6, 6, chia)

const testing = maytinh(3, 3, function (thamso1, thamso2) {
  return thamso1 + thamso2 + thamso1
})

console.log(
  `nhan1: ${nhanResult1}, nhan2: ${nhanResult2}, chia: ${chiaResult}, testing: ${testing}`
)
