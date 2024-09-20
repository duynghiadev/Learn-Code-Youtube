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

## Bonus thêm khái niệm thuật toán `Bubble Sort`

# Bubble Sort

Đây là thuật toán nổi bọt

Bubble sort là một thuật toán sắp xếp đơn giản được sử dụng để sắp xếp một dãy số theo thứ tự tăng dần hoặc giảm dần. Thuật toán này được gọi là "bubble sort" vì trong quá trình sắp xếp, các phần tử của dãy sẽ "nổi lên" dần dần đến đúng vị trí của chúng như những bong bóng nổi lên trên mặt nước.

## Ý tưởng chính

Ý tưởng chính của bubble sort là so sánh các cặp phần tử liên tiếp và hoán đổi chúng nếu chúng không ở đúng thứ tự. Quá trình này được lặp lại cho đến khi không còn cặp phần tử nào cần hoán đổi nữa, tức là dãy đã được sắp xếp.

Dưới đây là một ví dụ cách bubble sort hoạt động trên một dãy số:

1. **Bước 1:**

   - Dãy số ban đầu: [5, 3, 8, 4, 2]
   - So sánh 5 và 3, hoán đổi vị trí.
   - Dãy sau bước 1: [3, 5, 8, 4, 2]

2. **Bước 2:**

   - So sánh 5 và 8, không cần hoán đổi.
   - So sánh 8 và 4, hoán đổi vị trí.
   - Dãy sau bước 2: [3, 5, 4, 8, 2]

3. **Bước 3:**

   - So sánh 5 và 4, hoán đổi vị trí.
   - So sánh 5 và 8, không cần hoán đổi.
   - Dãy sau bước 3: [3, 4, 5, 8, 2]

4. **Bước 4:**

   - So sánh 5 và 8, không cần hoán đổi.
   - So sánh 8 và 2, hoán đổi vị trí.
   - Dãy sau bước 4: [3, 4, 5, 2, 8]

5. **Bước 5:**

   - So sánh 5 và 2, hoán đổi vị trí.
   - So sánh 5 và 8, không cần hoán đổi.
   - Dãy sau bước 5: [3, 4, 2, 5, 8]

6. **Bước 6:**

   - So sánh 4 và 2, hoán đổi vị trí.
   - So sánh 4 và 5, không cần hoán đổi.
   - So sánh 5 và 8, không cần hoán đổi.
   - Dãy sau bước 6: [3, 2, 4, 5, 8]

7. **Bước 7:**
   - So sánh 3 và 2, hoán đổi vị trí.
   - So sánh 3 và 4, không cần hoán đổi.
   - So sánh 4 và 5, không cần hoán đổi.
   - So sánh 5 và 8, không cần hoán đổi.
   - Dãy sau bước 7: [2, 3, 4, 5, 8]

Dãy số sau 7 bước trở nên đã được sắp xếp. Bubble sort có hiệu suất thấp và không được ưa chuộng trong các ứng dụng thực tế với dữ liệu lớn vì có thể đòi hỏi nhiều bước so sánh và hoán đổi.

## Giải thích code trong file break-continue-3.js

`for (let k = 0; k < matrix[i].length - j - 1; k++) {`. Trong dòng code đó vì sao phải trừ 1

Trong vòng lặp sắp xếp bong bóng (bubble sort), điều kiện `k < matrix[i].length - j - 1` là một biện pháp tối ưu để tránh so sánh các phần tử đã được sắp xếp đúng ở cuối mảng trong mỗi lần lặp của `j`.

Cụ thể, sau mỗi lần lặp của `j`, giá trị lớn nhất đã được đưa lên cuối của mảng, vì vậy chúng ta không cần so sánh lại phần tử này. Bằng cách giảm giá trị `j` khỏi `matrix[i].length`, chúng ta có thể tránh so sánh các phần tử cuối cùng của mảng mỗi lần lặp.

Hãy xem xét một ví dụ cụ thể:

```js
const array = [5, 2, 9, 8, 1, 6, 4, 7, 3]

for (let j = 0; j < array.length; j++) {
  for (let k = 0; k < array.length - j - 1; k++) {
    if (array[k] > array[k + 1]) {
      // Swap giá trị nếu cần
      const temp = array[k]
      array[k] = array[k + 1]
      array[k + 1] = temp
    }
  }
}

console.log('Mảng đã sắp xếp:', array)
```

Trong ví dụ này, giả sử `array` là `[5, 2, 9, 8, 1, 6, 4, 7, 3]`. Giá trị `j` tăng lên sau mỗi lần lặp, và `array.length - j - 1` đảm bảo rằng chúng ta không so sánh các phần tử cuối cùng đã được sắp xếp đúng.
