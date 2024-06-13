## Tìm hiểu về Encapsulation in Object-Oriented Programming trong JavaScript

- Encapsulation là một trong những nguyên tắc quan trọng của lập trình hướng đối tượng (OOP), giúp che giấu chi tiết bên trong của một đối tượng và chỉ tiết lộ những thông tin cần thiết. Trong ngữ cảnh của JavaScript, encapsulation có thể được thực hiện thông qua việc sử dụng các khái niệm như private và public để quản lý truy cập vào các thuộc tính và phương thức của đối tượng.

- Dưới đây là một số cách để thực hiện encapsulation trong JavaScript:

1. Sử dụng closures:

- Closures cho phép bạn tạo các biến và hàm ẩn sau một hàm khác. Bằng cách này, bạn có thể giữ các biến "private" và chỉ có thể truy cập chúng thông qua các phương thức "public".

```js
function Person(name) {
  let _name = name // Biến private

  this.getName = function () {
    return _name
  }

  this.setName = function (newName) {
    _name = newName
  }
}

let person = new Person('John')
console.log(person.getName()) // John
person.setName('Alice')
console.log(person.getName()) // Alice
```

2. Sử dụng Symbol:

- Symbol là một kiểu dữ liệu đặc biệt trong JavaScript, và nó có thể được sử dụng để tạo các thuộc tính private.

```js
const _name = Symbol('name')

class Person {
  constructor(name) {
    this[_name] = name
  }

  getName() {
    return this[_name]
  }

  setName(newName) {
    this[_name] = newName
  }
}

let person = new Person('John')
console.log(person.getName()) // John
person.setName('Alice')
console.log(person.getName()) // Alice
```

3. Sử dụng WeakMap:

- WeakMap là một cấu trúc dữ liệu trong JavaScript cho phép lưu trữ các cặp key-value, trong đó key là các object và value có thể là bất kỳ giá trị nào. Điều này cũng có thể được sử dụng để tạo các thuộc tính private.

```js
const privateData = new WeakMap()

class Person {
  constructor(name) {
    privateData.set(this, { name })
  }

  getName() {
    return privateData.get(this).name
  }

  setName(newName) {
    privateData.get(this).name = newName
  }
}

let person = new Person('John')
console.log(person.getName()) // John
person.setName('Alice')
console.log(person.getName()) // Alice
```

- Quyết định sử dụng phương pháp nào phụ thuộc vào ngữ cảnh và yêu cầu cụ thể của dự án. Sử dụng closures, Symbol, hoặc WeakMap đều là cách hợp lý để thực hiện encapsulation trong JavaScript.

## Ví dụ đơn giản về encapsulation trong JavaScript

- Dưới đây là một ví dụ đơn giản về encapsulation trong JavaScript bằng cách sử dụng closures:

```js
function Car(make, model) {
  // Biến private
  let _make = make
  let _model = model

  // Phương thức public
  this.getMake = function () {
    return _make
  }

  this.getModel = function () {
    return _model
  }

  this.setMake = function (newMake) {
    _make = newMake
  }

  this.setModel = function (newModel) {
    _model = newModel
  }
}

// Tạo một đối tượng Car
let myCar = new Car('Toyota', 'Camry')

// Truy cập thông tin bằng cách sử dụng phương thức public
console.log(myCar.getMake()) // Toyota
console.log(myCar.getModel()) // Camry

// Thay đổi thông tin bằng cách sử dụng phương thức public
myCar.setMake('Honda')
myCar.setModel('Accord')

// In ra thông tin sau khi thay đổi
console.log(myCar.getMake()) // Honda
console.log(myCar.getModel()) // Accord
```

- Trong ví dụ này, `make` và `model` được giữ là private bằng cách sử dụng closures. Các phương thức `getMake`, `getModel`, `setMake`, và `setModel` được sử dụng để tương tác với các giá trị private này. Nhờ vào encapsulation, chỉ có các phương thức public này mới có thể truy cập và thay đổi giá trị của các biến private.

## Ví dụ nâng cao hơn về encapsulation trong JavaScript

- Dưới đây là một ví dụ nâng cao hơn về encapsulation trong JavaScript, sử dụng các khái niệm như closures và getter/setter:

