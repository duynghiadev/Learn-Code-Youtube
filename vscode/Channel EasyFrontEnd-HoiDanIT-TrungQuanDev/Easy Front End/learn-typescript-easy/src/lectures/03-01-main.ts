const count = 1 // const count: 1

const channelName = 'Easy Frontend' // const channelName: 'Easy Frontend'

const isActive = false // const isActive: false

// ---

let count1 = 1 // let count1: number

let channelName1 = 'Easy Frontend' // let channelName1: string

let isActive1 = false // let isActive1: boolean

// ---

const student = {
  id: 1,
  name: 'Easy Frontend',
}
// this is how ts understand:
// const student: {
//  id: number;
//  name: string;
// }

// because the props of an object can be updated
student.name = 'Typescript is easy! :P' // works

// ---

const student1 = {
  id: 1,
  name2: 'Easy Frontend',
} as const
// this is how ts understand:
// const student1: {
// readonly id: 1;
// readonly name2: "Easy Frontend";
// }

// you now can't update props of this object 👎
// student1.name2 = 'Typescript is easy, really?!' // ❌
// error: Cannot assign to 'name2' because it is a read-only property.
