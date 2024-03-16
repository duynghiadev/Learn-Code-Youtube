## Tìm hiểu về Hoisting trong JavaScript

- Hoisting là một đặc tính trong JavaScript mà cho phép các biến và các hàm được "kéo lên đầu" của
  phạm vi mà chúng được khai báo trước khi mã JavaScript được thực thi. Tuy nhiên, hãy lưu ý rằng
  chỉ khai báo được "kéo lên," không phải giá trị của biến.

1. Hoisting với Biến:

- Khi một biến được khai báo, JavaScript sẽ "kéo lên đầu" phạm vi của nó:

```js
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
```

- Trong ví dụ trên, biến `x` được khai báo và sau đó được gán giá trị. Khi bạn log `x` trước khi gán
  giá trị, kết quả sẽ là `undefined` do khai báo biến `x` đã được "kéo lên đầu."

2. Hoisting với Hàm:

- Hoisting cũng áp dụng cho khai báo hàm. Khi một hàm được khai báo, nó cũng được "kéo lên đầu":

```js
sayHello(); // Output: "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}
```

- Trong trường hợp này, khi hàm `sayHello` được gọi trước khi nó được định nghĩa trong mã, kết quả
  là `Hello, World!` do hàm đã được "kéo lên đầu."

3. Hoisting với Let và Const:

- Với `let` và `const`, hoisting cũng xảy ra, nhưng có một sự khác biệt quan trọng so với `var`.
  Biến được khai báo với `let` và `const` không bị "kéo lên đầu" với giá trị `undefined`, và thay
  vào đó, sẽ ném ra một `ReferenceError` nếu bạn cố truy cập biến trước khi nó được khai báo.

```js
console.log(y); // Error: Cannot access 'y' before initialization
let y = 10;
```

## Lưu ý quan trọng:

1. Chỉ phần khai báo của biến và hàm mới được hoisted, không phải phần gán giá trị.

2. Hoisting chỉ xảy ra trong phạm vi của biến và hàm, không phải bên trong các khối lệnh (block
   scope) khi sử dụng `let` và `const`.

- Sử dụng biến và hàm trước khi chúng được khai báo có thể tạo ra các lỗi khó debug, nên luôn làm
  việc với biến và hàm sau khi chúng đã được khai báo.

## Chú ý:

- Tại sao 1 cái là biến thì in ra không được, còn 1 cái là hàm thì in ra được?

```js
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
```

```js
sayHello(); // Output: "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}
```

- Điều này liên quan đến cách JavaScript xử lý hoisting với biến và hàm.

1. Biến (`var`):

- Khi bạn khai báo biến bằng từ khóa `var`, phần khai báo của biến được hoisted (kéo lên đầu) trong
  phạm vi của hàm hoặc global scope. Tuy nhiên, chỉ khai báo được "kéo lên," không phải giá trị của
  biến. Do đó, khi bạn cố gọi `console.log(x)` trước khi biến `x` được gán giá trị, giá trị của `x`
  là `undefined`.

```js
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
```

2. Hàm:

- Khi bạn khai báo hàm, cả phần khai báo và định nghĩa hàm đều được hoisted. Do đó, bạn có thể gọi
  hàm trước khi nó được định nghĩa trong mã.

```js
sayHello(); // Output: "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}
```

- Trong trường hợp này, cả khai báo và định nghĩa của `sayHello` đều được hoisted, cho phép bạn gọi
  hàm trước khi nó xuất hiện trong mã.

- Lưu ý rằng với `let` và `const`, cũng có hoisting, nhưng chúng không được gán giá trị `undefined`.
  Thay vào đó, chúng sẽ ném ra một `ReferenceError` nếu bạn cố truy cập chúng trước khi khai báo.

```js
console.log(y); // Error: Cannot access 'y' before initialization
let y = 10;
```

- Tóm lại, hiểu về cách hoisting hoạt động giúp bạn tránh gặp những hiểu lầm và lỗi khi viết mã
  JavaScript.
