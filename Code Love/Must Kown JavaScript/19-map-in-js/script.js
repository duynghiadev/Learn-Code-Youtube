/**
 * map() creates a new array from calling a function for every array element.
 * map() does not execute the function for empty elements.
 * map() does not change the original array.
 */

/**
 * - Dưới đây là demo của method map 👇
 */
const ages = [1, 30, 19, 20]

const map = ages.map(function (element) {
  return element * 2
})
console.log('map:', map)

/**
 * - Sau đây là mình sẽ build lại hàm map theo cách custom method 👇
 */
Array.prototype.mapCustom = function (callback) {
  let newArray = []

  console.log('map running')
  for (const age of this) {
    const elementChange = callback(age)
    console.log('elementChange:', elementChange)
    newArray.push(elementChange)
    console.log('newArray:', newArray)
  }
  return newArray
}

// Mình hứng các giá trị của hàm map vào 1 biến (đó là map_1) => sau đó mình đặt biến map_1 bằng giá trị của hàm mapCustom => Cho nên khi mình log ra biến map_1 thì nó sẽ in ra các giá trị trong biến newArray (Do hàm mapCustom nó return về biến newArray)
const map_1 = ages.mapCustom(function (element) {
  console.log('element:', element)
  /**
   * - Trong hàm này dù mình có khai báo những dòng code gì đi chăng nữa => thì khi chạy code thì sẽ không vào hàm này
   * - Những đoạn code trong hàm này chỉ chạy khi mình truyền hàm này như 1 tham số (callback) và gọi callback đó thực thi thì những dòng code trong này sẽ chạy
   */
  return element * 2
})
console.log('===================================')
console.log('map_1:', map_1)
