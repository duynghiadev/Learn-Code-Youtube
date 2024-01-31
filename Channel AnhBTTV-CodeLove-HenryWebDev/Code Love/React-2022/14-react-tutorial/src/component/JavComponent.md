## Đây là file giải thích chi tiết code trong file JavComponnet

1. Quy tắc 1:

- Mỗi lần component render hoặc re-render (khi update lại state thì component render lại). 
- Thì tất cả bao gồm data (dữ liệu) render, function handle,...
- Những phần này nằm trong component cha, cụ thể ở trong file này là function `JavComponent` thì mỗi lần render nó đều tạo ra mỗi version riêng biệt (cái này được gọi là `closure`), và ghi nhớ `state`, `props` của nó
- Khi có những action của người dùng (chẳng hạn như là click,...) mặc dù function đã render kết thúc, nhưng nó vẫn nhớ được state, props của lần render trước đó nó thuộc về, bởi vì nó là closure.

2. Dưới đây là flow chạy của code:

```js
// Lần đầu render: 👍

jav = [javList]
// function handleDeleteJav được định nghĩa 👍
const handleDeleteJav = (id) => {
  jav = [javList]
  const stateJavNew = jav.filter((javItem) => javItem.id !== id)
  // Sau khi thay đổi state thì khi cập nhật lại setState thì function sẽ render lại
  setJav(stateJavNew)
}

// sau đó khai báo điều kiện để in ra message ra màn hình 👍
  jav = [javList]
  if (jav.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>Không có JAV để chọn</h2>
  }
  
// Lần thứ 2 khi re-render: 👍
// Khi nhấn vào button delete(1) thì function handleDeleteJav này chạy
const handleDeleteJav = (id) => {
  jav = [javList]
  const stateJavNew = jav.filter((javItem) => javItem.id !== id)
  // Sau khi thay đổi state thì khi cập nhật lại setState thì function sẽ render lại
  setJav(stateJavNew)
}
  
// Sau khi chạy đến setJav(stateJavNew) do state thay đổi thì làm component re-render lại

// Lần thứ 3 khi re-render: 👍
// Lúc này thì state jav chỉ còn 2 phần tử sau khi function re-render lại
jav = ['state mới có 2 phần tử']
// nhớ state mới chỉ có 2 phần tử trừ id mình đã nhấn button delete (ví dụ: nhấn nút xóa vào id 1, thì jav chỉ còn 2 phần tử có id là 2 và 3)
```