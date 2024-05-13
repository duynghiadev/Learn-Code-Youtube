/**
 * 1. Callback là gì?
 * 2. Tại sao cần callback, khi xử lý đồng bộ (synchronous) và bất đồng bộ (asynchronous)
 * 3. Các built-in callback của WebAPI, nodejs
 * 4. Convention khi viết callback
 */
console.log('start')

setTimeout(function () {
  console.log('this is asynchronous. Always run final')
}, 2000)

let ketQua = 0
for (let i = 0; i < 10; i++) {
  ketQua += ketQua + i
}
console.log('ketQua:', ketQua)

console.log('Dòng code cuối cùng')
