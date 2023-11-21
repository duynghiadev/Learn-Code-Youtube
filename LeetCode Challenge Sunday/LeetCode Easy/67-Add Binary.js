/**
 * @param {string} a
 * @param {string} b
 * @return {string}

 */
var addBinary = function (a, b) {
  let smallest = a.length > b.length ? b : a
  let largest = a.length > b.length ? a : b
  let zeroTimesLength = largest.length - smallest.length

  for (let i = 0; i < zeroTimesLength; i++) {
    smallest = 0 + smallest
  }
  let carry = 0
  for (let i = largest.length - 1; i >= 0; i--) {
    let number = carry + +smallest[i] + +largest[i]
    if (number >= 2) {
      carry = Math.trunc(number / 2)
      largest = largest.substring(0, i) + (number % 2) + largest.substring(i + '0'.length)
    } else if (number == 1) {
      largest = largest.substring(0, i) + Math.trunc(number % 2) + largest.substring(i + '0'.length)
      carry = Math.trunc(number / 2)
    } else {
      largest = largest.substring(0, i) + '0' + largest.substring(i + '0'.length)
    }
  }
  if (carry == 1) return 1 + largest
  return largest
}

console.log(addBinary('1111', '1111'))

console.time(`Testing`)
console.timeEnd(`Testing`)
