/**
 * Dùng phương pháp tham trị:
 * - nó không liên quan đến các tác vụ chạy trong hàm
 * - trong hàm dù có thay đổi như thế nào thì khi thực thi hàm thì nó chỉ quan tâm đến các giá trị bên ngoài thôi. Bên ngoài truyền cái gì thì khi thực thi hàm -> thì hàm nhận cái đó
 */
function PassByvalue(a, b) {
  let tmp
  tmp = b
  b = a
  a = tmp
}

let a = 1
let b = 2

PassByvalue(a, b)
console.log(a, b)

/**
 * Dùng phương pháp tham chiếu:
 * - Khi dùng phương pháp này thì các thuộc tính trong object sẽ bị thay đổi theo
 * - Khi có những gì thay đổi ở bên trong hàm thì nó đều liên quan đến object mà hàm đang gọi đến
 * - Nếu trong hàm có thay đổi giá trị hoặc giá trị kia thì khi thực thi hàm -> thì các giá trị trong object sẽ thay đổi luôn
 */
// Định nghĩa hàm PassByReference nhận một đối tượng làm tham số
function PassByReference(obj) {
  let tmp = obj.b1 // 2
  obj.b1 = obj.a1 // 1
  obj.a1 = tmp // 2
}

// Khai báo một đối tượng chứa giá trị a và b
let values = { a1: 1, b1: 2 }

// Gọi hàm PassByReference và truyền đối tượng làm tham số
PassByReference(values)

// In ra giá trị của a và b sau khi hàm PassByReference được gọi
console.log(values.a1, values.b1)
