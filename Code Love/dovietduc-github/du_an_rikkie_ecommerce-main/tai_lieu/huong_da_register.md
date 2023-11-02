# Tài Liệu Màn Hình Register

## Khi nhấn vào button regiser chúng ta thực hiện các logic sau:

## Thực Hiện Validate Dữ Liệu Đầu Vào Trên Form

> Việc validate sẽ do người làm trang web quy định, cụ thể màn hình này yêu cầu:

1. Tên không được để trống
2. Email không được để trông
3. Email phải đúng định dạng chuẩn email
4. password không được để trống
5. password phải có ít nhất 8 kí tự cho bảo mật
6. password phải có ít nhất 1 chữ hoa, 1 chữ thường, 1 kí tự đặc biệt, 1 kí tự số
7. confirm password không được để trống
5. confirm password phải có ít nhất 8 kí tự cho bảo mật
6. confirm password phải có ít nhất 1 chữ hoa, 1 chữ thường, 1 kí tự đặc biệt, 1 kí tự số
8. confirm password phải trùng password

> Validate sẽ được thông báo như sau:

### Nếu dữ liệu không hợp lệ bạn cần hiển thị như sau:

1. chọn ô input nhập không hợp lệ cho mầu đỏ
2. Hiển thị nội dung lỗi có mầu đỏ dưới ô input

### Nếu dữ liệu hợp lệ bạn cần hiển thị như sau:

1. chọn ô input nhập không hợp lệ cho mầu xanh
2. Xóa nội dung lỗi có mầu đỏ dưới ô input

> Nhấn vào biểu tượng con mắt, thực hiện ẩn hiệ password

1. chuẩn bị giao diện
2. Thực hiện logic khi click (chuyển đổi type từ text -> password và từ password ->text)

> Bắt sự kiện keyup và thực hiện validation


1. Sự kiện keyup được thực thi khi bạn ghõ bất kì phím nào trên bàn phím
2. Mục đích: Thông báo hợp lệ hay không hợp lệ ngay lập tức cho người dùng
3. Nó tăng trải nghiệm cho người dùng



