## Giải thích code:

**Đây là chương học về Javascript nâng cao nên hơi khó hiểu**

**Hãy giải thích code chi tiết nhất cho dễ hiểu**

- Trong ví dụ này, `withLogging` là một Higher Order Component. Nó nhận một hàm (`fn`) làm đối số và trả về một hàm mới. Hàm mới này log thông báo vào console mỗi khi nó được gọi và sau đó thực hiện gọi hàm gốc (`fn`) với các đối số tương ứng.

- Bằng cách sử dụng Higher Order Component `withLogging`, ta đã tạo ra hai phiên bản mới của các hàm `add` và `subtract` có chức năng mở rộng. Khi ta gọi `loggedAdd(5, 3)` và `loggedSubtract(10, 7)`, các thông báo log sẽ xuất hiện trong console và sau đó kết quả tính toán sẽ được trả về.

- Higher Order Component trong JavaScript cho phép tái sử dụng logic chung và tính năng của các hàm hoặc phương thức. Nó cung cấp một cách linh hoạt để mở rộng chức năng của các hàm mà không cần thay đổi mã nguồn của chúng.
