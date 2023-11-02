# Tài Liệu Màn Hình Login

## Khi nhấn vào button login chúng ta thực hiện các logic sau:

## Thực Hiện Validate Dữ Liệu Đầu Vào Trên Form

> Việc validate sẽ do người làm trang web quy định, cụ thể màn hình này yêu cầu:

1. Email không được để trông
2. Email phải đúng định dạng chuẩn email
3. password không được để trống
4. password phải có ít nhất 8 kí tự cho bảo mật
5. password phải có ít nhất 1 chữ hoa, 1 chữ thường, 1 kí tự đặc biệt, 1 kí tự số

> Validate sẽ được thông báo như sau:

### Nếu dữ liệu không hợp lệ bạn cần hiển thị như sau:

1. chọn ô input nhập không hợp lệ cho mầu đỏ
2. Hiển thị nội dung lỗi có mầu đỏ dưới ô input

### Nếu dữ liệu hợp lệ bạn cần hiển thị như sau:

1. chọn ô input nhập không hợp lệ cho mầu xanh
2. Xóa nội dung lỗi có mầu đỏ dưới ô input

## Khi validate thành công chúng ta thực hiện logic như sau:

1. Nếu thông tin email và pass trùng khớp với dữ liệu trong localStorage
+ Thực hiện cập nhất status = 'active' cho user login
+ Chuyển sang trang chủ index.html

2. Nếu thông tin email và pass không trùng khớp với dữ liệu localStorage
+ Hiển thị lỗi ở trên form login với nội dung: Email hoặc pass không đúng



