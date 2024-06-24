// GENERIC TYPE

const hello1 = (a: any) => {
  console.log('a:', a)
  return 2
}
console.log('hello1:', hello1('hello')) // hello1: 2
console.log('typeof hello1:', typeof hello1('goodbye')) // typeof hello1: number
console.log('hello1:', hello1(30)) // hello1: 30
console.log('typeof hello1:', typeof hello1(22)) // typeof hello1: number

console.log('----------------------------')

const hello2 = <Type>(a: Type) => {
  console.log(a)
  return 3
}
hello2<number>(30)
// hello2<string>(30)
hello2<string>('Duy nghia dev')

console.log('----------------------------')

console.log(typeof hello2<string>('Duy nghia dev'))
console.log(typeof hello2<number>(30))
console.log(hello2<string>('Duy nghia dev'))
console.log(hello2<number>(30))

console.log('----------------------------')
