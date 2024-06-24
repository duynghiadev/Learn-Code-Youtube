// Example usage getter and setter in JavaScript

class Person {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name(newName) {
    this._name = newName
  }
}

const person = new Person('John')
console.log(person.name) // Output: John

person.name = 'Jack'
console.log(person.name) // Output: Jack
