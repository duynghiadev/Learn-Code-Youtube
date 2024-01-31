// Primitive type 🚀
type StudentName = string
type StudentAge = number
type IsTopStudent = boolean

// Object type 🚀
type Student2 = {
  readonly id: number
  name: string
  age?: number // optional
}

interface Student3 {
  readonly id: number
  name: string
  age?: number // optional
}

const studentA: Student2 = {
  id: 1,
  name: 'Alice',
}
console.log('Object type 🚀', studentA)

// studentA.id = 2 // Cannot assign to 'id' because it is a read-only property ❌

const studentB: Student2 = {
  id: 2,
  name: 'Bob',
  age: 18,
}
console.log('Object type 🚀', studentB)

// studentB.id = 2 // Cannot assign to 'id' because it is a read-only property ❌

// Union type 🚀
type Status = 'active' | 'inactive'
type ProductStatus = 0 | 1 | 2 | 3
type StudentId = number | string

interface Student {
  id1: number | string
  name: string
  gender: 'male' | 'female'
  grade: 'A' | 'B' | 'C' | 'D' | 'E'
}

let x: number | string = 1
x = 'super' // works ✅
x = 123 // works ✅
// x = false; ❌ // ts error: Type 'boolean' is not assignable to type 'string | number'.ts(2322)

// Intersection type 🚀
interface BusinessPartner {
  name: string
  credit: number
}

interface Identity {
  id: number
  name: string
}

interface Contact {
  email: string
  phone: string
}

type Employee = Identity & Contact & BusinessPartner
type Customer = BusinessPartner & Contact

// interface way
interface Employee1 extends Identity, Contact {}
interface Customer1 extends BusinessPartner, Contact {}

let c: Customer = {
  name: 'ABC Inc.',
  credit: 1000000,
  email: 'sales@abcinc.com',
  phone: '(408)-897-5735',
}
console.log('Intersection type 🚀', c) // ✅

let e: Employee = {
  id: 100,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '(408)-897-5684',
  credit: 1000,
}
console.log('Intersection type 🚀', e) // ✅
