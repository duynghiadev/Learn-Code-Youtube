/**
 * Basic type
 */

// string
let car = 'Toyota'
let bike: string
bike = 'Winner'
// bike = 140 // error

// number
let num: number = 10

// boolean
let isLoading: boolean = false

// undefined
let body: undefined = undefined

// null
let footer: null

// any
let person: any
person = 10
person = 'duynghiadev'
person = false

/**
 * Object
 */

let house: {
  address: string
  color?: string
} = {
  address: ''
}

house.address = 'Villar'

/**
 * Array
 */

let products: any[] = []
products.push(1)
products.push('Vietnam')

// string[]
let names = ['alex', 'ronaldo']
let address: string[] = []
address.push('Da Nang')

// number[]
let numbers: number[] = []
numbers = [1, 2, 3]

// object array
let people: {
  name: string
  age: number
}[] = []
people.push({
  name: 'duynghiadev',
  age: 22
})

/**
 * Function
 */
const sum = (num1: number, num2: number): number => {
  return num1 + num2
}
sum(1, 2)

const sub: (num1: number, num2: number) => number = (num1: number, num2: number) => num1 - num2

const handle = (): void => {
  console.log(123)
}

/**
 * Union
 */

let price: string | number | boolean
price = 10
price = '10'
price = true

let body_1:
  | {
      name: string | boolean
    }
  | {
      firstName: string
    } = {
  firstName: 'Messi',
  name: 'dunghiadev'
}

/**
 * Enum
 */
enum Sizes {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL'
}
let size = Sizes.S

/**
 * Interface
 */

interface State {
  name: string
  isLoading: boolean
}

interface State {
  age: number
}

let state: State = {
  name: 'Ronaldo',
  isLoading: true,
  age: 22
}

/**
 * Type
 */
type State_1 = {
  name: string
  isLoading: boolean
}

let state_1: State_1 = {
  name: 'Duynghiadev',
  isLoading: false
}

// ==================================================================

type Name = {
  name: string
}

type Age = {
  age: number
}

type Person_1 = Name | Age

// ==================================================================

interface Name_1 {
  name: string
}

interface Age_1 {
  age: number
}

// ==================================================================

const handleClick = <Type>(value: Type) => value

let value = 100
handleClick<string>('100')

/**
 * Class
 */
class Person_2 {
  public name: string
  age: number
  private address: string
  readonly money: number = 100

  constructor(name: string, age: number, address: string) {
    this.name = name
    this.age = age
    this.address = address
  }

  handle_1() {
    let value = this.money
  }
}

const alex = new Person_2('Duynghiadev', 22, 'Da Nang')
console.log('alex.age-->', alex.age)
// console.log('alex.address-->', alex.address) // --> error, because variable address is private
// alex.money = 200 // --> error, because variable money just read
