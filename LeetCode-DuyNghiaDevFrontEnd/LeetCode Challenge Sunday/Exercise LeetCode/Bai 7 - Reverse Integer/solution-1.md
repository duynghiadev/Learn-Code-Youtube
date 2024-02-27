# Giải thích thuật toán

- Hãy giải thích thuật toán đảo ngược số dưới dạng giải thích từng bước một, một cách dễ hiểu:

1. `Làm cho số đầu vào thành số dương và chuyển thành chuỗi`: Đầu tiên, thuật toán kiểm tra xem số đầu vào `x` có là số âm không (với hàm `Math.abs(x)`). Sau đó, nó chuyển số này thành chuỗi (với `.toString()`) để có thể xử lý từng chữ số.

2. `Lưu các chữ số vào một mảng ngược từ cuối về đầu`: Thuật toán duyệt qua từng chữ số của chuỗi số `s` từ cuối về đầu (bằng cách sử dụng vòng lặp `for` và chỉ số `i` giảm dần). Mỗi chữ số được lưu vào một mảng `arr`. Kết quả là `arr` sẽ chứa các chữ số của số đó theo thứ tự đảo ngược.

3. `Chuyển chuỗi đảo ngược thành số`: Mảng `arr` chứa các chữ số theo thứ tự đảo ngược. Chúng ta sử dụng `.join("")` để kết hợp các chữ số trong mảng thành một chuỗi số đảo ngược và sau đó dùng `Number()` để chuyển đổi chuỗi này thành một số nguyên.

4. `Kiểm tra giới hạn số nguyên 32-bit`: Nếu số nguyên đã đảo ngược vượt quá giới hạn của số nguyên 32-bit (tức là ngoài phạm vi từ -2^31 đến 2^31 - 1), thuật toán trả về 0 để tránh tràn số. Điều này được kiểm tra với điều kiện `if (result > 2 ** 31 - 1)`.

5. `Trả về kết quả đảo ngược cuối cùng`: Nếu số ban đầu là số âm, thuật toán đảo ngược cuối cùng sẽ nhân với -1 để giữ nguyên dấu của số ban đầu. Cuối cùng, thuật toán trả về kết quả đảo ngược số nguyên.

## Giải thích: Dấu `**` là dấu mũ đó à ?

- Đúng, dấu `**` trong JavaScript là toán tử mũ, nó được sử dụng để tính lũy thừa. Trong trường hợp này, `2 ** 31` đại diện cho 2 lũy thừa 31, tức là 2 nhân với chính nó 31 lần, là giá trị lớn nhất có thể được biểu diễn bằng một số nguyên 32-bit không dấu. Nó tương đương với 2,147,483,648 (hoặc -2,147,483,648 nếu là số nguyên có dấu).

## Vì sao ta lại chuyển từ số sang chuỗi xong sau đó lại chuyển từ chuỗi sang số. Làm như vậy để làm gì ?

- Chuyển đổi số sang chuỗi và sau đó từ chuỗi sang số trong thuật toán đảo ngược số (`reverse`) được thực hiện để xử lý dễ dàng hơn các chữ số của số đó. Dưới đây là lý do:

1. Chuyển từ số sang chuỗi:

- Bước đầu tiên là chuyển số `x` thành chuỗi để dễ dàng truy cập từng chữ số (index) của nó. Ví dụ, nếu `x` là số `12345`, khi chuyển thành chuỗi, nó sẽ trở thành chuỗi `"12345"`.
- Điều này cần thiết vì khi `x` là một con số, chúng ta không thể truy cập trực tiếp các chữ số (index) bên trong nó dựa trên chỉ số như một mảng. Ví dụ: `x[0]` sẽ không hoạt động với `x` là số. Nhưng khi `x` được chuyển thành chuỗi, ta có thể sử dụng chỉ số (index) để truy xuất từng ký tự của chuỗi.

2. Lưu các chữ số (index) vào mảng:

- Sau khi có chuỗi số `s`, thuật toán duyệt qua từng ký tự của chuỗi này và lưu chúng vào một mảng `arr`.
- Ví dụ: Nếu `s` là chuỗi `"12345"`, thì mảng `arr` sẽ lưu các giá trị `['1', '2', '3', '4', '5']`.
- Việc lưu các ký tự này vào mảng giúp chúng ta sắp xếp lại các chữ số (index) theo thứ tự đảo ngược. Chúng ta bắt đầu từ cuối chuỗi và di chuyển về phía trước.

3. Chuyển từ chuỗi sang số:

- Cuối cùng, sau khi mảng `arr` chứa các chữ số (index) theo thứ tự đảo ngược, chúng ta sử dụng `.join("")` để kết hợp các ký tự trong mảng này thành một chuỗi số.
- Ví dụ: Nếu `arr` chứa `['5', '4', '3', '2', '1']`, thì sau khi sử dụng `.join("")`, chúng ta có chuỗi `"54321"`.
- Cuối cùng, ta sử dụng `Number()` để chuyển chuỗi này thành một số nguyên. Trong trường hợp này, ta chuyển thành số nguyên là `54321`.

- Tóm lại, việc chuyển đổi giữa số và chuỗi trong thuật toán này giúp ta dễ dàng truy cập, sắp xếp lại và xử lý các chữ số để có được kết quả đảo ngược của số ban đầu. Điều này giúp ta giải quyết bài toán đảo ngược số một cách hiệu quả.

4. Đoạn code này có nghĩa là đảo ngược một chuỗi, sau đó đưa vào 1 mảng đúng không ?

```jsx
for (let i = s.length - 1; i >= 0; i--) {
  arr.push(s[i]);
}
```

- Đúng, đoạn mã trên được sử dụng để đảo ngược một chuỗi và sau đó đưa kết quả vào một mảng mới.
- Biến `i` được khởi tạo với giá trị bằng độ dài của chuỗi `s` trừ `1` (`s.length - 1`), và sau đó mỗi lần lặp, giá trị của `i` được giảm đi `1` (`i--`). Vòng lặp tiếp tục cho đến khi `i` không còn lớn hơn hoặc bằng `0`.
- Trong mỗi lần lặp, ký tự tại vị trí `i` của chuỗi `s` được lấy ra và đẩy vào mảng `arr` bằng phương thức `push()`. Kết quả là một mảng mới chứa các ký tự của chuỗi `s` theo thứ tự ngược lại.

- Ví dụ, nếu `s` là chuỗi `"Hello"`, sau khi thực thi đoạn mã trên, giá trị của mảng `arr` sẽ là `["o", "l", "l", "e", "H"]`.
