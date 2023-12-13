## Trong khóa này có nhiều từ thuật ngữ tiếng anh. Các bạn có thể search google hoặc chat-GPT để tìm hiểu thêm nhé ✅✅✅

1. Javascript Execution Context và Lexical Environment Là Gì

- Biên dịch code

![Biên dịch code](img.png)

- Global Execution Context

![Execution Context](img_1.png)
![this in window](img_2.png)

- Từ mới Tiếng anh trong video, xem thêm video để hiểu ý nghĩa nhé:
  - Syntax parser
  - Lexical environment
  - Execution Context
  - Hoisting

2. Javascript Execution Stack, Invocation và Variable Environment | Justin Nguyen

- Dưới đây là code chạy đồng bộ

![Single thread](img_3.png)
![Example - Execution Context](img_4.png)

- Từ mới Tiếng anh trong video, xem thêm video để hiểu ý nghĩa nhé:
  - Concurrent: Chạy đồng thời
  - Synchronous: Chạy đồng bộ
  - Invocation: Chạy 1 function, gọi hàm
  - Lexical environment
  - Execution Context
  - Execution Stack
  - Variable environment

3. Scope Chain và Block Scope Trong Javascript | Justin Nguyen

- Ví dụ về javascript về Scope Chain và Block Scope trong javascript

- Tất cả các ví dụ ở trên là mình dùng biến `var`. Biến `var` được hiểu nôm na là `global scope` hoặc là `function scope`. Nên biến `var` rất ít người dùng. Hầu như là họ không dùng nữa mà chuyển qua dùng `let`, `const`
- `let`, `const` là ES6 (ES2015) thì nó có hỗ trợ `block scope` 
- `block scope` là gì? Thì nó có nghĩa là các dòng code nằm trong dấu ngoặc nhọn `{}`. Đó là block scope. Ví dụ như các dòng code nằm trong `if else`, `forEach`, `for`,...Mỗi cái block như này thì nó sẽ tạo ra cho mình cái scope riêng
- Các biến nằm trong block đó thì biến đó chỉ tồn tại trong scope đó thôi. Nó không ảnh hưởng gì, và cũng không liên quan đến các biến bên ngoài

![scope chain](img_5.png)

- Từ mới Tiếng anh trong video, xem thêm video để hiểu ý nghĩa nhé:
  - Scope chain
  - Lexical environment
  - Execution Context
  - Execution Stack
  - Variable environment

4. By Value vs By Reference Trong Javascript | Justin Nguyen

- Ở trong bài này thì chúng ta cùng tìm hiểu về Static types, Dynamic types, Primitive types (kiểu nguyên thủy), Object
- By value và By references

- Tất cả các kiểu primitive type đều là tham trị (pass by value)
- Còn tất cả các kiểu mà mình khai báo kiểu object thì đều là tham chiếu (pass by reference)

- Primitive type: được gán theo giá trị
- Object type: được gán theo vùng nhớ

- Từ mới Tiếng anh trong video, xem thêm video để hiểu ý nghĩa nhé:
  - By Value
  - By Reference
  - Execution Context
  - Variable Environment
  - Dynamic Type, Static Type
  - Primitive Type