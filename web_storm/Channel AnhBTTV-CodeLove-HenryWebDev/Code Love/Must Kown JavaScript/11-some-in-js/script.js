/**
 * The some() method checks if any array elements pass a test (provided as a callback function).
 * The some() method executes the callback function once for each array element.
 * The some() method returns true (and stops) if the function returns true for one of the array elements.
 * The some() method returns false if the function returns false for all of the array elements.
 * The some() method does not execute the function for empty array elements.
 * The some() method does not change the original array.
 */

const ages = [3, 10, 18, 15]

/**
 * - Dưới đây là demo của method some 👇
 */
const someResult = ages.some(function (element) {
  if (element > 18) {
    return true
  }
  return false
})

console.log('someResult:', someResult)

/**
 * - Sau đây là mình sẽ build lại hàm some theo cách custom method 👇
 */
Array.prototype.someCustom = function (callback) {
  if (this.length === 0) {
    console.log('length is false')
  }
  console.log('length is true')

  console.group('custom running...')
  console.log('callback:', callback)
  console.log('this:', this)

  /**
   * - Mỗi lần chạy là mỗi lần độc lập với nhau
   * - Chạy xong số này thì nó chạy lại hàm tiếp theo
   */

  let i = 0
  for (let item of this) {
    console.log(`item in this ${item}, runs time: ${i}`)
    const isTrue = callback(item)
    console.log(`item return ${isTrue}, runs time: ${i}`)
    if (isTrue) {
      return true
    }
    i++
  }
  return false
}

const someResult_1 = ages.someCustom(function (element) {
  if (element > 18) {
    return true
  }
  return false
})
console.log('someResult_1:', someResult_1)