```js
function BankAccount(initialBalance) {
  // Biến private
  let _balance = initialBalance

  // Phương thức public: getter và setter
  this.getBalance = function () {
    return _balance
  }

  this.deposit = function (amount) {
    if (amount > 0) {
      _balance += amount
      console.log(`Deposited ${amount}. New balance: ${_balance}`)
    } else {
      console.log('Invalid deposit amount.')
    }
  }

  this.withdraw = function (amount) {
    if (amount > 0 && amount <= _balance) {
      _balance -= amount
      console.log(`Withdrawn ${amount}. New balance: ${_balance}`)
    } else {
      console.log('Invalid withdrawal amount or insufficient funds.')
    }
  }
}

// Tạo một đối tượng BankAccount
let myAccount = new BankAccount(1000)

// Truy cập thông tin và thực hiện các giao dịch
console.log(`Initial balance: ${myAccount.getBalance()}`)
myAccount.deposit(500)
myAccount.withdraw(200)
myAccount.withdraw(1000) // Số tiền rút vượt quá số dư

// In ra số dư cuối cùng
console.log(`Final balance: ${myAccount.getBalance()}`)
```

- Trong ví dụ này, `BankAccount` có một biến private `_balance` và ba phương thức public: `getBalance`, `deposit`, và `withdraw`. Các phương thức này được sử dụng để truy cập và thay đổi giá trị của biến `_balance`, giữ cho dữ liệu này được bảo vệ và chỉ có thể được tương tác thông qua các phương thức public. Điều này tạo ra một cấu trúc encapsulation giúp kiểm soát và bảo vệ dữ liệu của đối tượng `BankAccount`.

## encapsulation thường áp dụng vào trường hợp nào

- Encapsulation thường được áp dụng trong các tình huống sau:

1. Bảo vệ Dữ liệu:

- Khi bạn muốn bảo vệ dữ liệu và tránh sự truy cập trực tiếp từ bên ngoài. Bằng cách giữ cho các thuộc tính và phương thức private, bạn có thể kiểm soát cách mà dữ liệu được đọc và cập nhật.

2. Che Giấu Chi Tiết Triển Khai:

- Encapsulation cho phép che giấu chi tiết triển khai nội tại của một đối tượng, chỉ tiết lộ những gì cần thiết để sử dụng. Điều này giảm sự phức tạp và giảm khả năng xâm phạm từ bên ngoài.

3. Tạo Giao Diện Mạnh Mẽ:

- Encapsulation giúp tạo ra một giao diện mạnh mẽ cho các đối tượng. Bạn có thể cung cấp các phương thức public được thiết kế sao cho chúng dễ sử dụng và hiểu, trong khi vẫn giữ chi tiết triển khai ẩn đi.

4. Quản lý Sự Thay Đổi:

- Khi có sự thay đổi trong triển khai nội tại của một đối tượng, encapsulation giúp giảm tác động của sự thay đổi đó đối với phần còn lại của chương trình. Bên ngoài, chỉ cần quan tâm đến giao diện public, không cần quan tâm đến cách đối tượng triển khai nội tại.

5. Tăng Sự Tương Tác An Toàn:

- Encapsulation giúp tăng cường an toàn trong quá trình tương tác với đối tượng. Việc kiểm soát việc truy cập vào dữ liệu và cung cấp các phương thức hợp lý giúp giảm thiểu lỗi và xác định rõ cách sử dụng đối tượng.

6. Đạt được Đóng Gói (Packaging):

- Encapsulation giúp đóng gói (packaging) logic và dữ liệu liên quan lại với nhau. Điều này làm cho mã nguồn trở nên tổ chức hơn, dễ đọc và dễ duy trì.

> Encapsulation là một nguyên tắc quan trọng trong lập trình hướng đối tượng và giúp tạo ra mã nguồn linh hoạt, dễ duy trì và an toàn.

---

## Tại sao khi khai báo biến private lại khai báo như này `_balance`

- Khi bạn thấy một biến bắt đầu bằng dấu gạch dưới (`_`) như `_balance`, đó là một quy ước naming convention để chỉ ra rằng biến đó nên được coi là private. Điều này không phải là một tính năng của ngôn ngữ JavaScript, mà chỉ là một thói quen hay quy ước được người lập trình thực hiện để gợi ý rằng biến đó nên được xem xét như private và không nên được truy cập trực tiếp từ bên ngoài của đối tượng hoặc lớp.

- Ví dụ, trong đối tượng `BankAccount`:

```js
function BankAccount(initialBalance) {
  // Biến private
  let _balance = initialBalance

  // ...
}
```

- Ở đây, `_balance` là một biến private, và việc bắt đầu nó bằng dấu gạch dưới thường là một convention để làm cho mã nguồn dễ đọc và hiểu. Mặc dù JavaScript không có kiểu biến nào là private hoặc public như một số ngôn ngữ lập trình khác, người lập trình thường áp dụng những quy ước như vậy để thể hiện ý định và giúp duy trì mã nguồn.
