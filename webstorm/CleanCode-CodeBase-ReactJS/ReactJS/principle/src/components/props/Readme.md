# Tìm Hiểu về Props trong ReactJS

Trong ReactJS, **"props"** là viết tắt của **"properties"** (tính năng) và được sử dụng để truyền dữ liệu từ một thành phần cha đến một thành phần con. Props giúp các thành phần React tương tác với nhau và truyền thông tin giữa chúng. Điều này giúp quản lý trạng thái và hiển thị dữ liệu một cách dễ dàng.

## Truyền Props

Khi bạn tạo một thành phần, bạn có thể truyền dữ liệu cho nó thông qua props. Điều này giúp tùy chỉnh hành vi của thành phần dựa trên các giá trị được chuyển vào.

```jsx
// Ví dụ truyền prop "name" cho một thành phần
<MyComponent name='John' />
```

## Nhận Props

Để nhận giá trị của props trong một thành phần, bạn chỉ cần sử dụng tham số props trong hàm render của thành phần đó.

```js
// MyComponent.jsx
import React from 'react'

const MyComponent = (props) => {
  return <div>Hello, {props.name}!</div>
}

export default MyComponent
```

## Props Là Đối Tượng Bất Biến

Props là không thể thay đổi (immutable). Một khi một thành phần đã nhận props, nó không thể tự thay đổi giá trị của chúng. Điều này giúp duy trì tính nhất quán và dễ theo dõi trong quá trình phát triển.

## Default Props

Bạn có thể định nghĩa giá trị mặc định cho props bằng cách sử dụng defaultProps. Nếu một prop không được truyền vào, giá trị mặc định sẽ được sử dụng.

```js
MyComponent.defaultProps = {
  name: 'Guest'
}
```

## Children Props

Props có thể là bất cứ thứ gì, bao gồm cả các thành phần React khác. Thành phần có thể truyền vào các thành phần con thông qua prop đặc biệt được gọi là children.

```js
// Truyền thành phần con vào MyComponent
<MyComponent>
  <p>This is a child component.</p>
</MyComponent>
```

Props là một phần quan trọng của cách React quản lý trạng thái và dữ liệu. Việc hiểu cách sử dụng và truyền props giữa các thành phần là quan trọng để phát triển ứng dụng React hiệu quả và dễ bảo trì.
