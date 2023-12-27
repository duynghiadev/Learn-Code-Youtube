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

## Tìm hiểu về DRY trong React

**DRY** là viết tắt của **"Don't Repeat Yourself"**, một nguyên tắc quan trọng trong lập trình máy tính và phát triển phần mềm. Nguyên tắc này khuyến khích việc tránh lặp lại mã nguồn không cần thiết, thay vào đó sử dụng các cấu trúc hoặc hàm tái sử dụng để giảm sự trùng lặp và làm cho mã nguồn trở nên dễ bảo trì hơn.

### Các Cách Áp Dụng DRY trong React

1. **Tạo Components Tái Sử Dụng:**
   Nếu bạn thấy có logic hoặc giao diện người dùng (UI) nào đó xuất hiện ở nhiều nơi trong ứng dụng, hãy xem xét việc tạo thành phần React để tái sử dụng ở nhiều nơi.

2. **Custom Hooks:**
   Sử dụng custom hooks để đóng gói logic và tái sử dụng nó giữa các thành phần. Custom hooks giúp bạn tránh việc lặp lại cùng một logic xử lý state hoặc side effect ở nhiều nơi.

3. **HOC (Higher-Order Components):**
   Sử dụng HOC để bao bọc thành phần và mở rộng chức năng của nó mà không cần phải sao chép mã nguồn.

4. **Render Props:**
   Sử dụng render props để chia sẻ logic giữa các thành phần.

5. **Context API:**
   Sử dụng Context API để chia sẻ dữ liệu global trong ứng dụng mà không cần truyền qua nhiều lớp con.

### Ví dụ

Nếu bạn có một logic xử lý form phức tạp, bạn có thể đặt nó vào một custom hook và sử dụng nó trong nhiều thành phần form khác nhau, giúp giảm sự trùng lặp và làm cho mã nguồn dễ bảo trì hơn.

```jsx
// Custom Hook: useComplexFormLogic.js
import { useState } from 'react'

function useComplexFormLogic() {
  const [formData, setFormData] = useState({})

  // ...logic for handling form data

  return {
    formData,
    setFormData
    // ...other functions or state as needed
  }
}

export default useComplexFormLogic
```

```jsx
// Component using the Custom Hook
import React from 'react';
import useComplexFormLogic from './useComplexFormLogic';

function ComplexFormComponent() {
  const { formData, setFormData } = useComplexFormLogic();

  // ...component logic using the form data and functions

  return (
    // ...form JSX
  );
}

export default ComplexFormComponent;
```

Việc này giúp giữ mã nguồn sạch sẽ, dễ đọc, và giảm khả năng xảy ra lỗi khi cần thay đổi logic của form.
