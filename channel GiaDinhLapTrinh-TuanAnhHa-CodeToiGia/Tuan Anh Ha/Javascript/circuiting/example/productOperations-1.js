/**
 * Dưới đây là một ví dụ sử dụng nhiều array method và toán tử logic &&, || để thực hiện các thao tác trên một mảng dữ liệu:

Giả sử bạn có một danh sách người dùng và bạn muốn lọc ra những người dùng có tuổi từ 18 đến 30 và có giới tính là nữ hoặc là người dùng premium.
 */

/**
 * Trong ví dụ này:

.filter() được sử dụng để lọc các người dùng dựa trên một điều kiện.
&& được sử dụng để kết hợp điều kiện về tuổi (age) sao cho người dùng phải có tuổi từ 18 đến 30.
|| được sử dụng để kết hợp điều kiện về giới tính (gender) hoặc việc là người dùng premium (isPremium).
Kết quả là filteredUsers sẽ chứa danh sách các người dùng thỏa mãn các điều kiện đã nêu trên. Trong ví dụ này, Alice và Charlie là những người dùng thỏa mãn điều kiện.
 */
const users = [
  { name: 'Alice', age: 25, gender: 'female', isPremium: true },
  { name: 'Bob', age: 22, gender: 'male', isPremium: false },
  { name: 'Charlie', age: 30, gender: 'female', isPremium: true },
  { name: 'David', age: 19, gender: 'male', isPremium: true },
  { name: 'Eva', age: 28, gender: 'female', isPremium: false }
]

// Lọc người dùng theo điều kiện
const filteredUsers = users.filter(
  (user) =>
    user.age >= 18 && user.age <= 30 && (user.gender === 'female' || user.isPremium === true)
)

console.log(filteredUsers)
