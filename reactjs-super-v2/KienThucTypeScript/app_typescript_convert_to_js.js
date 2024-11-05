'use strict'
/**
 * Basic type
 */
// string
let car = 'Toyota'
let bike
bike = 'Winner'
// bike = 140 // error
// number
let num = 10
// boolean
let isLoading = false
// undefined
let body = undefined
// null
let footer
// any
let person
person = 10
person = 'duynghiadev'
person = false
/**
 * Object
 */
let house = {
  address: ''
}
house.address = 'Villar'
/**
 * Array
 */
let products = []
products.push(1)
products.push('Vietnam')
// string[]
let names = ['alex', 'ronaldo']
let address = []
address.push('Da Nang')
// number[]
let numbers = []
numbers = [1, 2, 3]
// object array
let people = []
people.push({
  name: 'duynghiadev',
  age: 22
})
/**
 * Function
 */
const sum = (num1, num2) => {
  return num1 + num2
}
sum(1, 2)
const sub = (num1, num2) => num1 - num2
const handle = () => {
  console.log(123)
}
/**
 * Union
 */
let price
price = 10
price = '10'
price = true
let body_1 = {
  firstName: 'Messi',
  name: 'dunghiadev'
}
/**
 * Enum
 */
var Sizes
;(function (Sizes) {
  Sizes['S'] = 'S'
  Sizes['M'] = 'M'
  Sizes['L'] = 'L'
  Sizes['XL'] = 'XL'
})(Sizes || (Sizes = {}))
let size = Sizes.S
let state = {
  name: 'Ronaldo',
  isLoading: true,
  age: 22
}
let state_1 = {
  name: 'Duynghiadev',
  isLoading: false
}
// ==================================================================
const handleClick = React.createElement(
  Type,
  null,
  '(value: Type) => value let value = 100 handleClick',
  React.createElement(
    'string',
    null,
    "('100') /** * Class */ class Person_2 ",
    public,
    ' name: string age: number private address: string readonly money: number = 100 constructor(name: string, age: number, address: string) ',
    (this.name = name),
    'this.age = age this.address = address } handle_1() ',
    let,
    " value = this.money } } const alex = new Person_2('Duynghiadev', 22, 'Da Nang') console.log('alex.age-->', alex.age) // console.log('alex.address-->', alex.address) // --> error, because variable address is private // alex.money = 200 // --> error, because variable money just read"
  )
)
