// Mảng chứa các thông tin về người dùng
const users = [
  { id: 1, name: 'Alice', age: 28, hobbies: ['reading', 'hiking'] },
  { id: 2, name: 'Bob', age: 35, hobbies: ['coding', 'gardening'] },
  { id: 3, name: 'Charlie', age: 22, hobbies: ['cooking', 'painting'] }
]

// Kiểm tra xem tất cả người dùng có sở thích 'reading' không
const allUsersReadBooks = users.every((user) => user.hobbies.includes('reading'))

console.log('Tất cả người dùng đều đọc sách:', allUsersReadBooks)

// Kiểm tra xem có ít nhất một người dùng có tuổi trên 30 không
const hasUserAbove30 = users.some((user) => user.age > 30)

console.log('Có người dùng nào có tuổi trên 30 không:', hasUserAbove30)

// Lọc ra những người dùng có sở thích 'gardening' và tạo một mảng mới chỉ chứa tên của họ
const gardeningUsers = users
  .filter((user) => user.hobbies.includes('gardening'))
  .map((user) => user.name)

console.log("Người dùng có sở thích là 'gardening':", gardeningUsers)
