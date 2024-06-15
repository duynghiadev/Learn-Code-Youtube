function mot(callback) {
  callback()
}

function hai(cb) {
  cb()
}

function ba(thecallback) {
  thecallback()
}

function callback() {
  console.log('Đây là hàm callback')
}

mot(callback)
hai(callback)
ba(function () {
  console.log('Đây là cũng là hàm callback')
})
