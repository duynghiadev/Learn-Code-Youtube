# Các bước để thực hiện thuật toán này (trong ví dụ này mình có ví dụ 1 mảng có 4 số. Tuỳ bài, có nhiều bài có nhiều số thì cứ vậy mà làm nhé !)

```js
let a = [100, 7, 5, 4]
// 4 số này thực chất ra thì: 2 + 1 + 1 thôi. 
// Mà bài sắp xếp 2 số mình làm rồi và 1 số thì cũng như vậy. Nên suy ra thì trường hợp này mình cũng có thể làm được ngay từ bài 2
```

- Nếu ta có phần tử i = 0 -> thì j chạy từ đầu đến số cuối và chuyển số lớn nhất về cuối dãy (cụ thể ở đây là số 100)

- Nếu i = 1 -> thì j chạy từ đầu đến cuối và trừ 1 số lớn nhất ở cuối mảng không chạy nữa -> chuyển số lớn thứ 2 về cuối dãy (cụ thể ở đây là số 7 và 100)

- Nếu i = 2 -> thì j chạy từ đầu đến cuối trừ và 2 số lớn nhất ở cuối mảng -> chuyển số lớn thứ 3 về cuối dãy (cụ thể ở đây là số 5, số 7 và 100)

=> kết thúc

- Giải thích thêm vì sao ở đây chúng ta chạy đến i = 2 là dừng:
  - Đầu tiên, chúng ta cần xem mảng có được 4 phần tử. Nhưng mà đây là phép toán so sánh nên chúng ta cần 2 phần tử để so sánh cùng 1 lúc nên mình sẽ lấy chiều dài mảng đó và trừ đi 1 (còn 3 phần tử thôi).
  - Bởi vì các phần tử trong mảng khi mình dùng phương pháp lặp thì các phần tử đó bắt đầu từ số 0. Cho nên khi mình lặp tới số 2 có nghĩa là mình đã lặp được 3 phần tử rồi đấy.