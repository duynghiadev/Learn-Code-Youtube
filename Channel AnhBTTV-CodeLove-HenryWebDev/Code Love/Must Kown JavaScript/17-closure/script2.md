![Mô phỏng closure bằng hình ảnh](scrip2.png)

- Biến name vẫn ở trong bộ nhớ, chứ nó không có skip

- Khi chúng ta khai báo 1 biến ở trong 1 scope nào đó, mà trong scope đó chưa khai báo => thì theo quy luật closure thì nó tiếp tục ra scope bên ngoài để tìm biến đó => nếu scope bên ngoài cũng không có biến đó luôn => Nếu ở scope bên ngoài tồn tại biến đó => thì nó sẽ lấy giá trị của biến đó luôn

- Trong trình duyệt nó tự lưu trữ giá trị của closure hiện tại => Khi giá trị của biến đó thay đổi => thì ngay lập tức giá trị của biến đó trong closure cũng thay đổi luôn 