## Đây là bài học: Closures JavaScript #4 - Luyện Tập

![Ảnh câu hỏi được đặt ra trong bài này](script3.png)

![Ảnh phân tích các biến lưu giá trị vào trong bộ nhớ](script3-memory.png)

- Mỗi lần chạy thì nó sẽ tạo ra 3 instance khác nhau. 
- Dẫn đến 3 biến đó đều được lưu vào trong bộ nhớ ở 3 địa chỉ khác nhau.
- Cho nên các tham số truyền vào 3 hàm đó không liên quan đến nhau => do nó lưu tại 3 địa chỉ khác nhau
- Thực tế thì 3 hàm này nó là các object độc lập với nhau, cho nên là khi chạy runtime thì nó trả về 3 hàm khác nhau => 3 object được lưu tại vị trí khác nhau, cho nên nó tham chiếu (reference) đến 3 vị trí khác nhau