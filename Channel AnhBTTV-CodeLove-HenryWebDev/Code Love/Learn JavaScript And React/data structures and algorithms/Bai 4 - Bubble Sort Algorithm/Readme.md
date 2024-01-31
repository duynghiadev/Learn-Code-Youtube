# Các bước để thực hiện thuật toán này (trong ví dụ này mình ví dụ 1 mảng có 4 số. Tuỳ bài, có nhiều bài có nhiều số thì cứ vậy mà làm nhé !)

```js
let a = [100, 7, 5, 4]
```

- i = 0 -> j chạy từ đầu đến số cuối và chuyển số lớn nhất về cuối dãy

- i = 1 -> j chạy từ đầu đến cuối trừ 1 số lớn nhất ở cuối mảng không chạy nữa -> chuyển số lớn thứ
	2 về cuối dãy

- i = 2 -> j chạy từ đầu đến cuối trừ 2 số lớn nhất ở cuối mảng -> chuyển số lớn thứ 3 về cuối dãy

=> kết thúc

## Xin lưu ý:

- i = 0 có nghĩa là lấy số đầu tiên trong mảng đem đi so sánh với các số khác. Trong ví này i = 0
	tức là số 100 trong mảng.

- j = n - 1. Có nghĩa là trong đoạn code này j là 1 biến gán, n là các index trong mảng. Trong mảng
	gồm có 4 phần tử, mà trong mảng các index bắt đầu từ số 0, nên chỉ còn 3 phần tử thôi
	(cho nên mới có n - 1, `n` là 4 phần từ trong mảng, `- 1` có nghĩa `4 - 1 = 3` => Mảng đó gồm 3
	phần tử). Sau đó ta gán vào biến j để lưu các phần tử trong array đó.