// Define trong global
function outerGlobal() {
  /**
   * - Khi excute hàm outerGlobal thì trong này nó chạy tới câu lệnh này => thì nó sẽ move ra bên ngoài tìm hàm này và nó sẽ thực thi hàm đó
   * - Do ta gọi hàm outerGlobal ở vị trí global
   */
  anotherOuterGlobal()
}
function anotherOuterGlobal() {
  console.log('anotherOuterGlobal')
}
// Thằng này excute trong global
outerGlobal()

/**
 * - Trong trường hợp này thì ta thực thi hàm test ở vị trí global
 * - Nếu ta khai báo như này thì khi excute thì nó sẽ chạy vào mainIn
 * - Vì khi nó thực thi thì nó sẽ xem scope nào. Và khi nó thực thi hàm test thì nó sẽ thấy hàm mainIn => sau đó nó sẽ log ra code trong hàm mainIn luôn và nó không cần tìm ra hàm mainOut ở ngoài nữa
 * - Nếu trong hàm test không có hàm mainIn nhưng nó vẫn thực thi hàm mainIn thì nó sẽ tìm ra bên ngoài
 * - Mà khi tìm ra bên ngoài nhưng nó vẫn không có hàm đó nữa => thì nó sẽ bị lỗi
 */
function test() {
  function mainIn() {
    console.log('main inner')
  }
  mainIn()
}
function mainIn() {
  console.log('main outner')
}
test()
