### Tìm hiểu về các phương thức every, some, includes

- Các phương thức `every()`, `some()`, và `includes()` là các phương thức của đối tượng Array trong JavaScript và được sử dụng để kiểm tra điều kiện trong mảng.

1. Phương thức `every()`:

- Phương thức `every()` kiểm tra xem tất cả các phần tử của mảng có thỏa mãn một điều kiện nhất định hay không. Nó trả về `true` nếu tất cả các phần tử đều thỏa mãn điều kiện, ngược lại trả về `false`.

- Cú pháp:

```js
array.every(callback(element[, index[, array]])[, thisArg]);
```

- `callback`: Hàm kiểm tra cho mỗi phần tử của mảng. Trả về `true` để tiếp tục kiểm tra với phần tử tiếp theo, và `false` để dừng lại.

- Ví dụ:

```js
const numbers = [1, 2, 3, 4, 5]

const allGreaterThanZero = numbers.every(function (num) {
  return num > 0
})

console.log(allGreaterThanZero) // Output: true
```

2. Phương thức `some()`:

- Phương thức `some()` kiểm tra xem có ít nhất một phần tử của mảng thỏa mãn một điều kiện nhất định hay không. Nó trả về `true` nếu ít nhất một phần tử thỏa mãn điều kiện, ngược lại trả về `false`.

- Cú pháp:

```js
array.some(callback(element[, index[, array]])[, thisArg]);
```

- `callback`: Hàm kiểm tra cho mỗi phần tử của mảng. Trả về `true` để dừng kiểm tra và trả về kết quả, và `false` để tiếp tục kiểm tra với phần tử tiếp theo.

- Ví dụ:

```js
const numbers = [1, 2, 3, 4, 5]

const hasEvenNumber = numbers.some(function (num) {
  return num % 2 === 0
})

console.log(hasEvenNumber) // Output: true
```

3. Phương thức `includes()`:

- Phương thức `includes()` kiểm tra xem một giá trị cụ thể có tồn tại trong mảng hay không. Nó trả về `true` nếu giá trị được tìm thấy, ngược lại trả về `false`.

- Cú pháp:

```js
array.includes(searchElement[, fromIndex]);
```

- `searchElement`: Giá trị cần kiểm tra.
- `fromIndex` (tùy chọn): Chỉ mục bắt đầu tìm kiếm. Nếu không được cung cấp, mặc định là 0.

- Ví dụ:

```js
const fruits = ['apple', 'banana', 'orange']

const hasBanana = fruits.includes('banana')

console.log(hasBanana) // Output: true
```

- Tóm lại, `every()`, `some()`, và `includes()` là những phương thức hữu ích để kiểm tra điều kiện trong mảng trong JavaScript.

### Cho ví dụ về mấy cái đó và kết hợp với Array method

- Dưới đây là một ví dụ kết hợp giữa các phương thức `every()`, `some()`, và `includes()` cùng với các phương thức `filter()` và `map()` của đối tượng Array:

```js
// Mảng chứa các thông tin về người dùng
const users = [
  { id: 1, name: 'Alice', age: 28, hobbies: ['reading', 'hiking'] },
  { id: 2, name: 'Bob', age: 35, hobbies: ['coding', 'gardening'] },
  { id: 3, name: 'Charlie', age: 22, hobbies: ['cooking', 'painting'] }
]

// Kiểm tra xem tất cả người dùng có sở thích 'reading' không
const allUsersReadBooks = users.every((user) => user.hobbies.includes('reading'))

console.log('Tất cả người dùng đều đọc sách:', allUsersReadBooks)

// Kiểm tra xem có ít nhất một người dùng có tuổi trên 30 không
const hasUserAbove30 = users.some((user) => user.age > 30)

console.log('Có người dùng nào có tuổi trên 30 không:', hasUserAbove30)

// Lọc ra những người dùng có sở thích 'gardening' và tạo một mảng mới chỉ chứa tên của họ
const gardeningUsers = users
  .filter((user) => user.hobbies.includes('gardening'))
  .map((user) => user.name)

console.log("Người dùng có sở thích là 'gardening':", gardeningUsers)
```

- Trong ví dụ này:

  - `every()` được sử dụng để kiểm tra xem tất cả người dùng có sở thích đọc sách không.
  - `some()` được sử dụng để kiểm tra xem có ít nhất một người dùng có tuổi trên 30 không.
  - `includes()` được sử dụng trong `every()` và `filter()` để kiểm tra sở thích và lọc người dùng có sở thích cụ thể.
  - `filter()` được sử dụng để lọc ra những người dùng có sở thích là 'gardening'.
  - `map()` được sử dụng để tạo một mảng mới chỉ chứa tên của những người dùng có sở thích là 'gardening'.

- Kết quả thực thi có thể sẽ như sau:

