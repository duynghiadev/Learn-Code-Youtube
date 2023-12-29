> **Ôn lại kiến thức của useContext**

> Context cung cấp cho chúng ta cách để thực hiện chia sẻ dữ liệu tới các component trong cây mà không cần truyền dữ liệu qua props theo từng cấp bậc.

> Khi truyền dữ liệu tới các component bằng props thì bạn chỉ có thể truyền từ component cha sang component con. Nếu bạn muốn truyền sang component cháu hoặc sang component họ hàng xa thì điều này rất phức tạp. Bởi vậy context sẽ là kênh giao tiếp cho các component, cho phép bạn truyền dữ liệu một cách đơn giản hơn rất nhiều.

# Tìm hiểu useNavigate trong `react-router-dom`

## Sử dụng `useNavigate` trong React Router

`useNavigate` là một trong những hooks của thư viện React Router, được sử dụng để chuyển hướng giữa các trang trong ứng dụng React. Nói cách khác, khi bạn muốn di chuyển người dùng từ một trang này sang trang khác, bạn có thể sử dụng `useNavigate`.

Dưới đây là một ví dụ đơn giản về cách sử dụng `useNavigate`:

```jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

function MyComponent() {
  const navigate = useNavigate()

  const handleClick = () => {
    // Chuyển hướng đến đường dẫn '/new-route'
    navigate('/new-route')
  }

  return (
    <div>
      <p>Đây là trang của tôi</p>
      <button onClick={handleClick}>Chuyển hướng đến trang mới</button>
    </div>
  )
}

export default MyComponent
```

Trong ví dụ này, khi người dùng nhấn vào nút, hàm `handleClick` sẽ được gọi và sử dụng `navigate('/new-route')` để chuyển hướng đến đường dẫn mới là '/new-route'. React Router sau đó sẽ xử lý việc thay đổi URL và hiển thị nội dung của trang mới.

## Điều Quan Trọng

1. **Không Nhận Tham Số:**
   `useNavigate` không nhận tham số nào. Bạn chỉ cần gọi nó và truyền vào đường dẫn bạn muốn chuyển hướng.

2. **Không Cần Context Router:**
   `useNavigate` không yêu cầu bạn phải bọc component trong một `<BrowserRouter>` hoặc `<HashRouter>`. Nó có thể được sử dụng ở bất kỳ component nào nằm trong cây component được quản lý bởi một router.

3. **Sử Dụng Trong Functional Component:**
   `useNavigate` chỉ có thể được sử dụng trong functional component, không thể sử dụng trong class component.

4. **Kết Hợp với React Router:**
   `useNavigate` thường được sử dụng cùng với các thành phần khác của React Router như `Route`, `Link`, `Switch`, vv. để xây dựng hệ thống định tuyến hoàn chỉnh.

```jsx
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-route' element={<NewRoute />} />
      </Routes>
    </Router>
  )
}

function Home() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/new-route')
  }

  return (
    <div>
      <p>Trang chủ</p>
      <button onClick={handleClick}>Chuyển hướng đến trang mới</button>
    </div>
  )
}

function NewRoute() {
  return <p>Đây là trang mới</p>
}

export default App
```

---

## Những điểm giống nhau và khác nhau về useParams và useNavigate trong React Router

### useParams:

- **Giống nhau:**

  - Đều là hook của React Router.
  - Được sử dụng để truy cập và lấy giá trị của các tham số đường dẫn từ URL.

- **Khác nhau:**

  - `useParams` trả về một đối tượng chứa các tham số đường dẫn, trong khi mỗi tham số sẽ là một thuộc tính của đối tượng đó.
  - **Ví dụ:**

    ```javascript
    import { useParams } from 'react-router-dom'

    function MyComponent() {
      const params = useParams()
      const { id, category } = params

      // Bây giờ, bạn có thể sử dụng giá trị của `id` và `category`.
    }
    ```

### useNavigate:

- **Giống nhau:**

  - Đều là hook của React Router.
  - Được sử dụng để chuyển hướng từ một trang này sang trang khác.

- **Khác nhau:**

  - `useNavigate` trả về một hàm, khi gọi hàm này, nó sẽ thực hiện chuyển hướng.
  - Không nhận vào bất kỳ tham số nào như `useParams`, chỉ cần gọi hàm `navigate` và truyền vào đường dẫn bạn muốn chuyển hướng.
  - **Ví dụ:**

    ```javascript
    import { useNavigate } from 'react-router-dom'

    function MyComponent() {
      const navigate = useNavigate()

      // Khi bạn muốn chuyển hướng, gọi hàm navigate với đường dẫn mong muốn.
      const handleClick = () => {
        navigate('/new-route')
      }

      return <button onClick={handleClick}>Chuyển hướng</button>
    }
    ```

Tóm lại, `useParams` được sử dụng để lấy giá trị của các tham số đường dẫn từ URL, trong khi `useNavigate` được sử dụng để thực hiện chuyển hướng giữa các trang trong ứng dụng React.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  }
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
