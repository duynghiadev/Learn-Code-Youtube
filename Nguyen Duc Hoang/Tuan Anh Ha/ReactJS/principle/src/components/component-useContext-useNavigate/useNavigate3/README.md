# Tìm hiểu về useNavigate()

Trong React, `useNavigate` là một hook được cung cấp bởi thư viện React Router. React Router là một thư viện giúp quản lý điều hướng (routing) trong ứng dụng React, cho phép bạn xác định cách các thành phần của ứng dụng được hiển thị dựa trên URL của trình duyệt.

`useNavigate` được sử dụng để điều hướng (navigate) giữa các trang trong ứng dụng React. Hook này trả về một hàm navigate, cho phép bạn chuyển hướng qua lại giữa các trang mà không cần sử dụng props hoặc history object.

Dưới đây là một ví dụ cơ bản về cách sử dụng `useNavigate`:

```js
import { useNavigate } from 'react-router-dom'

const MyComponent = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    // Chuyển hướng đến đường dẫn '/new-page'
    navigate('/new-page')
  }

  return (
    <div>
      <p>This is my component</p>
      <button onClick={handleClick}>Go to New Page</button>
    </div>
  )
}
```

Trong ví dụ trên, `useNavigate` được sử dụng để nhận một hàm navigate. Khi nút được nhấn, hàm `handleClick` sẽ được gọi và sử dụng navigate để chuyển hướng đến đường dẫn '/new-page'.

Lưu ý rằng để sử dụng `useNavigate`, bạn cần bọc các thành phần của ứng dụng trong một `BrowserRouter` hoặc một thành phần tương tự của React Router để đảm bảo rằng routing hoạt động đúng cách.

```jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MyComponent />} />
        <Route path='/new-page' element={<NewPageComponent />} />
      </Routes>
    </Router>
  )
}
```

Trong đoạn mã trên, MyComponent sẽ được hiển thị khi đường dẫn là '/' và NewPageComponent sẽ được hiển thị khi đường dẫn là '/new-page'.
