function addition(x) {
  return function(y) {
    return function(z) {
      return x + y + z
    }
  }
}

let additionByOne = addition(1)
let additionByTwo = additionByOne(2)
let additionByThree = additionByTwo(3)

console.log(additionByThree) // 6