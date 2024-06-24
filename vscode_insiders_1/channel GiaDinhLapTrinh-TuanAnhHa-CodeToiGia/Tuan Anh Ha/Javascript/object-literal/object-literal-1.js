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
