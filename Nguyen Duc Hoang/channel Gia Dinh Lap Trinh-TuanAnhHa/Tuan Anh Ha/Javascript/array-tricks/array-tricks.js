const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let sum = myArray.reduce((a, b) => a + b)
console.log('sum:', sum)

let max = Math.max(...myArray)
console.log('number max:', max)

let min = Math.min(...myArray)
console.log('min number:', min)
