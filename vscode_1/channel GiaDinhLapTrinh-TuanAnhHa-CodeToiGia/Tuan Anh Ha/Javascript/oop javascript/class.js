class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  work() {
    return `My name is ${this.name}. I am ${this.age} years old. I am working.`
  }
}

class Student extends Person {
  constructor(name, age, subject) {
    super(name, age)
    this.subject = subject
  }

  learn() {
    return `My name is ${this.name}. I am ${this.age} years old. I am learning ${this.subject}.`
  }
}

const personOne = new Person('John Doe', 39)
const personTwo = new Student('Jane Dow', 19, 'IT')

console.log(`personOne.work: ${personOne.work()}`)

console.log(`personTwo.learn: ${personTwo.learn()}`)
console.log(`personTwo.work: ${personTwo.work()}`)
