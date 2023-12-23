# Tìm Hiểu về `break` và `continue` trong JavaScript

## Break

- `break` được sử dụng để thoát khỏi một vòng lặp ngay lập tức khi nó được gặp.
- Nếu `break` được sử dụng trong một vòng lặp `for`, `while`, hoặc `do...while`, nó sẽ ngưng thực hiện vòng lặp và chuyển đến câu lệnh sau vòng lặp.

- Ví dụ:

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break // Thoát khỏi vòng lặp khi i bằng 3
  }
  console.log(i)
}
```

Kết quả:

```js
0
1
2
```

## Continue

- `continue` được sử dụng để bỏ qua phần còn lại của vòng lặp và chuyển đến lần lặp tiếp theo.
- Khi `continue` được gặp, các câu lệnh sau nó trong vòng lặp sẽ bị bỏ qua và vòng lặp sẽ bắt đầu với lần lặp tiếp theo.

- Ví dụ:

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue // Bỏ qua lần lặp khi i bằng 2
  }
  console.log(i)
}
```

Kết quả:

```js
0
1
3
4
```

Cả `break` và `continue` đều giúp kiểm soát dòng thực thi trong vòng lặp và là công cụ hữu ích để xử lý logic lặp trong các tình huống cụ thể.
