// const myButton = <HTMLButtonElement>document.getElementById('btn')
// const myButtonEdit = document.getElementById('btn') as HTMLButtonElement

function getWord(w: 'hello' | 'goodbye') {
  console.log(w)
}

let x = <const>'Hello'
let y = 'Goodbye' as const

console.log(x)
console.log(y)
