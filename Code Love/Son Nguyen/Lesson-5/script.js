var a = 1
var b = 0
if (a > 2 || b > -1) {
  console.log('chinh xac')
} else {
  console.log('sai roi men')
}

var t = prompt('Nhập tên của bạn:', '')
if (t === 'admin') {
  alert('chào mừng' + ' ' + t)
} else {
  alert('Bạn nhập sai username, vui lòng nhập lại')
  var tag = prompt('Nhập tên của bạn:', '')
}
