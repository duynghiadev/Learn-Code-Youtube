const myArray = [33, 2, 3, 222, 3, 4, 54, 65]

let sortMyArray = myArray.sort((a, b) => a - b)
console.log('sortMyArray:', sortMyArray)

let firstNum = sortMyArray[0]
let lastNum = sortMyArray[sortMyArray.length - 1]
console.log('firstNum:', firstNum)
console.log('lastNum:', lastNum)

console.log('-------------------------')

let minNum = Math.min(...myArray)
let maxNum = Math.max(...myArray)
console.log('minNum:', minNum)
console.log('maxNum:', maxNum)
