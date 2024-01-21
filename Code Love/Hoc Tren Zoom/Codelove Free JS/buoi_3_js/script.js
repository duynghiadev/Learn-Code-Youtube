// scope: phạm vi biến (dùng tử khóa var)
/**
 * 1. Scope của biến chính là nơi biến được khai báo (dùng từ khóa khai báo biến)
 *
 * 2. Khi log giá trị của biến hoặc sử dụng biến thì bạn phải xác định câu lệnh đó nằm ở scope nào và xem xét trong scope đấy có tồn tại biến đó không?
 *
 * 2.1 Nếu scope không có biến đấy thì nó có thể tìm lên cha, ông, cụ, xem có khai báo không, nếu có nó sẽ lấy giá trị của biến đấy trên cha, ông, cụ nó
 *
 * 3. Với từ khóa var khi nói đến scope thì nhớ nó là function scope
 */
console.log('hello scope')

var nameInfo
nameInfo = 'duynghiadev'
console.log('nameInfo:', nameInfo)

// sử dụng if
if (true) {
  var nameInfoInIf = 'name info in if'
}
console.log('nameInfoInIf:', nameInfoInIf)

// khai báo + khởi tạo value cho biến
var nameInfo1 = 'duynghiadev'
// update value biến
nameInfo1 = 'duynghiadev update'
console.log('nameInfo1:', nameInfo1)

// sử dụng if trong function
function changeNameFunction() {
  // scope function
  var nameInfoInFunction = 'name info in function'
  console.log('nameInfoInFunction:', nameInfoInFunction)
  console.log('nameInfo:', nameInfo)

  nameInfo = 'duynghiadev update new'
  console.log('nameInfo new:', nameInfo)
}
// console.log('nameInfoInFunction:', nameInfoInFunction) // error: nameInfoInFunction is not defined
changeNameFunction()
