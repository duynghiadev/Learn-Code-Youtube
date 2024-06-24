# Tìm hiểu về useMemo hook

`useMemo` là một hook trong React được sử dụng để memoize (lưu trữ bản sao của) giá trị được tính toán từ một hàm, nhằm tối ưu hóa hiệu suất của ứng dụng React. Khi sử dụng `useMemo`, giá trị được tính toán sẽ chỉ được tính toán lại khi các dependencies thay đổi.

Cú pháp của `useMemo` như sau:

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])
```

Trong đó:

- `computeExpensiveValue` là một hàm chứa logic để tính toán giá trị mà bạn muốn memoize.
- `a` và `b` là mảng dependencies. `useMemo` sẽ tái tính toán giá trị memoized nếu bất kỳ phần tử nào trong mảng này thay đổi.

Dưới đây là một ví dụ sử dụng `useMemo` trong một thành phần (component) React:

```js
import React, { useMemo, useState } from 'react'

const ExampleComponent = ({ data }) => {
  const expensiveValue = useMemo(() => computeExpensiveValue(data), [data])

  return (
    <div>
      <p>Expensive Value: {expensiveValue}</p>
    </div>
  )
}

// Hàm tính toán giá trị đắt giá
const computeExpensiveValue = (data) => {
  // Logic tính toán giá trị dựa trên dữ liệu đầu vào
  console.log('Computing expensive value...')
  return data.reduce((acc, curr) => acc + curr, 0)
}

export default ExampleComponent
```

Trong ví dụ trên, `computeExpensiveValue` sẽ chỉ được gọi lại khi `data` thay đổi. Nếu `data` không thay đổi, giá trị được lưu trữ từ lần tính toán trước đó sẽ được sử dụng lại, giúp tối ưu hóa hiệu suất của ứng dụng React.
