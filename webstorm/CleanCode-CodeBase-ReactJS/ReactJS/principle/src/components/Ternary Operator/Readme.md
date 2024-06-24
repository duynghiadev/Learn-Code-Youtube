# Tìm hiểu về Ternary Operator trong React

Trong React và JavaScript nói chung, Ternary Operator là một cách viết ngắn gọn của câu lệnh if-else. Nó cho phép bạn viết một biểu thức điều kiện trong một dòng, giúp làm cho mã nguồn của bạn trở nên ngắn gọn hơn và dễ đọc hơn.

Cú pháp của Ternary Operator là:

```javascript
condition ? expression_if_true : expression_if_false
```

- Nếu điều kiện (condition) đúng, biểu thức (expression_if_true) sẽ được thực hiện.
- Nếu điều kiện là sai, biểu thức (expression_if_false) sẽ được thực hiện.

Dưới đây là một ví dụ sử dụng Ternary Operator trong React:

```js
import React from 'react'

const ExampleComponent = ({ isLoggedIn }) => (
  <div>{isLoggedIn ? <p>Welcome, user!</p> : <p>Please log in to continue.</p>}</div>
)

export default ExampleComponent
```

Trong ví dụ trên, nếu `isLoggedIn` là `true`, nó sẽ hiển thị "Welcome, user!", ngược lại sẽ hiển thị "Please log in to continue."

Một số lưu ý khi sử dụng Ternary Operator trong React:

1. Độ ưu tiên (Precedence):

Ternary Operator có độ ưu tiên thấp, vì vậy bạn có thể cần sử dụng dấu ngoặc đơn để đảm bảo đúng độ ưu tiên khi kết hợp với các biểu thức khác.

```js
const result = (isTrue ? 'true') : (isFalse ? 'false' : 'unknown');
```

2. Đọc hiểu:

Trong một số trường hợp, việc sử dụng Ternary Operator có thể làm cho mã nguồn trở nên khó đọc nếu điều kiện và các biểu thức quá phức tạp. Hãy sử dụng nó một cách hợp lý để giữ cho mã nguồn của bạn dễ đọc và hiểu.

3. Alternative:

Trong một số trường hợp, bạn có thể muốn xem xét sử dụng Logical AND (`&&`) hoặc Logical OR (`||`) trong các biểu thức điều kiện để đạt được kết quả tương tự.
