// CLASS

// public
class Car {
  name: string
  year: number
  constructor(name: string, year: number) {
    this.name = name
    this.year = year
  }
}

let car1 = new Car('Audi', 2021)
car1.name = 'Masda'
car1.year = 2022
console.log(`car1: ${JSON.stringify(car1)}`)
console.log(`car1.name: ${car1.name}`)
console.log(`car1.year: ${car1.year}`)

console.log('--------------------------------------')

// private
class Car2 {
  private name: string
  private year: number
  constructor(name: string, year: number) {
    this.name = name
    this.year = year
  }
}
let car2 = new Car2('Mecedes', 2024)
// car2.name = 'Masda' // Property 'name' is private and only accessible within class 'Car2'.ts(2341)
// car2.year = 2022 // Property 'name' is private and only accessible within class 'Car2'.ts(2341)
console.log(`car2: ${JSON.stringify(car2)}`)
// console.log(`car2.name: ${car2.name}`)
// console.log(`car2.year: ${car2.year}`)

console.log('--------------------------------------')

// readonly
class Car3 {
  readonly name: string
  readonly year: number
  constructor(name: string, year: number) {
    this.name = name
    this.year = year
  }
}
let car3 = new Car3('Mecedes', 2024)
// car3.name = 'Masda' // Cannot assign to 'name' because it is a read-only property.ts(2540)
// car3.year = 2022 // Cannot assign to 'name' because it is a read-only property.ts(2540)
console.log(`car3: ${JSON.stringify(car3)}`)
console.log(`car3.name: ${car3.name}`)
console.log(`car3.year: ${car3.year}`)

console.log('--------------------------------------')

// short version
class Car4 {
  constructor(
    public name: string,
    readonly year: number,
    private color: string,
    private price: number
  ) {}
}
let car4 = new Car4('Mecedes', 2024, 'red', 10000)
console.log(`car4: ${JSON.stringify(car4)}`)
console.log(`car4.name: ${car4.name}`)
console.log(`car4.year: ${car4.year}`)
// console.log(`car4.color: ${car4.color}`) // Property 'color' is private and only accessible within class 'Car4'
// console.log(`car4.price: ${car4.price}`) // Property 'price' is private and only accessible within class 'Car4'

console.log('--------------------------------------')
