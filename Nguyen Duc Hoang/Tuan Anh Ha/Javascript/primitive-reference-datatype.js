// Primitive Datatype (Dạng nguyên thủy)
const age = 18 // number
const name = 'Job Doe' // string
const loading = true // boolean
const customer = undefined // không xác định
const result = null

// Reference Datatype (Dạng tham chiếu)
const student = {
  name: 'Jane Smith',
  age: 19
}
const people = ['Ana', 'Bean', 'Chris']
const logOut = () => {
  console.log('I am a function')
}

// Example primitive datatype
let myName = 'Jon'
let hisName = myName
console.log('myName:', myName)
console.log('hisName:', hisName)

// Example reference datatype
let studentOne = {
  name: 'Peter',
  age: 25,
  subject: 'IT'
}
let studentTwo = studentOne
studentTwo.name = 'Mary'
studentTwo.subject = 'English'
console.log('studentOne:', studentOne)
console.log('studentTwo:', studentTwo)

// Example other
const myAge = 25
const herName = 25
console.log('myAge === herName:', myAge === herName)

const myCar = {
  brand: 'BMW',
  year: 2021
}
const myWifeCar = myCar
myWifeCar.year = 2022
console.log('myWifeCar:', myWifeCar)
console.log('myCar:', myCar)
const herCar = {
  brand: 'BMW',
  year: 2021
}
console.log('myCar === herCar:', myCar === herCar)
