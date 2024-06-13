# Nhận AccessToken mới khi Token hết hạn mà người dùng không cần login lại như Facebook | Axios API

> Trong code bài này thì mình có custom code lại 1 chút xíu cho dễ nhìn và dễ hiểu, nhìn clean code hơn. Và có thể code của mình không giống trong video đâu !!

[Link part 1](https://s.net.vn/iaKC)

AccessToken và RefreshToken đều có cấu trúc dữ liệu giống nhau nhưng chỉ khác thời gian và nơi lưu trữ. Khi AccessToken hết hiệu lực thì nếu một ứng dụng không chú trọng vào trải nghiệm của người dùng thì có thể đưa người dùng quay trở lại với giao diện LOGIN. Nhưng đối với một hệ thống như facebook việc đưa người dùng về giao diện LOGIN mỗi lần như vậy sẽ không phải là giải pháp tốt. Vậy làm thế nào để đạt được điều này, có 2 phương pháp, và video này giới thiệu phương pháp đầu tiên.

Giới thiệu:

```bash
00:00 - Giới thiệu về lịch sử của accessToken và RefreshToken
07:00 - Cách triển khai code
```

```bash
#axios #jsonwebtoken #nodejs
```
