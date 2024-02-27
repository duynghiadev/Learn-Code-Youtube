### This Keyword

- Từ khoá this trong JavaScript đề cập đến đối tượng mà nó thuộc về

### Đặc tính

1. Trong một phương thức, this tham chiếu đến đối tượng chi cập phương thức (đối tượng trước dấu chấm ".")
2. Đứng ngoài phương thức, this tham chiếu tới đối tượng global

### Lưu ý

- this trong hàm tạo là đại diện cho đối tượng sẽ được tạo
- this trong một hàm là undefined khi ở strict mode
- các phương thức bind(), call(), apply() có thể tham chiếu this tới các đối tượng khác
