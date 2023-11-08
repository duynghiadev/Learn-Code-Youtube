/**
 * forEach
 */
let myArr = [1, 2, 3, 4]
myArr.forEach((value) => {
  console.log('forEach', value)
  console.log('-------------------')
})

/**
 * map
 */
let myArr1 = [1, 2, 3, 4]
let result = myArr1.map((value) => {
  return value * 2
})
console.log('map', result)
console.log('-------------------')
