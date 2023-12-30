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

# Tìm hiểu về useQuery

`useQuery` là một hook trong thư viện React Query, được sử dụng để thực hiện các truy vấn dữ liệu và quản lý trạng thái của chúng. React Query là một thư viện giúp quản lý trạng thái và cache cho dữ liệu từ các nguồn như API.

Dưới đây là một số khái niệm cơ bản và ví dụ về cách sử dụng `useQuery`:

## Cơ bản về useQuery:

1. Cài đặt và Import:

Để sử dụng `useQuery`, bạn cần cài đặt thư viện React Query và import hook từ thư viện đó.

```bash
npm install react-query
```

```js
import { useQuery } from 'react-query'
```

2. Sử dụng useQuery:

- Cú pháp: `const { data, error, isLoading } = useQuery(queryKey, queryFunction);`
- `queryKey`: Một giá trị đại diện cho khóa của truy vấn. Nó có thể là một chuỗi hoặc một mảng các giá trị.
- `queryFunction`: Một hàm có nhiệm vụ trả về dữ liệu từ nguồn nào đó, thường là một hàm asynchronous.

```js
const { data, error, isLoading } = useQuery('exampleQuery', async () => {
  const response = await fetch('https://api.example.com/data')
  const data = await response.json()
  return data
})
```

3. Trạng thái truy vấn:

- `data`: Dữ liệu trả về từ truy vấn.
- `error`: Lỗi nếu có bất kỳ vấn đề nào xảy ra trong quá trình truy vấn.
- `isLoading`: Trạng thái xác định liệu truy vấn có đang trong quá trình tải hay không.

4. Caching và Invalidating:

React Query tự động quản lý cache dữ liệu, giúp tối ưu hóa hiệu suất và tránh việc tải dữ liệu nhiều lần.
Bạn có thể sử dụng các phương thức như `invalidateQueries` để làm mới dữ liệu khi cần.

**Ví dụ sử dụng useQuery:**

```js
import React from 'react'
import { useQuery } from 'react-query'

const ExampleComponent = () => {
  const { data, error, isLoading } = useQuery('exampleQuery', async () => {
    const response = await fetch('https://api.example.com/data')
    const data = await response.json()
    return data
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h2>Example Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default ExampleComponent
```

Trong ví dụ trên, `useQuery` được sử dụng để tải dữ liệu từ `https://api.example.com/data`. Trong quá trình tải, `isLoading` sẽ là `true`, khi tải xong, `data` sẽ chứa dữ liệu trả về từ server, và nếu có lỗi, `error` sẽ chứa thông báo lỗi.

---

# React Query - QueryClient và QueryClientProvider

## `QueryClient`

`QueryClient` là một đối tượng chứa tất cả các thông tin về trạng thái và cache của các truy vấn trong ứng dụng React Query. Mỗi ứng dụng thường chỉ có một `QueryClient` duy nhất được sử dụng trên toàn bộ ứng dụng.

### Ví dụ sử dụng `QueryClient`:

```jsx
import { QueryClient } from 'react-query'

const queryClient = new QueryClient()
```

Ở đây, chúng ta tạo một instance của `QueryClient` bằng cách sử dụng `new QueryClient()` và lưu trữ nó trong một biến có tên là `queryClient`.

## `QueryClientProvider`

`QueryClientProvider` là một component React chịu trách nhiệm cung cấp `QueryClient` cho tất cả các thành phần con bên trong nó thông qua Context API. Bạn cần bọc toàn bộ ứng dụng của mình bên trong một `QueryClientProvider` để đảm bảo mọi thành phần đều có thể truy cập `QueryClient`.

Ví dụ sử dụng `QueryClientProvider`:

```js
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'

const queryClient = new QueryClient()

const MainApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}

export default MainApp
```

Ở đây, chúng ta bọc ứng dụng (`App`) bên trong một `QueryClientProvider` và cung cấp cho nó `QueryClient` thông qua prop client.

## Tổng kết:

1. Tạo `QueryClient`:

- Tạo một instance của `QueryClient` tại nơi khởi tạo ứng dụng.

2. Bọc ứng dụng trong `QueryClientProvider`:

- Bọc toàn bộ ứng dụng bên trong một `QueryClientProvider` để đảm bảo mọi thành phần có thể truy cập `QueryClient` thông qua Context.

3. Sử dụng `useQuery` trong thành phần con:

- Trong các thành phần con, sử dụng `useQuery` để thực hiện các truy vấn và quản lý trạng thái của chúng.

- Chắc chắn rằng bạn đã import `QueryClient` và `QueryClientProvider` từ thư viện React Query để sử dụng chúng.

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
