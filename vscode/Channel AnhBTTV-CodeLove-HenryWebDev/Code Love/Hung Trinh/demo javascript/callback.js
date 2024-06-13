// callback
// đồng bộ và bất đồng bộ

// example: Hoàng về lấy tiền => Nam mua đồ

// Đồng bộ (Sync)
function program1() {
  console.log('Lấy tiền')
}

function program2() {
  console.log('Mua đồ')
}

program1()
program2()

// Bất đồng bộ (Async)
function program3() {
  setTimeout(() => {
    console.log('Take money')
  }, 2000)
}

function program4() {
  console.log('Buy item')
}
program3()
program4()

// Cách xử lý bất đồng bộ về đồng bộ (Async => Sync) => Sử dụng callback

function program5(callback) {
  setTimeout(() => {
    console.log('program 5')
    callback()
  }, 20000)
}

function program6() {
  console.log('program 6')
}

program1(program6)

// Những callback trong JavaScript mà hầu hết khi code JS mà mọi người không để ý: setTimeout, setInterval, map,...

// Ví dụ của map: example.map(function(){})
