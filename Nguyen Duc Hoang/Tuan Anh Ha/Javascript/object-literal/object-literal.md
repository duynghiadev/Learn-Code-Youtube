## Tìm hiểu về JavaScript Object Literal

- JavaScript Object Literal là một cách để tạo và khai báo đối tượng trong JavaScript một cách ngắn gọn và dễ đọc. Đây là một cú pháp phổ biến để tạo đối tượng mà không cần sử dụng từ khóa "new" và "constructor". Dưới đây là một số điều cơ bản về JavaScript Object Literal:

1. Cú pháp cơ bản:

```js
var person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  sayHello: function () {
    console.log('Hello!')
  }
}
```

- Trong ví dụ trên, `person` là một đối tượng được tạo bằng cách sử dụng cú pháp `{}` và chứa các thuộc tính như `firstName`, `lastName`, `age`, và một phương thức `sayHello`.

2. Thuộc tính và phương thức:

- Thuộc tính: Đối tượng có thể chứa các thuộc tính được đặt tên và có thể là bất kỳ kiểu dữ liệu nào.

- Phương thức: Các phương thức là các hàm được đặt làm thuộc tính của đối tượng.

3. Truy cập vào thuộc tính và phương thức:

```js
console.log(person.firstName) // Output: John
person.sayHello() // Output: Hello!
```

4. Thêm và xóa thuộc tính:

```js
person.gender = 'Male' // Thêm thuộc tính mới
delete person.age // Xóa thuộc tính
```

5. Dùng biến làm tên thuộc tính:

```js
var propertyName = 'email'
var user = {
  [propertyName]: 'user@example.com'
}
console.log(user.email) // Output: user@example.com
```

6. Dung lợi ES6:

- Trong ES6 (ECMAScript 2015) và các phiên bản mới hơn, bạn có thể sử dụng cú pháp ngắn gọn hơn khi tên thuộc tính và tên biến giống nhau:

```js
var x = 10,
  y = 20
var point = { x, y }
```

- JavaScript Object Literal cung cấp một cách linh hoạt và tiện lợi để tạo và quản lý đối tượng trong JavaScript mà không cần sử dụng các phương thức khởi tạo truyền thống.

## Ví dụ cơ bản về JavaScript Object Literal

- Dưới đây là một ví dụ đơn giản về việc sử dụng JavaScript Object Literal để tạo và sử dụng một đối tượng đại diện cho một người:

```js
// Tạo đối tượng person bằng cách sử dụng Object Literal
var person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Cityville',
    zipCode: '12345'
  },
  sayHello: function () {
    console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName + '.')
  }
}

// Truy cập và hiển thị thông tin của đối tượng
console.log('First Name:', person.firstName) // Output: John
console.log('Last Name:', person.lastName) // Output: Doe
console.log('Age:', person.age) // Output: 30

// Truy cập và hiển thị địa chỉ từ thuộc tính con (nested property)
console.log('Street:', person.address.street) // Output: 123 Main St
console.log('City:', person.address.city) // Output: Cityville
console.log('Zip Code:', person.address.zipCode) // Output: 12345

// Gọi phương thức sayHello để hiển thị thông điệp chào
person.sayHello() // Output: Hello, my name is John Doe.
```

- Trong ví dụ này, `person` là một đối tượng được tạo bằng cách sử dụng JavaScript Object Literal. Nó có các thuộc tính như `firstName`, `lastName`, `age`, `address`, và một phương thức `sayHello`. Các thuộc tính có thể là các giá trị cơ bản hoặc thậm chí là các đối tượng khác. Phương thức `sayHello` được sử dụng để in ra một thông điệp chào với tên đầy đủ của người đó.

## Ví dụ nâng cao về JavaScript Object Literal

- Để nâng cao hiểu biết về JavaScript Object Literal, bạn có thể xem xét một ví dụ phức tạp hơn, trong đó đối tượng chứa một mảng và sử dụng cú pháp ngắn gọn của ES6. Dưới đây là một ví dụ về việc sử dụng Object Literal để biểu diễn một danh sách sinh viên:

```js
// Tạo đối tượng studentList bằng cách sử dụng Object Literal
var studentList = {
  students: [
    { id: 1, name: 'Alice', grades: [85, 90, 88] },
    { id: 2, name: 'Bob', grades: [92, 88, 95] },
    { id: 3, name: 'Charlie', grades: [78, 85, 80] }
  ],
  averageGrade: function () {
    // Phương thức tính trung bình điểm của tất cả sinh viên
    var total = 0
    var count = 0
    this.students.forEach(function (student) {
      student.grades.forEach(function (grade) {
        total += grade
        count++
      })
    })
    return count > 0 ? total / count : 0
  },
  showStudentInfo: function () {
    // Phương thức hiển thị thông tin của từng sinh viên
    this.students.forEach(function (student) {
      console.log(`Student ${student.id}: ${student.name}, Grades: ${student.grades.join(', ')}`)
    })
  }
}

// Hiển thị thông tin và điểm trung bình của danh sách sinh viên
studentList.showStudentInfo()
console.log('Average Grade:', studentList.averageGrade())
```

- Trong ví dụ này, `studentList` là một đối tượng chứa một mảng `students`, trong đó mỗi sinh viên có một danh sách điểm. Đối tượng cũng có hai phương thức: `averageGrade` tính điểm trung bình của tất cả sinh viên và `showStudentInfo` hiển thị thông tin chi tiết về từng sinh viên.

- Với cú pháp ngắn gọn của ES6, bạn có thể thấy làm thế nào Object Literal có thể được sử dụng để biểu diễn các đối tượng phức tạp một cách dễ đọc và quản lý.
