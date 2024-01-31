`var`, let, và const là các từ khóa được sử dụng để khai báo biến trong JavaScript, nhưng chúng có một số sự khác biệt quan trọng về phạm vi (scope) và khả năng thay đổi giá trị (mutability). Dưới đây là mô tả chi tiết về từng từ khóa:

1. `var`:

- `var` đã tồn tại trong JavaScript từ phiên bản ES5 trở về trước.
- Các biến được khai báo bằng `var` có phạm vi là function scope hoặc là global scope (nếu nó được khai báo ở ngoài bất kỳ hàm nào).
- Biến `var` có hoisting, nghĩa là khai báo của chúng được "nâng lên" đến đầu phạm vi, nhưng giá trị không được nâng lên.

```js
console.log(x) // undefined
var x = 5
console.log(x) // 5
```

- `var` có thể được khai báo lại trong cùng một phạm vi.

```js
var y = 10
var y = 20 // Không có lỗi
```

2. `let`:

- `let` đã được giới thiệu trong ES6 để giải quyết một số vấn đề của var.
- Biến được khai báo bằng `let` có phạm vi là block scope (nghĩa là chỉ có hiệu lực trong cặp dấu ngoặc nhọn {}).
- `let` không có hoisting như var.

```js
console.log(z) // Lỗi: z is not defined
let z = 15
console.log(z) // 15
```

- `let` không thể được khai báo lại trong cùng một phạm vi.

```js
let w = 30
let w = 40 // Lỗi: Identifier 'w' has already been declared
```

3. `const`:

- `const` cũng được giới thiệu trong ES6 và chia sẻ nhiều đặc điểm giống với let.
- Biến được khai báo bằng `const` cũng có phạm vi là block scope.
- `const` yêu cầu phải được khởi tạo ngay từ khi khai báo và không thể thay đổi giá trị sau khi đã được gán.

```js
const PI = 3.14
// PI = 3.14159; // Lỗi: Assignment to constant variable.
```

- Cũng giống như let, `const` không có hoisting và không thể khai báo lại trong cùng một phạm vi.

```js
const constantVar = 50
// const constantVar = 60; // Lỗi: Identifier 'constantVar' has already been declared
```

-Tổng quát, khi có thể, nên sử dụng let và `const` thay vì var để có mã JavaScript dễ đọc và dễ bảo trì hơn. Sự lựa chọn giữa let và `const` phụ thuộc vào việc bạn có nhu cầu thay đổi giá trị của biến hay không. Nếu giá trị không thay đổi, sử dụng `const` để giữ cho mã nguồn an toàn hơn.
