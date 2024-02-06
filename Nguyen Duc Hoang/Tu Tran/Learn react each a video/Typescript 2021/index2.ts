// ARRAY TYPE

// any[]
let array: any[] = []
array.push(3)
array.push('hello')
array.push(false)
console.log(`array: ${JSON.stringify(array)}`)
console.log(`array.length: ${array.length}`)

console.log('--------------------------------------')

// string[]
let array1: string[] = ['a', 'b', 'c']
console.log('array1:', array1)
console.log(`array1: ${JSON.stringify(array1)}`)
console.log(`array1.length: ${array1.length}`)
console.log(`array1[0]: ${array1[0]}`)
console.log(`array1[1]: ${array1[1]}`)
console.log(`array1[2]: ${array1[2]}`)

console.log('--------------------------------------')

let array2: Array<string> = ['a', 'b', 'c']
console.log('array2:', array2)
console.log(`array2: ${JSON.stringify(array2)}`)
console.log(`array2.length: ${array2.length}`)
console.log(`array2[0]: ${array2[0]}`)
console.log(`array2[1]: ${array2[1]}`)
console.log(`array2[2]: ${array2[2]}`)

console.log('--------------------------------------')

// number[]
let array3: number[] = [1, 2, 3]
console.log('array3:', array3)
console.log(`array3: ${JSON.stringify(array3)}`)
console.log(`array3.length: ${array3.length}`)
console.log(`array3[0]: ${array3[0]}`)
console.log(`array3[1]: ${array3[1]}`)
console.log(`array3[2]: ${array3[2]}`)

console.log('--------------------------------------')

let array4: Array<number> = [1, 2, 3]
console.log('array4:', array4)
console.log(`array4: ${JSON.stringify(array4)}`)
console.log(`array4.length: ${array4.length}`)
console.log(`array4[0]: ${array4[0]}`)
console.log(`array4[1]: ${array4[1]}`)
console.log(`array4[2]: ${array4[2]}`)

console.log('--------------------------------------')

// boolean[]
let array5: boolean[] = [true, false, true]
console.log('array5:', array5)
console.log(`array5: ${JSON.stringify(array5)}`)
console.log(`array5.length: ${array5.length}`)
console.log(`array5[0]: ${array5[0]}`)
console.log(`array5[1]: ${array5[1]}`)
console.log(`array5[2]: ${array5[2]}`)

console.log('--------------------------------------')

// object[]
let array6: object[] = [
  { name: 'Nguyen Duc Hoang', age: 30, address: 'Ha Noi', isValid: true },
  { name: 'Tu Tran', age: 20 }
]
array6.push({ name: 'Duy Nghia Dev', age: 30 })
array6.push({ name: 'Son Tung', age: 30 })
console.log('array6:', array6)
console.log(`array6: ${JSON.stringify(array6)}`)
console.log(`array6.length: ${array6.length}`)
console.log(`array6[0]: ${array6[0]}`)
console.log(`array6[1]: ${array6[1]}`)

console.log('--------------------------------------')

let array7: {
  name: string
  age: number
}[] = [
  { name: 'Nguyen Duc Hoang', age: 30 },
  { name: 'Tu Tran', age: 20 }
]
array7.push({ name: 'Duy Nghia Dev', age: 30 })
array7.push({ name: 'Son Tung', age: 30 })
console.log('array7:', array7)
console.log(`array7: ${JSON.stringify(array7)}`)
console.log(`array7.length: ${array7.length}`)
console.log(`array7[0]: ${array7[0]}`)
console.log(`array7[1]: ${array7[1]}`)

console.log('--------------------------------------')
