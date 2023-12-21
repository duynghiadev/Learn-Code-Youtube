### Tìm hiểu về Local Storage

- `localStorage` là một đối tượng trong JavaScript, thuộc Web Storage API, được sử dụng để lưu trữ dữ liệu dưới dạng cặp khóa/giá trị (key:value) trong trình duyệt web. Dữ liệu được lưu trữ ở dạng chuỗi và giữ lại giữa các phiên làm việc và trình duyệt đóng mở. `localStorage` cung cấp một giải pháp đơn giản để lưu trữ dữ liệu người dùng mà không cần sử dụng các phương thức gửi dữ liệu đến máy chủ.

**Cách sử dụng localStorage:**

1. Lưu trữ dữ liệu:

- Để lưu trữ dữ liệu trong `localStorage`, bạn sử dụng phương thức `setItem(key, value)`.

```js
localStorage.setItem('username', 'john_doe')
```

- Trong ví dụ trên, chuỗi "john_doe" được lưu trữ với khóa "username".

2. Truy xuất dữ liệu:

- Để truy xuất dữ liệu từ `localStorage`, bạn sử dụng phương thức `getItem(key)`.

```js
const username = localStorage.getItem('username')
console.log(username) // Output: "john_doe"
```

- Trong trường hợp không tìm thấy giá trị với khóa đã cung cấp, `getItem()` trả về `null`.

3. Xóa dữ liệu:

- Để xóa một mục từ `localStorage`, bạn sử dụng phương thức `removeItem(key)`.

```js
localStorage.removeItem('username')
```

- Sau dòng lệnh trên, dữ liệu được lưu trữ với khóa "username" sẽ bị xóa.

4. Xóa tất cả dữ liệu:

- Để xóa tất cả các mục từ `localStorage`, bạn sử dụng phương thức `clear()`.

```js
localStorage.clear()
```

- Tất cả các cặp khóa/giá trị (key:value) trong `localStorage` sẽ bị xóa.

**Ví dụ sử dụng `localStorage`:**

```js
// Lưu trữ dữ liệu
localStorage.setItem('username', 'john_doe')
localStorage.setItem('email', 'john@example.com')

// Truy xuất dữ liệu
const username = localStorage.getItem('username')
const email = localStorage.getItem('email')

console.log(username) // Output: "john_doe"
console.log(email) // Output: "john@example.com"

// Xóa một mục
localStorage.removeItem('username')

// Xóa tất cả dữ liệu
localStorage.clear()

// Lưu trữ đối tượng
localStorage.user = JSON.stringify({ name: 'Sam', age: 19 })
console.log(user)
```

- Lưu ý rằng dữ liệu trong `localStorage` thường chỉ có thể lưu trữ dưới dạng chuỗi. Nếu bạn muốn lưu trữ đối tượng JavaScript, bạn cần chuyển đổi nó thành chuỗi JSON bằng `JSON.stringify()` khi lưu và chuyển đổi ngược lại bằng `JSON.parse()` khi truy xuất.

### Cho ví dụ về `localStorage` kết hợp với các `array method`

- Dưới đây là một ví dụ minh họa về cách sử dụng `localStorage` kết hợp với các phương thức của mảng (array methods) như `JSON.stringify()`, `JSON.parse()`, `push()`, và `forEach()` để lưu trữ và quản lý một danh sách các người dùng trong trình duyệt:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>localStorage Array Example</title>
  </head>
  <body>
    <script>
      // Lấy danh sách người dùng từ localStorage (nếu có)
      let users = JSON.parse(localStorage.getItem('users')) || []

      // Thêm một người dùng mới vào danh sách
      function addUser(name, age) {
        const newUser = { name, age }
        users.push(newUser)

        // Lưu danh sách người dùng vào localStorage
        localStorage.setItem('users', JSON.stringify(users))
      }

      // Hiển thị danh sách người dùng
      function displayUsers() {
        console.log('Danh sách người dùng:')
        users.forEach((user) => {
          console.log(`Name: ${user.name}, Age: ${user.age}`)
        })
      }

      // Thêm một số người dùng mẫu
      addUser('John Doe', 25)
      addUser('Alice Smith', 30)
      addUser('Bob Johnson', 28)

      // Hiển thị danh sách người dùng
      displayUsers()
    </script>
  </body>
</html>
```

- Trong ví dụ này:

  - Mảng `users` được khởi tạo từ dữ liệu lấy từ `localStorage`. Nếu không có dữ liệu nào, mảng sẽ được tạo rỗng.
  - Hàm `addUser()` được sử dụng để thêm một người dùng mới vào mảng `users`. Sau đó, danh sách người dùng được lưu lại trong `localStorage`.
  - Hàm `displayUsers()` được sử dụng để hiển thị danh sách người dùng trong console.

- Mỗi khi bạn làm thay đổi trong danh sách người dùng, nó sẽ được tự động cập nhật trong `localStorage`, và bạn có thể truy cập và duyệt qua danh sách người dùng mọi lúc.
