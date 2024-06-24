# Tìm hiểu về Router, Routes, và Route trong react-router-dom

## Router

`Router` là một thành phần chính để bao quanh ứng dụng React của bạn và giúp theo dõi trạng thái định hướng của ứng dụng. `react-router-dom` hỗ trợ hai loại router chính là `BrowserRouter` và `HashRouter`. Mỗi loại router có cách xử lý URL khác nhau. `BrowserRouter` sử dụng HTML5 history API, trong khi `HashRouter` sử dụng hash trong URL.

Ví dụ về `BrowserRouter`:

```jsx
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return <Router>{/* Các thành phần và route sẽ được đặt ở đây */}</Router>
}
```

## Route

`Route` được sử dụng để định rõ cách một thành phần của ứng dụng sẽ được hiển thị dựa trên đường dẫn hiện tại của URL. Mỗi `Route` định nghĩa một mối quan hệ giữa đường dẫn URL và một thành phần cụ thể.

Ví dụ:

```jsx
import { Route } from 'react-router-dom'

function Home() {
  return <div>Trang chủ</div>
}

function About() {
  return <div>Về chúng tôi</div>
}

function App() {
  return (
    <div>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
    </div>
  )
}
```

Trong ví dụ trên, nếu đường dẫn là "/" thì component `Home` sẽ được hiển thị, nếu đường dẫn là "/about" thì component `About` sẽ được hiển thị.

## Routes

`Routes` là một thành phần cha để định nghĩa nhiều route trong một lúc. `Routes` cho phép bạn nhóm và quản lý nhiều route cùng một lúc.

Ví dụ:

```jsx
import { Routes, Route } from 'react-router-dom'

function Home() {
  return <div>Trang chủ</div>
}

function About() {
  return <div>Về chúng tôi</div>
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}
```

Ở đây, `Routes` chứa nhiều `Route` và mỗi `Route` định nghĩa một đối tượng element để hiển thị khi đường dẫn tương ứng được kích hoạt.

Nhớ rằng, khi sử dụng `react-router-dom`, bạn cần cài đặt thư viện này bằng `npm` hoặc `yarn` trước khi sử dụng:

```bash
npm install react-router-dom
# hoặc
yarn add react-router-dom
```
