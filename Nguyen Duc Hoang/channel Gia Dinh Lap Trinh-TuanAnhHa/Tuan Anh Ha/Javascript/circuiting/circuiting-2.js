/**
 * - Toán tử ||:
 * - Nó sẽ thực hiện kiểm tra tất cả điều kiện. Nếu có 1 điều kiện là false thì nó sẽ kiểm tra các điều kiện khác.
 * - Điểm khác biệt ở chỗ: trong điều kiện chỉ cần có duy nhất 1 điều kiện true thì nó sẽ trả về true
 */
// Quyền của người dùng
let isAdmin = false
let hasWriteAccess = true
let isPremiumUser = false

// Kiểm tra quyền truy cập vào tính năng cụ thể
if (isAdmin || hasWriteAccess || isPremiumUser) {
  console.log('Người dùng có quyền truy cập vào tính năng cụ thể.')
} else {
  console.log('Người dùng không có quyền truy cập vào tính năng cụ thể.')
}
