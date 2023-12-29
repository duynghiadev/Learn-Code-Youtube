> Tài liệu tham khảo

> [Sử dụng useContext](https://thaunguyen.com/2021/05/06/tu-hoc-reactjs-su-dung-usecontext/)

> [Sử dụng Redux](https://vntalking.com/react-tai-sao-minh-khong-muon-su-dung-redux.html)

---

# Tìm hiểu về useContext trong ReactJS

`useContext` là một trong những hooks được cung cấp bởi React để làm việc với Context API. Context API giúp bạn truyền dữ liệu xuống các thành phần con mà không cần truyền qua nhiều cấp thành phần trung gian. `useContext` được sử dụng để đọc giá trị từ Context.

Dưới đây là một số thông tin chi tiết về `useContext` trong React:

1. Tạo Context:

Đầu tiên, bạn cần tạo một Context bằng cách sử dụng `React.createContext()`.

```js
// ExampleContext.js
import { createContext } from 'react'

const ExampleContext = createContext()

export default ExampleContext
```

2. Cung cấp giá trị Context:

Bạn cần sử dụng `Context.Provider` để cung cấp giá trị cho Context. Thông thường, điều này được thực hiện tại cấp cao nhất của ứng dụng React.

```js
// App.js
import React from 'react'
import ExampleContext from './ExampleContext'

const App = () => {
  const contextValue = 'Giá trị từ Context'

  return (
    <ExampleContext.Provider value={contextValue}>
      {/* Các thành phần con ở đây có thể sử dụng giá trị từ Context */}
    </ExampleContext.Provider>
  )
}

export default App
```

3. Sử dụng useContext để đọc giá trị:

Trong các thành phần con, bạn có thể sử dụng `useContext` để đọc giá trị từ Context.

```js
// ChildComponent.js
import React, { useContext } from 'react'
import ExampleContext from './ExampleContext'

const ChildComponent = () => {
  const contextValue = useContext(ExampleContext)

  return <div>{contextValue}</div>
}

export default ChildComponent
```

Trong ví dụ trên, `ChildComponent` sẽ hiển thị giá trị từ Context mà `App` đã cung cấp.

Lưu ý rằng, khi giá trị của Context thay đổi, tất cả các thành phần sử dụng `useContext` sẽ được tự động render lại để phản ánh giá trị mới.

Hy vọng rằng điều này giúp bạn hiểu về cách sử dụng `useContext` trong React!
