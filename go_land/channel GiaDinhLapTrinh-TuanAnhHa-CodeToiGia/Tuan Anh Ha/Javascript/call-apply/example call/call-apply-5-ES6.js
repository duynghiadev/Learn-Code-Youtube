/**
 * Ví dụ phức tạp hơn về call và kết hợp với Array Method
 * Đây là code được convert từ ES5 thành ES6 trong file call-apply-5-ES5.js
 */
// Đối tượng cơ bản "Person"
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  introduce() {
    return `Xin chào, tôi là ${this.name} và tôi ${this.age} tuổi.`
  }
}

// Mảng các đối tượng "Person"
const people = [new Person('Alice', 25), new Person('Bob', 30), new Person('Charlie', 22)]

console.log('people.length:', people.length)
console.log('people:', people)
console.log('---------------------------------------')

// Sử dụng phương thức introduce của mỗi đối tượng và thu được mảng giới thiệu
const introductions = people.map((person) => {
  console.log('person:', person)
  console.log('---------------------------------------')

  return person.introduce()
})

// In ra mảng giới thiệu
console.log(introductions)
// Output:
// [ 'Xin chào, tôi là Alice và tôi 25 tuổi.',
//   'Xin chào, tôi là Bob và tôi 30 tuổi.',
//   'Xin chào, tôi là Charlie và tôi 22 tuổi.' ]
