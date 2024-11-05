## `Hook - Gắn (gắn vào component)`

## `Hooks được gắn vào React từ phiên bản 16.8.0`

```jsx
import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
  useContext,
  useImperativeHandle,
  useDebugValue,
} from "react";
```

- Chưa dùng Hooks, chỉ là UI Component:

  ```jsx
  function ComponentA() {
    return <h1>Haven't used hooks yet</h1>;
  }
  ```

- Sử dụng Hooks, hổ trợ thêm nhiều tính năng:

```jsx
function ComponentB() {
  // useState
  const [state, setState] = useState(initState);

  // useEffect
  useEffect(() => {}, [deps]);

  // useLayoutEffect
  useLayoutEffect(() => {}, [deps]);

  // useRef
  const ref = useRef();

  // useCallback
  const fn = useCallback(() => {}, [deps]);

  // useMemo
  const result = useMemo(() => {
    // return result for memo
  }, [deps]);

  // useReducer
  const [state, dispatch] = useReducer(reducer, initialArg, init);

  // useContext
  const value = useContext(MyContext);

  // useImperativeHandle
  useImperativeHandle(ref, createHandle, [deps]);

  // useDebugValue
  useDebugValue(isOnline ? "Online" : "Offline");

  return <h1>Hooks</h1>;
}
```

### `Câu hỏi thường gặp`

```
1. Chỉ dùng cho function Component
2. Component đơn giản và trở nên dễ hiểu
   - không bị chia logic ra như method trong lifecycle của CallComponent
   - Không cần sử dụng 'this'
3. Sử dụng Hooks khi nào ?
   - Dự án mới => Hooks
   - Dự án cũ: có 2 phần
     - Component mới => Function Component + Hooks
     - Component cũ => giữ nguyên có thời gian tối ưu sau
   - Logic nghiệp vụ cần sử dụng các tính chất của OOP => Class Component
4. Người mới nên bắt đầu với Function hay Class Component ?
   - Nên dùng FUnction Component nhé !!
5. Có kết hợp sử dụng Function Component và Class Component được không ??
   - ĐượC chứ !!
```

### `Code Mẫu`

```jsx
// Function component
function Item({ children }) {
  return <li>{children}</li>;
}

// Class component
class List extends React.Component {
  render() {
    return (
      <ul>
        <Item>HTML, CSS</Item>
        <Item>JAVASCRIPT</Item>
        <Item>REACTJS</Item>
      </ul>
    );
  }
}
```
