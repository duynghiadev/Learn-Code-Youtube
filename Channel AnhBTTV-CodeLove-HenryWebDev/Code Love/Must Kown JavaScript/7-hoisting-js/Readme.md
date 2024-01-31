# Các điều lưu ý khi khai báo 2 kiểu function

1. function declaration

- Khi ta khai báo function kiểu này thì ta có thể đưa dòng code thực thi hàm lên trên đầu trước khi khai báo hàm vẫn được

```js
// 1. function declaration
showMessageHello()
function showMessageHello() {
  console.log('show message hello')
}
```

- Do `function declaration` nó bị `hoisting` => Nghĩa là khi javascript engine thực thi thì nó move up function đó lên trên top của scope nó đang đứng

- Trong ví dụ này thì mình khai báo function này global nên nó sẽ đưa function khai báo lên trên như thế này:

```js
// 1. function declaration
function showMessageHello() {
  console.log('show message hello')
}
showMessageHello()
```

2. function expresstion

- Nhưng khi ta khai báo function kiểu này thì khi chạy trình duyệt sẽ báo lỗi `Cannot access 'showMessageHello1' before initialization`. Có nghĩa là chúng ta phải khai báo function trước khi chạy

```js
// 2. function expresstion
showMessageHello1()
const showMessageHello1 = () => {
  console.log('show message hello expresstion')
}
```

- Với kiểu khai báo function như này không có `hoisting`, nên khi thực thi code thì nó sẽ báo lỗi

- Nó bắt buộc chúng ta phải khai báo function trước khi thực thi code. Chúng ta phải sửa code lại như này:

```js
// 2. function expresstion
const showMessageHello1 = () => {
  console.log('show message hello expresstion')
}
showMessageHello1()
```
