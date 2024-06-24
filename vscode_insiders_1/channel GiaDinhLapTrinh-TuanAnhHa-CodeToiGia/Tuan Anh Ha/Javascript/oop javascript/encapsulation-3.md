## File này giải thích code trong bài encapsulation-3.js

- Trong một dự án thực tế, encapsulation thường được sử dụng để bảo vệ và quản lý dữ liệu, đồng thời cung cấp một giao diện dễ sử dụng cho các thành phần khác của hệ thống. Dưới đây là một ví dụ về encapsulation trong một dự án quản lý người dùng sử dụng JavaScript:

```js
// Module User trong một ứng dụng quản lý người dùng

// Private data
let users = []

// Private function to generate user ID
function generateUserID() {
  return Math.floor(Math.random() * 1000)
}

// Public interface (encapsulated)
const UserModule = {
  // Public method to add a new user
  addUser: function (name, email) {
    const newUser = {
      id: generateUserID(),
      name: name,
      email: email
    }
    users.push(newUser)
    console.log(`User added: ${newUser.name} (${newUser.email})`)
    return newUser
  },

  // Public method to get user by ID
  getUserByID: function (userID) {
    const user = users.find((u) => u.id === userID)
    return user ? { ...user } : null
  },

  // Public method to display all users
  displayAllUsers: function () {
    console.log('All Users:')
    users.forEach((user) => {
      console.log(`${user.name} (${user.email})`)
    })
  }
}

// Sử dụng module User trong ứng dụng
const newUser1 = UserModule.addUser('John Doe', 'john@example.com')
const newUser2 = UserModule.addUser('Alice Smith', 'alice@example.com')

UserModule.displayAllUsers()
const retrievedUser = UserModule.getUserByID(newUser1.id)
console.log('Retrieved User:', retrievedUser)
```

- Trong ví dụ này:

- `users` là một biến private, không thể truy cập trực tiếp từ bên ngoài module `UserModule`.
- `generateUserID` là một hàm private, không thể được gọi từ bên ngoài module.
- `UserModule` cung cấp một giao diện công khai (public interface) thông qua các phương thức như `addUser`, `getUserByID`, và `displayAllUsers`. Các phương thức này được thiết kế sao cho họ cung cấp chức năng cần thiết mà không làm lộ chi tiết triển khai bên trong.

> Qua ví dụ này, encapsulation giúp bảo vệ dữ liệu `users`, che giấu triển khai của việc tạo ID và cung cấp một cách an toàn và rõ ràng để tương tác với đối tượng `UserModule`.
