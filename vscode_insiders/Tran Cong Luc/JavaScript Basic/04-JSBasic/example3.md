- Trong đoạn mã trước, average là một thuộc tính được thêm vào mỗi đối tượng đội để lưu trữ điểm trung bình của đội đó. Dưới đây là giải thích chi tiết về cách tính điểm trung bình (average):

```jsx
teams.forEach((team) => {
  // Tính tổng điểm của đội và chia cho số trận để có điểm trung bình
  team.average = team.scores.reduce((a, b) => a + b, 0) / team.scores.length
})
```

- Trong phần này, forEach được sử dụng để lặp qua mỗi đội trong mảng teams. Đối với mỗi đội, chúng ta sử dụng reduce để tính tổng điểm của đội từ mảng scores. Hàm reduce nhận vào một hàm callback (trong trường hợp này là (a, b) => a + b) và một giá trị khởi đầu (0 ở đây). Hàm callback này thực hiện phép cộng giữa a (tổng tạm thời) và b (điểm từ mỗi trận đấu). Kết quả cuối cùng của reduce là tổng điểm của đội.

- Sau đó, chúng ta chia tổng điểm cho số trận đấu (team.scores.length) để có được điểm trung bình của đội đó. Kết quả này được lưu vào thuộc tính average của đội trong mảng teams. Điều này giúp chúng ta dễ dàng theo dõi và truy cập điểm trung bình của mỗi đội mà không cần phải duyệt qua lại từng biến riêng lẻ.
