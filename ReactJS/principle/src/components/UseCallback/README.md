# Tìm hiểu về useCallback hook

`useCallback` là một hook trong React được sử dụng để memoize (lưu trữ bản sao của) một hàm callback. Mục tiêu của `useCallback` là giảm số lần hàm callback được tạo lại khi các dependencies của nó thay đổi, từ đó giúp tối ưu hóa hiệu suất của các thành phần React.

Cú pháp của `useCallback` như sau:

```js
const memoizedCallback = useCallback(() => {
  // Hàm callback
}, [dependencies])
```

Trong đó:

- Hàm callback là hàm mà bạn muốn memoize.
- `dependencies` là một mảng chứa các giá trị, khi mà bất kỳ giá trị nào trong mảng thay đổi, hàm callback sẽ được tạo lại.

Dưới đây là một ví dụ sử dụng `useCallback`:

```js
import React, { useState, useCallback } from 'react'

const ExampleComponent = () => {
  const [count, setCount] = useState(0)

  // Memoized callback
  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [count]) // Chỉ tạo lại callback khi count thay đổi

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default ExampleComponent
```

Trong ví dụ trên, `handleClick` chỉ được tạo lại khi giá trị `count` thay đổi. Nếu không có `useCallback`, mỗi lần thành phần được render, một hàm callback mới sẽ được tạo, dẫn đến việc mất đi tính ổn định của hàm callback và tăng gánh nặng cho garbage collector. `useCallback` giúp giữ nguyên hàm callback giữa các lần render, giảm thiểu việc tạo lại nó khi không cần thiết.

# Điểm khác nhau giữa useMemo và useCallback

> Điểm khác nhau giữa useMemo và useCallback là useMemo lưu trữ giá trị còn useCallback lưu trữ hàm?

Đúng, bạn đã hiểu đúng. Cả hai `useMemo` và `useCallback` đều được sử dụng để tối ưu hóa hiệu suất trong React bằng cách memoize (lưu trữ bản sao) giá trị hoặc hàm callback, nhưng chúng được sử dụng trong các ngữ cảnh khác nhau.

1. `useMemo` lưu trữ giá trị:

- Khi bạn sử dụng `useMemo`, bạn muốn memoize kết quả của một hàm tính toán nào đó.
- `useMemo` sẽ lưu trữ giá trị được tính toán và chỉ tính toán lại khi các dependencies thay đổi.
- Thường được sử dụng để tránh việc tính toán không cần thiết trong trường hợp giá trị không thay đổi.

Ví dụ:

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])
```

2. `useCallback` lưu trữ hàm callback:

- Khi bạn sử dụng `useCallback`, bạn muốn memoize một hàm callback để tránh việc tạo lại nó trong mỗi lần render.
- `useCallback` sẽ lưu trữ hàm callback và chỉ tạo lại nó khi các dependencies thay đổi.
- Thường được sử dụng để tránh việc tạo lại hàm callback trong các props của các thành phần con.

Ví dụ:

```js
const memoizedCallback = useCallback(() => handleClick(param), [param])
```

Tóm lại, `useMemo` thường được sử dụng khi bạn muốn lưu trữ một giá trị, trong khi `useCallback` thường được sử dụng khi bạn muốn lưu trữ một hàm callback. Cả hai đều sử dụng một mảng dependencies để xác định khi nào nó nên tính toán lại giá trị hoặc tạo lại hàm callback.
