# Tổng Quan về `useReducer`

`useReducer` là một hook trong React được sử dụng để quản lý trạng thái của một thành phần (component) thông qua một hàm reducer. Nó thường được sử dụng để xử lý các trạng thái phức tạp và có logic xử lý phức tạp hơn so với `useState`.

## Cơ Bản về `useReducer`

1. **Reducer Function:**

   - `useReducer` nhận vào hai tham số: reducer function và initial state.
   - Reducer function là một hàm nhận vào hai tham số: `state` và `action`, và trả về một state mới.

2. **Action:**

   - `action` là một đối tượng mô tả sự thay đổi trong state. Nó phải chứa một thuộc tính `type` để định danh loại hành động và có thể có thêm các thuộc tính khác.

3. **Dispatch Function:**

   - `useReducer` trả về một cặp giá trị: current state và một hàm `dispatch`.
   - `dispatch` được sử dụng để gửi một action đến reducer function, kích thích quá trình xử lý và cập nhật state.

### Cú Pháp Cơ Bản

```jsx
const [state, dispatch] = useReducer(reducer, initialState)
```

## Ưu Điểm của useReducer

1. Quản Lý Trạng Thái Phức Tạp:

- useReducer hữu ích khi bạn có các trạng thái phức tạp và các hành động gây ảnh hưởng lẫn nhau.

2. Tách Biệt Logic Xử Lý Trạng Thái:

- Reducer function giúp tách biệt logic xử lý trạng thái ra khỏi component, làm cho mã nguồn dễ đọc và bảo trì hơn.

3. Sử Dụng Cùng với Context API:

useReducer thường được kết hợp với Context API để quản lý trạng thái toàn cục trong ứng dụng.

### Ví Dụ Sử Dụng useReducer

```js
const initialState = { count: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  )
}
```

Trên đây là một tổng quan về `useReducer` và cách sử dụng nó trong React để quản lý trạng thái và logic xử lý phức tạp.
