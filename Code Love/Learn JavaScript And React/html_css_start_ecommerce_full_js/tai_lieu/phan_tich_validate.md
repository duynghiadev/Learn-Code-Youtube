# Phân tích tài liệu validate cho phần register

## Phần yêu cầu về bài toán cho trước (Input)

Đây là yêu cầu cho validate trường nhập thông tin **name**

- Tên không được để **trống**

Đây là yêu cầu cho validate trường nhập thông tin **email**

- email không được để **trống**
- email phải có **ít nhất 3 kí tự**
- email phải đúng **định dạng email**

Đây là yêu cầu cho validate trường nhập thông tin **password**

- password không được để **trống**
- password phải **có ít nhất 8 kí tự cho bảo mật**

Đây là yêu cầu cho validate trường nhập thông tin **confirm_password**

- confirm_password không được để **trống**
- confirm_password phải **có ít nhất 8 kí tự cho bảo mật**
- confirm_password phải **trùng với giá trị password**

## Bài toán cần được giải quyết (Output)

- Hiển thị lỗi validate **cho từng ô input**
- Khi tất cả input **hợp lệ thì sẽ submit form**
- Thêm các sự kiện khác nhau để hiển thị lỗi **tốt cho trải nghiệm người dùng (phần phụ)**
