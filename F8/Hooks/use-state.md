# useState hook

### Dùng khi nào ?

- Khi muốn dữ liệu thay đổi thị giao diện tự động được cập nhật (render lai theo dữ liệu)

### Cách dùng

```jsx
import {useState} from 'react

function Component(){
  const [state, setState] = useState(initState)

  // code
  ...
}
```

### Lưu ý

- Component được re-render sau khi `setState`
- Initial state chỉ dùng cho lần đầu
- Set state với callback ?
- Initial state với callback ?
- Set state là thay thế state bằng giá trị mới
