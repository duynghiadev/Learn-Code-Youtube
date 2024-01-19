# Tìm Hiểu Về React Router DOM v6

Đến thời điểm kiến thức của tôi được cập nhật lần cuối vào tháng 1 năm 2022, React Router DOM v6 chưa được phát hành chính thức. Tính đến thời điểm đó, phiên bản mới nhất của React Router DOM là v5, và nó là một thư viện quan trọng cho việc quản lý định tuyến trong ứng dụng React.

Tuy nhiên, nếu có sự thay đổi và phát hành React Router DOM v6, có thể có một số cập nhật và thay đổi đáng chú ý so với v5. Dưới đây là một số khái niệm cơ bản về React Router DOM và những điểm mà bạn có thể cần chú ý:

1. **Cơ bản về React Router DOM:** React Router DOM cung cấp các thành phần cho việc quản lý định tuyến trong ứng dụng React. Điều này bao gồm `BrowserRouter` để đóng gói ứng dụng trong một router, `Route` để định nghĩa các tuyến, và các thành phần như `Link` để tạo liên kết giữa các tuyến.

2. **Định tuyến dựa trên URL:** React Router DOM cho phép bạn định tuyến dựa trên URL hiện tại của trình duyệt. Bạn có thể xác định các tuyến và các thành phần React tương ứng với chúng.

3. **Nested Routing:** React Router DOM hỗ trợ định tuyến lồng nhau, nghĩa là bạn có thể có các tuyến con được nhúng trong các tuyến cha.

4. **Redirects và NotFound:** Bạn có thể xác định các tuyến chuyển hướng và trang NotFound để xử lý các trường hợp không tìm thấy tuyến.

5. **Sử dụng useParams:** React Router DOM cung cấp hooks như `useParams` để trích xuất các tham số từ URL.

6. **Thực hiện chuyển đổi giữa các tuyến:** Bạn có thể sử dụng `Link` hoặc `history.push` để thực hiện chuyển đổi giữa các tuyến mà không làm tải lại toàn bộ trang.

Vui lòng kiểm tra trang chính thức của React Router DOM và tài liệu liên quan để biết thông tin cụ thể nhất và cập nhật nhất về React Router DOM v6 nếu đã được phát hành từ thời điểm kiến thức của tôi được cập nhật lần cuối.

## Tìm hiểu về useParams()

`useParams` là một hook được cung cấp bởi thư viện `react-router-dom` để lấy các tham số được định nghĩa trong URL. Thông thường, khi bạn định nghĩa một đường dẫn với các tham số động trong React Router, bạn có thể truy cập chúng bằng cách sử dụng `useParams`.

Ví dụ, nếu bạn có một đường dẫn như `/users/:userId`, thì `userId` là một tham số động và giá trị của nó sẽ thay đổi dựa trên URL hiện tại.

Dưới đây là một ví dụ đơn giản:

```js
import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
  const { userId } = useParams()

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>
    </div>
  )
}

export default UserProfile
```

Trong ví dụ trên, `useParams` được sử dụng để lấy giá trị của tham số `userId` từ URL. Nếu URL là `/users/123`, thì `userId` sẽ có giá trị là `"123"`. Bạn có thể sử dụng giá trị của tham số này để thực hiện các xử lý cụ thể cho người dùng tương ứng.

Lưu ý rằng giá trị của tham số luôn là chuỗi (`string`). Nếu bạn cần sử dụng nó dưới dạng số, hãy chuyển đổi nó bằng cách sử dụng `parseInt` hoặc `Number`.

```js
const userIdAsNumber = parseInt(userId, 10)
// hoặc
const userIdAsNumber = Number(userId)
```

Đảm bảo rằng bạn đã bọc component của mình trong một `<Route>` có đường dẫn chứa tham số để `useParams` hoạt động.
