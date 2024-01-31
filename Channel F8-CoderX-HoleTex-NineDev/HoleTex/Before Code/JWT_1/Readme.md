# Project này học từ channel HoleTex

[Link channel](https://www.youtube.com/@holetex)

## Bài này học có tên là: JWT (JSON Web Token) là gì? Hướng dẫn tạo JWT Auth trong NodeJS

[Link bài học](https://www.youtube.com/watch?v=LxeYH4D1YAs)

## Nêu khái niệm tổng quan về `Authentication` (xác thực) và `Authorization` (uỷ quyền)

1. Authentication (xác thực):

- Là hành động xác thực, kiểm tra người dùng có phải là một người dùng hợp lệ trong hệ thống hay không

2. Authorization (uỷ quyền):

- Là quá trình cấp cho người dùng quyền truy cập vào một tài nguyên hoặc chức năng cụ thể

3. ❌ Lưu ý: ❌

- `Authorization` là bước thực hiện sau `Authentication`.
- Bởi vì trước tiên người dùng cần cung cấp một danh tính hợp lệ trước khi quản trị viên của tổ chức đó cấp cho họ quyền để truy cập vào các tài nguyên hoặc một chức năng cụ thể. Và `Authorization` bước thực hiện sau bước `Authentication`.
- Trước tiên người dùng cần cung cấp một danh tính hợp lệ trước khi được quản trị viên cung cấp quyền để truy cập vào các tài nguyên.
- Và trong ngữ cảnh ứng dụng web, ngoài chức năng cung cấp quyền cho người dùng để truy cập vào một tài nguyên.
- Ví dụ như chúng ta cung cấp quyền cho người dùng để có thể gọi và lấy dữ liệu từ một hay nhiều API thì `Authorization` vẫn có thể đảm bảo rằng người đang gửi request tới API chính là người đã đăng nhập vào hệ thống thành công trước đó. Mà JWT chúng ta đang nói đến ở đây đó chính là `Authorization`
