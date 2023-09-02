/**
 * Example 1
 */

function isEmpty(numberList) {
  return numberList.length === 0
}

console.log(isEmpty(123))

/**
 * Example 2
 */

let str

if (Math.random() > 0.5) {
  str = `ok, number bigger 0.5 => That number is ${Math.random()}`
}

console.log(str?.toString())

/**
 * Example 3
 */
;('use strict')
function findStudentById(studentList, studentId) {
  if (studentList.length === 0) return undefined
  return studentList.find((x) => x.id === studentId)
}

const studentList = [
  { id: 1, name: 'Alice', gender: 'female', age: 20 },
  { id: 2, name: 'Bob', gender: 'male', age: 20 },
]

const bob = findStudentById(studentList, 3)

// console.log(bob.name) // error here ❌

// js: runtime error "Cannot read property 'name' of undefined" 💥
// ts: type error "Object is possibly 'undefined'" 💥

// FIX: do check before using ✅
if (bob) {
  console.log(`${bob.name}, ${bob.gender}, ${bob.age}`)
} else {
  console.log('Student undefined')
}
