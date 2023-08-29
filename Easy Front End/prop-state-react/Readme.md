## Cách chia Component trong ReactJS

## Hai loại components

- **Container**: Smart Component

  - Quản lý, xử lsy dữ liệu
  - Không quan tâm render UI như thế nào
  - Chỉ quan tâm render như thế nào
  - Có thể chứa container con và các components

- **Component**: Dumb component
  - Cho gì render đó
  - Không cần biết dữ liệu đến từ đâu
  - Thông thường có props, không có state
  - tái sử dụng, với props khác nhau, render khác nhau
