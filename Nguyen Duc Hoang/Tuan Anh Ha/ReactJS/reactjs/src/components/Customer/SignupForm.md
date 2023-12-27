## Xử lý Form với Spread Operator và Bracket Quotation

Khi làm việc với Form có nhiều Inputs, việc sử dụng Spread Operator và Bracket Quotation trong React có thể giúp chúng ta viết mã ngắn gọn và hiệu quả hơn.

Nếu một Form có 4 hoặc 5 Inputs, việc sử dụng nhiều `useState()` sẽ làm mã nguồn trở nên dài dòng và khó quản lý. Giai đoạn này, chúng ta có thể sử dụng Spread Operator để cập nhật giá trị trong Input của Form:

```jsx
const [inputs, setInputs] = useState({})

const handleInputChange = (name, value) => {
  setInputs({ ...inputs, [name]: value })
}
```

Ở đây, `{ ...inputs, [name]: value }` có nghĩa là chúng ta lấy tất cả giá trị hiện tại trong `inputs` và cập nhật giá trị mới mà người dùng vừa nhập vào Input có tên là `[name]`. Điều này giúp làm cho Form trở nên linh hoạt trong mọi trường hợp Input mà không cần phải khai báo nhiều `useState()`.

**Lưu ý:** Đây chỉ là một ví dụ, bạn có thể tích hợp nó vào mã nguồn React của mình tùy thuộc vào cấu trúc và logic cụ thể của ứng dụng.
