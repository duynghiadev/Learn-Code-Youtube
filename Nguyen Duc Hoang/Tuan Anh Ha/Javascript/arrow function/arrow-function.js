// Arrow function có trong ES6
const addNumber = (a, b) => a + b
addNumber(3, 4)
console.log('addNumber(1, 2):', addNumber(1, 2))

const squareNumber = (x) => {
  return x * x
}
console.log('squareNumber(5):', squareNumber(5))

const createStudent = (name, age) => ({
  name: name,
  age: age
})
console.log('createStudent:', createStudent('duynghiadev', 22))

const makeStudent = (name, age, subject) => ({
  name,
  age,
  subject
})
console.log('makeStudent:', makeStudent('Ronaldo', 40, 'football'))

const studentThree = {
  name: 'Peter',
  introduce: () => {
    console.log(`My name is ${this.name}`)
  }
}
const studentFour = {
  name: 'Alice',
  introduce: function () {
    console.log(`My name is ${this.name}`)
  }
}
studentThree.introduce()
studentFour.introduce()
