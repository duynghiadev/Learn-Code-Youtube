// typeof 
let a = 'hello'
const b: typeof a = 'world'

function myFunc() {
  return {
    x: 10,
    y: 10
  }
}

type P = ReturnType<typeof myFunc>