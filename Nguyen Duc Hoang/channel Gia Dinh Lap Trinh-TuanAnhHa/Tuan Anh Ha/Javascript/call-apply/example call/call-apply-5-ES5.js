/**
 * Ví dụ phức tạp hơn về call và kết hợp với Array Method
 * Đây là code ES5
 */
// Đối tượng cơ bản "Person"
const Person = function (name, age) {
  this.name = name
  this.age = age
}

// Phương thức của "Person"
Person.prototype.introduce = function () {
  return `Xin chào, tôi là ${this.name} và tôi ${this.age} tuổi.`
}

// Mảng các đối tượng "Person"
const people = [new Person('Alice', 25), new Person('Bob', 30), new Person('Charlie', 22)]

console.log('people.length:', people.length)
console.log('people:', people)
console.log('---------------------------------------')

// Sử dụng phương thức introduce của mỗi đối tượng và thu được mảng giới thiệu
const introductions = people.map(function (person) {
  console.log('person:', person)
  console.log('---------------------------------------')

  // Sử dụng phương thức introduce của Person và thiết lập giá trị của this bằng call
  return Person.prototype.introduce.call(person)
})

// In ra mảng giới thiệu
console.log(introductions)
// Output:
// [ 'Xin chào, tôi là Alice và tôi 25 tuổi.',
//   'Xin chào, tôi là Bob và tôi 30 tuổi.',
//   'Xin chào, tôi là Charlie và tôi 22 tuổi.' ]
