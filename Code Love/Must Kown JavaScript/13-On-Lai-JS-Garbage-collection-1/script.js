const person = {
  name: 'nghia',
  job: 'IT',
  hobbies: ['football', 'basketball']
}

let newPerson = person
let hobbies = person.hobbies

console.log(newPerson)
console.log(hobbies)

newPerson = null
hobbies = null

console.log(newPerson)
console.log(hobbies)

let son = {
  name: 'son'
  // dadParent: {
  //   name: 'dad'
  // }
}

let dad = {
  name: 'dad'
}

console.log('son:', son)
console.log('dad:', dad)
console.log('---------------------------------------')

let extendSon = (son.dadParent = dad)
console.log('extendSon:', extendSon)
console.log('son.dadParent:', son)

console.log('---------------------------------------')

let extendDad = (dad.sonChild = son)
console.log('extendDad:', extendDad)
console.log('dad.sonChild:', dad)
console.log('---------------------------------------')

console.log('son:', son)
console.log('dad:', dad)
console.log('---------------------------------------')
