// hoisting

console.log(a)
var a = 'duynghiadev'

// Khai báo biến var như này là nó dính vào trường hợp hoisting. Vì nó tìm đến scope của block cao nhất chứ không thể tìm biến ở ngoài scope
var nameInfor = 'global scope'
function inner() {
  if (false) {
    var nameInfor = 'scope in if'
    // hàm này thực ra nó như này nè 👇
    // 1. var nameInfor => đưa lên đầu scope => đó là đưa lên scope cao nhất => đó là scope ở function inner
    // 2. nameInfor = 'scope in if'
  }
  console.log('nameInfor', nameInfor)
}
inner()

// Khai báo biến let thì sẽ tốt hơn. Nếu biến đó trong scope không có thì nó sẽ tìm ra bên ngoài scope => Đến khi có giá trị thì nó sẽ trả về. Nên dùng biến let thay vì dùng biến var
let nameInfor1 = 'global scope'
function inner1() {
  if (false) {
    let nameInfor1 = 'scope in if'
  }
  console.log('nameInfor1', nameInfor1) // nó tìm biến bên trong không có thì nó tìm biến bên ngoài
}
inner1()
