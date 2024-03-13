// UNION TYPE AND ENUM TYPE

// union
let size: number | string
size = 30
size = 'hello'
// size = true
console.log(`size: ${size}`)
console.log(`size: ${typeof size}`)
console.log(`size: ${JSON.stringify(size)}`)

console.log('----------------------------')

let size1: number | string | string[]
size1 = 30
size1 = 'hello'
size1 = ['hello']
console.log(`size1: ${size1}`)
console.log(`size1: ${typeof size1}`)
console.log(`size1: ${JSON.stringify(size1)}`)
console.log(`size1.length: ${size1.length}`)
console.log(`size1[0]: ${size1[0]}`)
console.log(`size1[1]: ${size1[1]}`)
console.log(`size1[2]: ${size1[2]}`)

console.log('----------------------------')

// enum
enum Color {
  Red,
  Green,
  Blue
}
let color = Color.Blue
let color1 = Color.Green
let color2 = Color.Red
console.log(color)
console.log(`color: ${JSON.stringify(color)}`)
console.log(`color: ${typeof color}`)
console.log(`color1: ${JSON.stringify(color1)}`)
console.log(`color2: ${JSON.stringify(color2)}`)

console.log('----------------------------')

enum Color1 {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue'
}
let color3 = Color1.Blue
let color4 = Color1.Green
let color5 = Color1.Red
console.log(color3)
console.log(`color3: ${JSON.stringify(color3)}`)
console.log(`color4: ${JSON.stringify(color4)}`)
console.log(`color5: ${JSON.stringify(color5)}`)
console.log(`color3: ${typeof color3}`)
console.log(`color4: ${typeof color4}`)
console.log(`color5: ${typeof color5}`)

console.log('----------------------------')
