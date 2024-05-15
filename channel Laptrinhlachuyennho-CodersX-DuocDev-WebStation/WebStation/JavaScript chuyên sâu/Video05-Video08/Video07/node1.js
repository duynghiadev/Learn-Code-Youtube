// 1. sync and async

const start = Date.now()

function thoiGian(bandau) {
  return Date.now() - bandau
}

setTimeout(() => {
  const lag = thoiGian(start)
  console.log(`Timer:\tsetTimeout thứ nhất - 0 giây:\tThời gian chạy:\t${lag} ms`)
}, 0)

setTimeout(() => {
  const lag = thoiGian(start)
  console.log(`Timer:\tsetTimeout thứ hai - 0 giây:\tThời gian chạy:\t${lag} ms`)
}, 0)

setImmediate(function () {
  const lag = thoiGian(start)
  console.log(`Check:\tsetImmediate:\tThời gian chạy:\t${lag} ms`)
})
