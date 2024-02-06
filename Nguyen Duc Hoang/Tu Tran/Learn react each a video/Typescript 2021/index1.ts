// OBJECT TYPE

// let single = {}
// single.name = 'hello'
let single = {
  name: 'hello'
}
// single.name = 30
single.name = 'Den Vau'
console.log(`single: ${JSON.stringify(single)}`)
console.log(`single.name: ${single.name}`)

console.log('--------------------------------------')

let single2: { name: string; age: number } = {
  name: 'initial name',
  age: 0
}
single2.age = 30
single2.name = 'Son Tung'
console.log(`single2: ${JSON.stringify(single2)}`)
console.log(`single2.name: ${single2.name}`)
console.log(`single2.age: ${single2.age}`)

console.log('--------------------------------------')

let actor: { name: string; age: number } = { name: 'hello', age: 30 }
console.log(`actor: ${JSON.stringify(actor)}`)
console.log(`actor.name: ${actor.name}`)
console.log(`actor.age: ${actor.age}`)

console.log('--------------------------------------')

let actor1: { name: string; age?: number } = { name: 'hello' }
console.log(`actor1: ${JSON.stringify(actor1)}`)
console.log(`actor1.name: ${actor1.name}`)
console.log(`actor1.age: ${actor1.age}`)

console.log('--------------------------------------')
