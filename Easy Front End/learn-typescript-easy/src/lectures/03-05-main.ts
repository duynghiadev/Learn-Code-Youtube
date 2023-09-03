interface Student5 {
  id: number
  name: string
}

const numberList: Array<number> = [1, 2, 3]
const wordList: Array<string> = ['easy', 'frontend']

const studentList2: Array<Student5> = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
]

console.log('Array 🚀', studentList2)

interface List<T> {
  length: number
  [index: number]: T
}

const numberList1: List<number> = [1, 2, 3]
const wordList1: List<string> = ['easy', 'frontend']

const studentList3: List<Student5> = [
  { id: 1, name: 'easy' },
  { id: 2, name: 'frontend' },
]

console.log('List 🚀', studentList2)

// keyof operator 👇

type StudentKeys = keyof Student5
const keys_1: StudentKeys = 'id'
const keys_2: StudentKeys = 'name'

// typeof operator 👇

console.log('string ✅', typeof 'easy frontend') // 'string'
console.log('number ✅', typeof 123) // 'number'
console.log('boolean ✅', typeof false) // 'boolean'
console.log('object ✅', typeof {}) // 'object'
console.log('object ✅', typeof []) // 'object'
console.log('function ✅', typeof function () {}) // 'function'
console.log('boolean ✅', typeof window !== 'undefined') // true on client, false on server

// Mapped types 👇

type MappedTypes = {
  [Key in keyof Student5]: boolean
}
