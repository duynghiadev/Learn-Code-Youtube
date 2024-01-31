## Tìm hiểu về khái niệm OOP trong JavaScript

- Khái niệm OOP (Object-Oriented Programming - Lập trình hướng đối tượng) là một phương pháp lập
  trình chia chương trình thành các đối tượng, mỗi đối tượng có thể chứa dữ liệu trong các trường (
  properties) và mã nguồn trong các phương thức (methods). Trong JavaScript, OOP có thể được triển
  khai thông qua các đối tượng, hàm tạo (constructor functions), và prototype.

- Dưới đây là một số khái niệm quan trọng về OOP trong JavaScript:

1. Đối tượng (Object):

- Đối tượng là một thực thể có thuộc tính (properties) và hành vi (methods). Trong JavaScript, đối
  tượng được tạo bằng cách sử dụng cặp dấu ngoặc nhọn `{}`.

```js
// Đối tượng ví dụ
let person = {
  name: 'John',
  age: 30,
  sayHello: function () {
    console.log('Hello!')
  }
}
```

2. Hàm tạo (Constructor Function):

- Hàm tạo là một hàm được sử dụng để tạo mới đối tượng. Bằng cách sử dụng từ khóa `new`, bạn có thể
  tạo ra một đối tượng từ hàm tạo.

```js
// Hàm tạo ví dụ
function Person(name, age) {
  this.name = name
  this.age = age
  this.sayHello = function () {
    console.log('Hello!')
  }
}

// Sử dụng hàm tạo để tạo đối tượng
let person1 = new Person('John', 30)
```

3. Prototype:

- Prototype là một cơ chế quan trọng trong OOP của JavaScript. Nó cho phép chia sẻ các phương thức
  giữa các đối tượng và giúp tiết kiệm bộ nhớ.

```js
// Sử dụng prototype
Person.prototype.sayGoodbye = function () {
  console.log('Goodbye!')
}

// Gọi phương thức từ prototype
person1.sayGoodbye() // Output: Goodbye!
```

4. Tính kế thừa (Inheritance):

- JavaScript hỗ trợ tính kế thừa thông qua prototype. Một đối tượng có thể "kế thừa" các thuộc tính
  và phương thức từ một đối tượng khác.

```js
// Kế thừa
function Student(name, age, grade) {
  // Gọi hàm tạo của lớp cha
  Person.call(this, name, age)
  this.grade = grade
}

// Kế thừa prototype
Student.prototype = Object.create(Person.prototype)

// Thêm phương thức riêng của lớp con
Student.prototype.study = function () {
  console.log('Studying...')
}

let student1 = new Student('Alice', 25, 'A')
```

- Đây chỉ là một cái nhìn tổng quan về OOP trong JavaScript. Nói chung, JavaScript hỗ trợ một hình
  thức OOP linh hoạt và có thể triển khai theo nhiều cách khác nhau, bao gồm sử dụng class (được
  giới thiệu trong ECMAScript 6 và phiên bản sau).

## Cho ví dụ cơ bản về OOP trong JavaScript

- Dưới đây là một ví dụ cơ bản về OOP trong JavaScript sử dụng hàm tạo và prototype. Sử dụng ES5

```js
// Định nghĩa hàm tạo cho đối tượng Person
function Person(name, age) {
  this.name = name
  this.age = age
}

// Thêm phương thức sayHello vào prototype của Person
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
}

// Tạo một đối tượng Person
let person1 = new Person('John', 30)

// Gọi phương thức sayHello từ đối tượng person1
person1.sayHello() // Output: Hello, my name is John and I am 30 years old.

// Định nghĩa hàm tạo cho đối tượng Student kế thừa từ Person
function Student(name, age, grade) {
  // Gọi hàm tạo của lớp cha (Person)
  Person.call(this, name, age)
  this.grade = grade
}

// Kế thừa prototype từ Person
Student.prototype = Object.create(Person.prototype)

// Thêm phương thức study vào prototype của Student
Student.prototype.study = function () {
  console.log('Studying...')
}

// Tạo một đối tượng Student
let student1 = new Student('Alice', 25, 'A')

// Gọi phương thức sayHello từ đối tượng student1
student1.sayHello() // Output: Hello, my name is Alice and I am 25 years old.

// Gọi phương thức study từ đối tượng student1
student1.study() // Output: Studying...
```

- Trong ví dụ này, chúng ta định nghĩa hai hàm tạo (`Person` và `Student`). `Person` là lớp cơ bản
  đại diện cho một người, trong khi `Student` kế thừa từ `Person` và có thêm một thuộc tính
  grade `cũng`như một phương thức `study`.

- Thông qua sử dụng prototype, phương thức `sayHello` được chia sẻ giữa các đối tượng của
  lớp `Person` và `Student`. Việc này giúp giảm bớt lượng bộ nhớ được sử dụng khi tạo nhiều đối
  tượng và tăng tính tái sử dụng mã nguồn.

---

- Ví dụ trước đó sử dụng cú pháp hàm tạo và `prototype`, một phần của JavaScript truyền thống và không phải ES6. Dưới đây là một ví dụ sử dụng cú pháp của ES6 để định nghĩa `class` và sử dụng từ khóa `extends` để kế thừa:

```js
// Định nghĩa class Person
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }
}

// Định nghĩa class Student kế thừa từ Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age) // Gọi hàm tạo của lớp cha (Person)
    this.grade = grade
  }

  study() {
    console.log('Studying...')
  }
}

// Tạo đối tượng từ class Person
let person1 = new Person('John', 30)
person1.sayHello() // Output: Hello, my name is John and I am 30 years old.

// Tạo đối tượng từ class Student
let student1 = new Student('Alice', 25, 'A')
student1.sayHello() // Output: Hello, my name is Alice and I am 25 years old.
student1.study() // Output: Studying...
```

- Trong ví dụ này, chúng ta sử dụng cú pháp class của ES6 để định nghĩa `Person` và `Student`. Class `Student` kế thừa từ `Person` bằng cách sử dụng từ khóa `extends`, và chúng ta sử dụng `super` để gọi hàm tạo của lớp cha.

- Lưu ý rằng, mặc dù cú pháp class giúp giảm bớt boilerplate code, nhưng nó vẫn dựa trên prototype trong hậu cảm (under the hood).
