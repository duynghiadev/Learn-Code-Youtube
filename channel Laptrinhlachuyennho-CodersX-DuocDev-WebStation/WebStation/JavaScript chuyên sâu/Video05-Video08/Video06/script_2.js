/**
 * 1. Callback là gì?
 * 2. Tại sao cần callback, khi xử lý đồng bộ (synchronous) và bất đồng bộ (asynchronous)
 * 3. Các built-in callback của WebAPI, nodejs
 * 4. Convention khi viết callback
 */

const conso = [1, 2, 3, 4]

conso.forEach(function (each) {
  console.log('each:', each)
})

function big(number) {
  return number > 2
}

function small(number) {
  return number <= 2
}

const soBig = conso.filter(big)
const soSmall = conso.filter(small)

console.log('soBig:', soBig)
console.log('soSmall:', soSmall)

console.log('='.repeat(40))

const lonhon1 = conso.filter(function (each) {
  return each > 1
})

const lonhonhoacbang1 = conso.filter(function (each) {
  return each >= 1
})
console.log('lớn hơn 1:', lonhon1)
console.log('lớn hơn hoặc bằng 1:', lonhonhoacbang1)
