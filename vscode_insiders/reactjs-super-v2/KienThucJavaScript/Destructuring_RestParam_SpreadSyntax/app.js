// Destructuring

// Destructuring with object

const user = {
  name: 'duynghiadev',
  age: 22,
  sex: 'male'
}

const name1 = user.name
const age1 = user.age
const sex1 = user.sex

const { name, age, sex } = user

console.log('{ name, age, sex }:', { name, age, sex })
console.log('{ name1, age1, sex1 }:', { name1, age1, sex1 })

// Destructuring with array

const list = [
  1,
  function (a, b) {
    return a + b
  }
]

const [value, sum] = list
console.log(sum(2, 3))

// Spread Syntax

const user_1 = {
  name: 'duynghiadev',
  age: 22,
  ability: ['coding']
}

const cloneUser = user_1

// shallow copy
const cloneUser_1 = { ...user_1 }

console.log('cloneUser === user_1:', cloneUser === user_1)
console.log('cloneUser_1 === user_1:', cloneUser_1 === user_1)

console.log('cloneUser.ability === user_1.ability:', cloneUser.ability === user_1.ability)
console.log('cloneUser_1.ability === user_1.ability:', cloneUser_1.ability === user_1.ability)

/**
 * Rest Parameter
 */

const handle = (a, b, ...c) => {
  return c
}

const value_1 = handle(1, 2, 3, 4, 5, 6, 7, 8)
console.log('value_1:', value_1)

/**
 * Destructuring
 */

const handle_1 = ({ a, b, ...c }) => {
  return c
}

const value_2 = handle_1({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 })
console.log('value_2:', value_2)
