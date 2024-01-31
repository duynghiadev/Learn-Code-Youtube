const myArray_1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let sum_1: number = myArray_1.reduce((a: number, b: number): number => a + b)
console.log('sum_1:', sum_1)

let max_1: number = Math.max(...myArray_1)
console.log('number max:', max_1)

let min_1: number = Math.min(...myArray_1)
console.log('min number:', min_1)
