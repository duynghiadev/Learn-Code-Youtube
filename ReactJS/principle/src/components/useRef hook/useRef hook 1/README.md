# Tìm hiểu về `useRef` trong React

Trong React, `useRef` là một hook được sử dụng để tạo một đối tượng tham chiếu (`ref`). `useRef` cho phép bạn truy cập và lưu trữ giá trị của một biến mà không gây ra việc render lại khi giá trị thay đổi. Thông thường, `useRef` được sử dụng để tham chiếu đến các phần tử DOM hoặc để lưu trữ các giá trị không thay đổi giữa các lần render.

## 1. Tạo một đối tượng ref

```javascript
import { useRef } from 'react'

const myRef = useRef(initialValue)
```

Trong đó, `initialValue` là giá trị khởi tạo của `ref`. Nó có thể là `null`, `undefined`, hoặc một giá trị bất kỳ.

## 2. Tham chiếu đến phần tử DOM

```js
import { useRef, useEffect } from 'react'

function MyComponent() {
  const myRef = useRef(null)

  useEffect(() => {
    // `myRef.current` chứa tham chiếu đến phần tử DOM
    console.log(myRef.current)
  }, [])

  return <div ref={myRef}>Hello, World!</div>
}
```

Trong ví dụ trên, `myRef.current` sẽ chứa tham chiếu đến phần tử `div` trong DOM.

## 3. Lưu trữ giá trị không gây render lại

```js
import { useRef, useState } from 'react'

function MyComponent() {
  const countRef = useRef(0)
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    // Không gây render lại khi thay đổi giá trị
    countRef.current += 1
    setCount(count + 1)
  }

  return (
    <div>
      <p>Render Count: {count}</p>
      <p>Internal Count (no render): {countRef.current}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
```

Trong ví dụ trên, `countRef.current` sẽ không gây ra render lại khi thay đổi giá trị, trong khi `count` sẽ gây ra render lại.

## 4. Lưu trữ trạng thái giữa các lần render

```js
import { useRef, useEffect } from 'react'

function MyComponent() {
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      console.log('This is the first render')
      firstRender.current = false
    } else {
      console.log('This is not the first render')
    }
  }, [])

  return <div>Hello, World!</div>
}
```

Trong ví dụ trên, `firstRender.current` được sử dụng để theo dõi xem component có đang render lần đầu tiên hay không.

`useRef` là một công cụ mạnh mẽ trong React để thực hiện các nhiệm vụ không liên quan đến việc render và giữ lại giá trị giữa các lần render.

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
