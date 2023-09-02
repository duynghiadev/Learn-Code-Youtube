/**
 * REST OPERATOR ✅
 */

const bobo = {
  id: 1,
  name: 'Bob',
  age: 18,
  gender: 'male',
}

// OLD WAY 👎
const id = bobo.id

const rest = {
  name: bobo.name,
  age: bobo.age,
  gender: bobo.gender,
}

// NEW WAY WITH REST OPERATOR 👍
// const { id, ...rest } = bobo;

/**
 * SPREAD OPERATOR ✅
 */

// Clone object with spread operator
const bob1 = {
  id: 1,
  name: 'Bob 1',
  age: 18,
  gender: 'male',
}

const bob2 = {
  ...bob1,
  name: 'Bob 2',
}

bob1 === bob2 // false;

// Clone array of objects (BE CAREFUL!!!)💥💥
interface Student1 {
  id1: number
  name1: string
  age1: number
  gender1: string
}

const studentList1: Student1[] = [
  { id1: 1, name1: 'Alice', age1: 11, gender1: 'female' },
  { id1: 2, name1: 'Bob', age1: 12, gender1: 'male' },
]

const newList = [...studentList1]
newList[0].name1 = 'Alice Alice'

console.log(studentList1[0].name1) // Alice Alice