```m
Tất cả người dùng đều đọc sách: false
Có người dùng nào có tuổi trên 30 không: true
Người dùng có sở thích là 'gardening': [ 'Bob' ]
```

- Đây chỉ là một ví dụ minh họa và bạn có thể thực hiện nhiều kết hợp khác nhau giữa các phương thức để thích ứng với yêu cầu cụ thể của bạn.

### Cho ví dụ về mấy cái đó và kết hợp với Array method (khó hơn)

- Dưới đây là một ví dụ cực khó và phức tạp hơn, kết hợp nhiều phương thức của đối tượng `Array` để xử lý dữ liệu và tính toán:

```js
// Mảng chứa thông tin về các đơn hàng
const orders = [
  {
    id: 1,
    products: [
      { name: 'Laptop', price: 1200 },
      { name: 'Mouse', price: 20 }
    ],
    discount: 0.1
  },
  {
    id: 2,
    products: [
      { name: 'Smartphone', price: 800 },
      { name: 'Headphones', price: 50 }
    ],
    discount: 0.05
  },
  {
    id: 3,
    products: [
      { name: 'Tablet', price: 500 },
      { name: 'Keyboard', price: 30 }
    ],
    discount: 0.15
  },
  {
    id: 4,
    products: [
      { name: 'Monitor', price: 300 },
      { name: 'Printer', price: 100 }
    ],
    discount: 0.2
  }
]

// Tính tổng giá trị đơn hàng sau khi áp dụng giảm giá
const totalOrderValue = orders.reduce((total, order) => {
  const discountedTotal = order.products.reduce((subtotal, product) => {
    return subtotal + product.price * (1 - order.discount)
  }, 0)
  return total + discountedTotal
}, 0)

console.log('Tổng giá trị đơn hàng sau khi áp dụng giảm giá:', totalOrderValue)

// Kiểm tra xem tất cả đơn hàng có giảm giá không
const allOrdersHaveDiscount = orders.every((order) => order.discount > 0)

console.log('Tất cả đơn hàng có giảm giá không:', allOrdersHaveDiscount)

// Lọc ra các sản phẩm có giá trên 100
const highPricedProducts = orders
  .flatMap((order) => order.products)
  .filter((product) => product.price > 100)
  .map((product) => product.name)

console.log('Các sản phẩm có giá trên 100:', highPricedProducts)
```

- Trong ví dụ này:

  - Sử dụng `reduce()` để tính tổng giá trị của tất cả đơn hàng sau khi áp dụng giảm giá cho từng sản phẩm.
  - Sử dụng `every()` để kiểm tra xem tất cả đơn hàng có giảm giá không.
  - Sử dụng `flatMap()`, `filter()`, và `map()` để lọc ra tất cả các sản phẩm có giá trên 100 và tạo một mảng mới chứa tên của chúng.

- Ví dụ này mô phỏng một kịch bản phức tạp hơn trong quản lý đơn hàng và sản phẩm, và nó thách thức việc sử dụng nhiều phương thức của `Array` cùng nhau.

### `flatMap` là gì? (Đây là một khái niệm mới)

- Phương thức `flatMap()` là một phương thức của đối tượng `Array` trong JavaScript, được sử dụng để kết hợp bước ánh xạ (`map()`) và bước làm phẳng (`flat()`) một cách thuận tiện.

- Cú pháp:

```js
array.flatMap(callback(currentValue[, index[, array]])[, thisArg]);
```

- `callback`: Một hàm được gọi cho mỗi phần tử của mảng, nhận giá trị hiện tại, chỉ mục (tùy chọn), và mảng gốc. Nó trả về một mảng mới được tạo ra từ kết quả của mỗi lần gọi callback.

- `thisArg` (tùy chọn): Một giá trị để được sử dụng như là this trong hàm callback.

**Mục đích:**

- Phương thức `flatMap()` giúp giảm bớt các bước lặp và giúp đơn giản hóa mã nguồn khi bạn cần thực hiện ánh xạ và làm phẳng một mảng kết quả. Thông thường, nó được sử dụng khi bạn muốn ánh xạ mỗi phần tử của mảng thành một mảng con, và sau đó làm phẳng mảng con đó thành một mảng duy nhất.

- Ví dụ:

```js
const numbers = [1, 2, 3, 4]

const multipliedAndFlattened = numbers.flatMap((num) => [num * 2, num * 3])

console.log(multipliedAndFlattened)
// Output: [2, 3, 4, 6, 6, 9, 8, 12]

const words = ['Hello', 'world']

const splitAndFlattened = words.flatMap((word) => word.split(''))

console.log(splitAndFlattened)
// Output: ['H', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
```

- Trong ví dụ trên, `flatMap()` được sử dụng để ánh xạ mỗi phần tử của mảng và sau đó làm phẳng mảng con thành mảng duy nhất.
