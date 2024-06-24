/**
 * - Toán tử &&:
 * - Nó sẽ thực hiện kiểm tra tất cả điều kiện. Nếu có 1 điều kiện là false thì nó sẽ trả về false ngay lập tức. Nếu điều kiện là true thì nó kiểm tra điều kiện tiếp theo (nếu có).
 * - Tóm lại: khi sử dụng toán tử && thì bắt buộc các điều kiện phải true hết, nếu có cái false là nó sẽ trả về false luôn
 */
// Điều kiện kiểm tra người dùng
let usernameValid = true
let passwordValid = false
let accountActive = true

// Kiểm tra điều kiện đăng nhập
if (usernameValid && passwordValid && accountActive) {
  console.log('Người dùng đủ điều kiện để đăng nhập.')
} else {
  console.log('Người dùng không đủ điều kiện để đăng nhập.')
}
