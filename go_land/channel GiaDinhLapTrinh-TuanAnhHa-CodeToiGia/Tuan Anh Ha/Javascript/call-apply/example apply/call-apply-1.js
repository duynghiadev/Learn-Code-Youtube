/**
 * - Đây là ví dụ được lấy từ file markdown (trong phần ví dụ về apply)
 *
 * - Trong JavaScript, phương thức apply() là một trong ba phương thức cung cấp bởi hàm JavaScript (Function). Các phương thức khác là call() và bind(). Phương thức apply() cho phép bạn gọi một hàm với một ngữ cảnh (context) và một mảng các đối số.
 *
 * - Dưới đây là một ví dụ cơ bản về cách sử dụng apply():
 *
 * - Ở đây, apply() được sử dụng để gọi phương thức fullName của đối tượng person, nhưng với ngữ cảnh (this) được đặt là person1 và person2. Mảng ["New York", "USA"] và ["London", "UK"] là các đối số được truyền vào hàm fullName.
 */

// Tạo một đối tượng person
let person = {
  fullName: function (city, country) {
    console.log('this:', this)
    console.log('---------------------------------')
    return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country
  }
}

// Đối tượng person có các thuộc tính firstName và lastName
let person1 = {
  firstName: 'John',
  lastName: 'Doe'
}

let person2 = {
  firstName: 'Jane',
  lastName: 'Doe'
}

// Sử dụng apply để gọi phương thức fullName của đối tượng person
// person1 và person2 sẽ được sử dụng làm ngữ cảnh (this) của hàm
let result1 = person.fullName.apply(person1, ['New York', 'USA'])
let result2 = person.fullName.apply(person2, ['London', 'UK'])

console.log(result1) // Kết quả: John Doe, New York, USA
console.log(result2) // Kết quả: Jane Doe, London, UK
