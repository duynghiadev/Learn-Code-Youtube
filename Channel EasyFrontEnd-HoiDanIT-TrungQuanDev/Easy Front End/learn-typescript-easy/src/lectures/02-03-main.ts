interface Student {
  id: number
  name: string
  gender: 'male' | 'female'
  age: number
}

function findStudentById(studentList: Student[], studentId: number): Student | undefined {
  if (studentList.length === 0) return undefined
  return studentList.find((x) => x.id === studentId)
}

const studentList: Student[] = [
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
