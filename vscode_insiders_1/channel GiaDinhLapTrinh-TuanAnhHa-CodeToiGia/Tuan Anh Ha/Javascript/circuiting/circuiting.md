# Short-circuiting trong JavaScript

Trong JavaScript, "short-circuiting" là một khái niệm liên quan đến cách toán tử logic (`&&` và `||`) hoạt động. Short-circuiting xảy ra khi giá trị của biểu thức logic có thể được xác định ngay lập tức mà không cần kiểm tra tất cả các phần tử trong biểu thức.

## Toán tử Logic `&&` (AND)

Khi sử dụng toán tử `&&`, nếu giá trị bên trái là `false`, kết quả của biểu thức là `false` và không cần phải kiểm tra giá trị bên phải. Ngược lại, nếu giá trị bên trái là `true`, biểu thức sẽ kiểm tra và trả về giá trị bên phải.

```javascript
// Short-circuiting with &&
let result = false && someFunction() // someFunction() không được gọi vì false && anything luôn là false
```

## Toán tử Logic `||` (OR)

Khi sử dụng toán tử `||`, nếu giá trị bên trái là `true`, kết quả của biểu thức là `true` và không cần phải kiểm tra giá trị bên phải. Ngược lại, nếu giá trị bên trái là `false`, biểu thức sẽ kiểm tra và trả về giá trị bên phải.

```js
// Short-circuiting with ||
let result = true || someFunction() // someFunction() không được gọi vì true || anything luôn là true
```

## Ứng dụng

Short-circuiting có thể được sử dụng để viết mã ngắn gọn và hiệu quả, đặc biệt là khi bạn muốn kiểm tra điều kiện trước khi thực hiện một hành động nào đó.

```js
// Kiểm tra một biến trước khi sử dụng
let value = someValue || defaultValue

// Thực hiện một hành động nếu điều kiện đúng
condition && performAction()
```

Trong cả hai trường hợp, short-circuiting giúp tránh việc thực hiện các phép kiểm tra không cần thiết và cải thiện hiệu suất của mã.
