/**
 * - Đây là ví dụ trong file markdown
 *
 * - Trong ví dụ này, chúng ta có một đối tượng person với một phương thức sayHello. Chúng ta muốn tạo một bản sao mới của phương thức này và gán nó cho đối tượng person2. Bằng cách sử dụng bind(), chúng ta đã tạo một hàm mới sayHelloToJane, trong đó giá trị của this được cố định thành đối tượng person2. Khi chúng ta gọi sayHelloToJane(), nó in ra "Hello, Jane", chứng tỏ rằng giá trị của this đã được ánh xạ đúng theo mong muốn.
 */
// Định nghĩa một đối tượng person
const person = {
  name: 'John',
  sayHello: function () {
    console.log('Hello, ' + this.name)
  }
}

// Định nghĩa một đối tượng khác person2
const person2 = {
  name: 'Jane'
}

// Sử dụng bind để tạo một bản sao mới của phương thức sayHello với giá trị this là person2
const sayHelloToJane = person.sayHello.bind(person2)

// Gọi phương thức đã được bind
sayHelloToJane() // In ra: Hello, Jane
