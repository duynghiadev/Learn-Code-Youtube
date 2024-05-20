// 5 ways to create object in Javascript

// 1 -> Object Literal
const object = {
  key: 'duynghiadev',
  key2: [12, 123]
}
console.log('typeof object:', typeof object)
console.log('object.key:', object.key)
console.log('object["key"]:', object['key'])
console.log('object:', object)

console.log('='.repeat(40))

// 2 -> Object's create method
console.log('{} instanceof Object:', {} instanceof Object)
const obj = Object.create(null)
const obj1 = Object.create({ key: '123' })
obj.key = 'hello'
console.log('obj.key:', obj.key)
console.log('obj instanceof Object:', obj instanceof Object)
console.log('obj1 instanceof Object:', obj1 instanceof Object)

console.log('='.repeat(40))

// 3 -> Object constructor
const object1 = new Object()
object1.something = 'vuong'
object1.testing = function () {
  return 'hello world'
}
console.log('object1.something:', object1.something)
console.log('object1.testing:', object1.testing)
console.log('object1.testing():', object1.testing())

console.log('='.repeat(40))

// 4 -> Function constructor
function Testing(age) {
  this.age = age * 10
}
const firstTest = new Testing(31)
console.log('typeof Testing:', typeof Testing)
console.log('firstTest.age:', firstTest.age)
firstTest.programming = 'JavaScript'
console.log('firstTest:', firstTest)

console.log('='.repeat(40))

// 5 -> ES6 class constructor
class Test {
  constructor(age) {
    this.age = age + 1
  }
}

const objectTest = new Test(22)
console.log('objectTest.age:', objectTest.age)
