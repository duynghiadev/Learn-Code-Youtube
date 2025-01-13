// function cr7() {
//   console.log('CR7')
// }

// process.nextTick(cr7)
// console.log('M10')

// ---------------------------------------

// function cr7() {
//   console.log('CR7')
// }

// setTimeout(cr7, 0)
// console.log('M10')

// ---------------------------------------

// dùng lệnh này để run code: Measure-Command {node index.js}
// for (let i = 0; i < 1024 * 1024; i++) {
//   setTimeout(() => {
//     Math.sqrt(i)
//   }, 0)
// }

// ---------------------------------------
// Sử dụng process.nextTick chạy nhanh hơn -> xem ở log TotalMilliseconds
// for (let i = 0; i < 1024 * 1024; i++) {
//   process.nextTick(() => {
//     Math.sqrt(i)
//   })
// }

// ---------------------------------------
// Sử dụng command node index.js
Promise.resolve().then(() => console.log('Promise'))
process.nextTick(() => console.log('nextTick()'))
