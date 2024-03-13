// INTERFACE TYPE

interface IPerson {
  name: string
  age: number
  bio?: string
}

let actor2: IPerson = {
  name: 'hello',
  age: 30,
  bio: 'Son Tung'
}
console.log(`actor2: ${JSON.stringify(actor2)}`)
console.log(`actor2.name: ${actor2.name}`)
console.log(`actor2.age: ${actor2.age}`)
console.log(`actor2.bio: ${actor2.bio}`)

console.log('--------------------------------------')

let actor3: IPerson = {
  name: 'hello',
  age: 30
}
actor3.name = 'Den Vau'
actor3.age = 22
console.log(`actor3: ${JSON.stringify(actor3)}`)
console.log(`actor3.name: ${actor3.name}`)
console.log(`actor3.age: ${actor3.age}`)

console.log('--------------------------------------')

interface IPersonOther {
  name: string
  age: number
  friends: IPerson[]
}
let actor4: IPersonOther = {
  name: 'hello',
  age: 30,
  friends: [
    {
      name: 'hello',
      age: 30
    },
    {
      name: 'hello',
      age: 30
    }
  ]
}
console.log(`actor4: ${JSON.stringify(actor4)}`)
console.log(`actor4.name: ${actor4.name}`)
console.log(`actor4.age: ${actor4.age}`)
console.log(`actor4.friends: ${JSON.stringify(actor4.friends)}`)
console.log(`actor4.friends.length: ${actor4.friends.length}`)
console.log(`actor4.friends[0].name: ${actor4.friends[0].name}`)
console.log(`actor4.friends[1].name: ${actor4.friends[1].name}`)

console.log('--------------------------------------')
