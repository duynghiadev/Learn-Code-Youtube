# Custom Hook trong ReactJS

Trong ReactJS, custom hooks là một khái niệm quan trọng giúp tái sử dụng logic component và chia sẻ logic giữa các components. Một custom hook là một hàm JavaScript bắt đầu bằng từ khóa "use" và thường chứa một số logic liên quan đến state, lifecycle, hoặc side effects của React.

Có một số quy tắc khi tạo custom hooks:

1. **Bắt đầu bằng "use":** Tên của một custom hook nên bắt đầu bằng từ khóa "use". Điều này giúp React nhận biết rằng đó là một hook và nó có thể chia sẻ state và logic của nó với các components khác.

2. **Tái sử dụng logic:** Custom hooks được tạo để tái sử dụng logic của component, giúp tránh việc lặp lại mã logic giữa các components khác nhau.

Dưới đây là một ví dụ về một custom hook đơn giản để quản lý state trong một component:

```javascript
import { useState } from 'react'

// Tạo hàm custom hook useCounter
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return { count, increment, decrement }
}

// Sử dụng custom hook trong một component
function CounterComponent() {
  const { count, increment, decrement } = useCounter(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
```

Trong ví dụ trên, `useCounter` là một custom hook chứa logic của một `counter`. Nó sử dụng `useState` để quản lý state và trả về các hàm để tăng/giảm giá trị.

Custom hooks có thể chứa nhiều loại logic khác nhau như `useEffect`, `useContext`, `useRef`, và nhiều hooks khác mà bạn muốn tái sử dụng trong các components khác nhau.

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
