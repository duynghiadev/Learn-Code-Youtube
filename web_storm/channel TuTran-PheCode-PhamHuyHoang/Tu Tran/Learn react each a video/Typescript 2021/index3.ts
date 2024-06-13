// FUNCTION TYPE

// function return value
const sum = (num1: any, num2: any) => {
  return num1 + num2
}
console.log(sum('Hello', 1))

console.log('--------------------------------------')

const sum1 = (num1: number, num2: number) => {
  return num1 + num2
}
console.log(sum1(1, 2))

console.log('--------------------------------------')

const sum2 = (num1: string, num2: string) => {
  return num1 + num2
}
console.log(sum2('hello', 'world'))

console.log('--------------------------------------')

type functionType = (num1: number, num2: number) => number

type functionType1 = { num1: number; num2: number }

const sum3: functionType = (num1: number, num2: number) => {
  return num1 + num2
}
console.log(sum3(1, 2))

console.log('--------------------------------------')

const sum4: functionType = (num1: number, num2: number) => {
  return num1 + num2
}
console.log(sum4(1, 2))

console.log('--------------------------------------')

// function not return value
const sum5 = (num1: number, num2: number) => {
  num1 + num2
}
console.log(sum5(1, 2))

console.log('--------------------------------------')

const hello = (): void => {
  console.log('hello world')
}
hello()

console.log('--------------------------------------')
