// Toán tử &&
const a = true
const b = ''
const c = 'Hi'
const d = a && b && c
console.log('toán tử && --> d:', d, '--> typeof d:', typeof d)

// ========================================================

let check = 10
const handle = () => {
  return [1, 2, 3].map((item) => item * 2)
}

let value = []
let value1 = []

if (check > 9) {
  value = handle()
}

value1 = check > 9 && handle()
console.log('Example operator && --> value:', value)
console.log('Example operator && --> value1:', value1)

// ========================================================

// Toán tử hoặc --> ||

const a1 = null
const b1 = 12
const c1 = 'Hi'
const d1 = a1 || b1 || c1
console.log('Example operator || --> d:', d1)

// ========================================================

// Toán tử phủ định --> !

const a2 = null
const b2 = 12
const c2 = 'Hi'
const d2 = !(a2 || b2 || c2)
console.log('Example operator ! --> d2:', d2)

// ========================================================

// Toán tử 3 ngôi --> ? :

let name1 = 'alex'
name1 === 'alex' ? console.log('true') : console.log('false')
console.log('Example conditional (ternary) operator --> name1:', name1)

// ========================================================

// Toán tử template string ``

let a3 = `string text`
let b3 = `string text line 1
string text line 2
`
let c3 = `string text --> ${a3} <-- string text`
console.log('Operator template string:', c3)

const sum = (a, b) => a + b
let c4 = `string text --> ${sum(2, 3)} <-- string text`
console.log('Operator template string:', c4)
