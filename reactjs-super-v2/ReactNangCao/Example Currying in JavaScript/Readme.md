- Trong file markdown anh Được có viết 1 ví dụ về `Currying` trong JavaScript

Ví dụ về currying: Tìm những số từ 0 đến n (không tính n) thõa mãn điều kiện nhất định

```js
const findNumber = (num) => (func) => {
  const result = []
  for (let i = 0; i < num; i++) {
    if (func(i)) {
      result.push(i)
    }
  }
  return result
}
findNumber(10)((number) => number % 2 === 1) // <10 và số lẻ
findNumber(20)((number) => number % 2 === 0) // <20 và số chẳn
findNumber(30)((number) => number % 3 === 2) // <30 và số chia 3 dư 2
```

Đây là 1 ví dụ nâng cao về Higher Order Component trong React (cũng như là Higher Order Function
trong JavaScript)

- Phần này rất quan trọng khi code ReactJS. Nhưng nó cũng là 1 kiến thức nâng cao mà các bạn cần nắm
  vững để phát triển sau này

- Trong folder này chúng ta cùng ôn tập về `Currying trong JavaScript`