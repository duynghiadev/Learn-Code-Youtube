### Tìm hiểu về Array method: filter() and reduce()

- Phương thức `filter()` và `reduce()` là hai phương thức quan trọng của đối tượng Array trong JavaScript.

1. Phương thức `filter()`:

- Phương thức `filter()` được sử dụng để tạo một mảng mới từ một mảng hiện tại bằng cách lọc các phần tử theo một điều kiện nhất định.

Cú pháp:

```js
let newArray = array.filter(callback(element[, index[, array]])[, thisArg]);
```

- `callback`: Một hàm để kiểm tra mỗi phần tử của mảng. Trả về true để giữ lại phần tử, và false để loại bỏ nó.

- `thisArg` (tùy chọn): Một giá trị để được sử dụng như là this trong hàm callback.

Ví dụ:

```js
let numbers = [1, 2, 3, 4, 5, 6]
let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0
})

console.log(evenNumbers) // Output: [2, 4, 6]
```

2. Phương thức `reduce()`:

- Phương thức `reduce()` được sử dụng để giảm mảng thành một giá trị duy nhất bằng cách thực hiện một hàm callback cho từng phần tử của mảng.

Cú pháp:

```js
let result = array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]);
```

- `callback`: Hàm thực hiện cho mỗi phần tử, nhận vào bốn tham số: accumulator (kết quả tích lũy), currentValue (phần tử hiện tại), index (chỉ mục của phần tử hiện tại), và array (mảng đang được giảm).

- `initialValue` (tùy chọn): Giá trị khởi tạo của accumulator. Nếu không được cung cấp, sẽ sử dụng phần tử đầu tiên của mảng làm giá trị khởi tạo.

Ví dụ:

```js
let numbers = [1, 2, 3, 4, 5]
let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue
}, 0)

console.log(sum) // Output: 15
```

- Trong ví dụ này, `reduce()` được sử dụng để tính tổng của các phần tử trong mảng numbers.

- Tóm lại, `filter()` được sử dụng để tạo mảng mới với các phần tử thỏa mãn điều kiện, trong khi `reduce()` được sử dụng để giảm mảng thành một giá trị duy nhất thông qua một quá trình tích lũy.

### Ví dụ cơ bản về Filter và Reduce trong JavaScript

- Dưới đây là một đoạn mã đơn giản sử dụng `filter()` để lọc các số chẵn từ một mảng và `reduce()` để tính tổng các số trong mảng:

```js
// Sử dụng filter để lọc các số chẵn
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0
})

console.log('Các số chẵn trong mảng:', evenNumbers)

// Sử dụng reduce để tính tổng các số trong mảng
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue
}, 0)

console.log('Tổng các số trong mảng:', sum)
```

- Trong ví dụ trên, `filter()` được sử dụng để tạo một mảng mới (`evenNumbers`) chứa các số chẵn từ mảng `numbers`. Sau đó, `reduce()` được sử dụng để tính tổng các số trong mảng `numbers`. Kết quả sẽ được hiển thị trên console.

- Kết quả thực thi có thể sẽ như sau:

```md
Các số chẵn trong mảng: [2, 4, 6, 8, 10]
Tổng các số trong mảng: 55
```

- Đây chỉ là một ví dụ cơ bản để minh họa cách sử dụng `filter()` và `reduce()` trong JavaScript. Bạn có thể thay đổi mảng và điều kiện lọc để thấy sự linh hoạt của các phương thức này.

### Ví dụ nâng cao về Filter và Reduce trong JavaScript

- Dưới đây là một ví dụ nâng cao hơn sử dụng `filter()` và `reduce()` để xử lý một danh sách người dùng và tính tổng tuổi của những người có tuổi lớn hơn một giới hạn nhất định:

```js
// Mảng chứa đối tượng người dùng
const users = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 22 },
  { name: 'Eva', age: 35 },
  { name: 'Charlie', age: 28 }
]

// Sử dụng filter để lọc người dùng có tuổi lớn hơn 25
const usersAbove25 = users.filter(function (user) {
  return user.age > 25
})

console.log('Người dùng có tuổi lớn hơn 25:', usersAbove25)

// Sử dụng reduce để tính tổng tuổi của những người trên 25 tuổi
const totalAgeAbove25 = usersAbove25.reduce(function (accumulator, user) {
  return accumulator + user.age
}, 0)

console.log('Tổng tuổi của những người có tuổi lớn hơn 25:', totalAgeAbove25)
```

- Trong ví dụ này, `filter()` được sử dụng để tạo một mảng mới (`usersAbove25`) chứa những người có tuổi lớn hơn 25. Sau đó, `reduce()` được sử dụng để tính tổng tuổi của những người đó.

- Kết quả thực thi có thể sẽ như sau:

```md
Người dùng có tuổi lớn hơn 25: [ { name: 'John', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Eva', age: 35 }, { name: 'Charlie', age: 28 } ]
Tổng tuổi của những người có tuổi lớn hơn 25: 118
```

- Đây là một ví dụ phức tạp hơn và minh họa cách `filter()` và `reduce()` có thể được sử dụng trong một ngữ cảnh thực tế hơn.

### Ví dụ phức tạp về Filter và Reduce trong JavaScript

- Dưới đây là một ví dụ nâng cao hơn và phức tạp hơn, sử dụng `filter()` và `reduce()` để xử lý một danh sách các giao dịch tài chính và tính toán tổng số tiền giao dịch của những người có nhiều giao dịch hơn một ngưỡng nhất định:

```js
// Mảng chứa đối tượng giao dịch
const transactions = [
  { user: 'Alice', amount: 150, type: 'expense' },
  { user: 'Bob', amount: 200, type: 'income' },
  { user: 'Alice', amount: 50, type: 'expense' },
  { user: 'Charlie', amount: 100, type: 'income' },
  { user: 'Bob', amount: 75, type: 'expense' },
  { user: 'Alice', amount: 300, type: 'income' }
]

// Sử dụng filter để lọc người dùng có nhiều giao dịch hơn 2
const usersWithMoreThan2Transactions = transactions
  .map((transaction) => transaction.user)
  .filter(
    (user, index, arr) => arr.indexOf(user) === index && arr.filter((u) => u === user).length > 2
  )

console.log('Người dùng có nhiều giao dịch hơn 2:', usersWithMoreThan2Transactions)

// Sử dụng reduce để tính tổng số tiền giao dịch của những người có nhiều giao dịch hơn 2
const totalAmountForUsers = usersWithMoreThan2Transactions.reduce((accumulator, user) => {
  const transactionsForUser = transactions.filter((transaction) => transaction.user === user)
  const totalAmount = transactionsForUser.reduce((sum, transaction) => {
    return transaction.type === 'income' ? sum + transaction.amount : sum - transaction.amount
  }, 0)
  return accumulator + totalAmount
}, 0)

console.log('Tổng số tiền giao dịch của những người có nhiều giao dịch hơn 2:', totalAmountForUsers)
```

- Trong ví dụ này, `filter()` được sử dụng để lọc ra những người dùng có nhiều hơn 2 giao dịch. Sau đó, `reduce()` được sử dụng để tính tổng số tiền giao dịch của những người đó.

- Ví dụ này có tính phức tạp hơn với việc xử lý danh sách giao dịch và tính toán theo nhiều điều kiện. Bạn có thể thấy cách `filter()` và `reduce()` có thể được kết hợp để giải quyết các vấn đề phức tạp trong thực tế.
