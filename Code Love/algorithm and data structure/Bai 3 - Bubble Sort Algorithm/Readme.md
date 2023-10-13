# Các bước để thực hiện thuật toán này (trong ví dụ này mình ví dụ 1 mảng có 4 số. Tuỳ bài, có nhiều bài có nhiều số thì cứ vậy mà làm nhé !)

```js
let a = [100, 7, 5, 4]
```

- i = 0 -> j chạy từ đầu đến số cuối và chuyển số lớn nhất về cuối dãy

- i = 1 -> j chạy từ đầu đến cuối trừ 1 số lớn nhất ở cuối mảng không chạy nữa -> chuyển số lớn thứ
	2 về cuối dãy

- i = 2 -> j chạy từ đầu đến cuối trừ 2 số lớn nhất ở cuối mảng -> chuyển số lớn thứ 3 về cuối dãy

=> kết thúc

