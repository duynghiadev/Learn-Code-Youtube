interface Animal {
  name: string,
  age: number,
  gender?: number
}

interface Bird extends Animal {
  canFly?: boolean
}

type Animal_1 = {
  name: string,
  age: number,
  gender?: number
}

type Bird_1 = Animal_1 & {
  canFly?: boolean
}

// when decleration the name duplicate use 'interface', so that interface not error. But when decleration 'type' will error. It is a difference

// use interface ✅✅✅
interface Car {
  name: string,
  color: string,
  price: number
}

interface Car {
  position: string
}

// use type ❌❌❌

// type School = {
//   name: string,
//   grade: number
// }
//
// type School = {
//   teacher: string
// }