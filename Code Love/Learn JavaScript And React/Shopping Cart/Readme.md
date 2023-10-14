## Trong series lần này thì chúng ta học về những kiến thức cơ bản mà chúng ta bắt buộc phải biết để làm về reactjs

- Lưu ý: nên học những kiến thức nền tảng cho thật chắc vào thì mới có thể học những thứ nâng cao
	hơn.

- Đi chậm mà chắc. **Hành trình 1 dặm bước chân đều bắt đầu từ 1 bước chân**

- Cố gắng học một 1 ngôn ngữ (language) thì các ngôn ngữ sau đó chúng ta học rất dễ, chỉ là khác
	nhau cú pháp thôi

> [Link Tutorial](https://bom.so/Syj17x)

## Trước khi bắt tay vào làm các dự án thì chúng ta nên đi phân tích các yêu cầu của dự án, đây là điều nên làm dành cho các lập trình viên

> Bằng cách phân tích các vấn đề này ra trước, nó sẽ giúp cho mình tiết kiệm rất nhiều thời gian khi
> code

1. Xác định state

- state 1

```js
[
	{
		name,
		price,
		amount
	},
	{
		name,
		price,
		amount
	},
	{
		name,
		price,
		amount
	}
]
```

- Kết luận: chỉ có 1 state lưu mảng các object cart

2. Xác định state đặt ở component nào ?

- Phần chia component
- Xác định component dựa vào điều kiện
- Khi 2 component không có quan hệ cha con mà cần đồng bộ dữ liệu với nhau thì chúng ta cần tìm
	component cha của 2 component trên và đặt state trong component cha
- Khi component cha render thì toàn bộ các component con, cháu của nó sẽ bị render lại (**Quy tắc
	này là hiển nhiên 👍**)
