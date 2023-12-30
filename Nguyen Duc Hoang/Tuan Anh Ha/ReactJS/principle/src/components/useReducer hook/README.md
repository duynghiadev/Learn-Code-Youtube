# Sử dụng `useReducer` trong React

`useReducer` là một hook trong thư viện React giúp quản lý trạng thái của một component thông qua việc sử dụng một hàm reducer. Nó thường được sử dụng khi có những logic phức tạp hoặc có nhiều hành động gây thay đổi trạng thái.

## Cơ bản về `useReducer`

1. **Reducer Function:**

   - Một reducer là một hàm nhận vào hai tham số: `state` (trạng thái hiện tại) và `action` (hành động cần thực hiện).
   - Hàm reducer trả về một trạng thái mới dựa trên `state` và `action`.

2. **Dispatch Function:**

   - `useReducer` trả về một cặp giá trị: trạng thái hiện tại (`state`) và một hàm `dispatch`.
   - Hàm `dispatch` được sử dụng để gửi một hành động (action) đến reducer.

3. **Sử dụng `useReducer`:**

   - Cú pháp: `const [state, dispatch] = useReducer(reducer, initialState);`
   - `reducer`: Hàm reducer xử lý các hành động và trả về trạng thái mới.
   - `initialState`: Giá trị ban đầu của trạng thái.

## Ví dụ đơn giản

```jsx
import React, { useReducer } from 'react'

// Hàm reducer
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}

// Component sử dụng useReducer
const Counter = () => {
  const initialState = { count: 0 }
  const [state, dispatch] = useReducer(counterReducer, initialState)

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  )
}
```

Trong ví dụ này, `counterReducer` xử lý các hành động `'INCREMENT'` và `'DECREMENT'`. Hàm `useReducer` sử dụng reducer này và trả về trạng thái mới cùng với hàm `dispatch`. Khi các nút được click, `dispatch` được gọi với hành động tương ứng, và reducer xử lý hành động để cập nhật trạng thái.

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
