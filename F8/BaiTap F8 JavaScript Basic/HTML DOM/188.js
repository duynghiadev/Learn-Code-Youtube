class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Expected results
const person = new Person("Long", 22);
console.log(`Tên: ${person.name}, tuổi: ${person.age}`);
// Output: 'Tên: Long, tuổi: 22'
