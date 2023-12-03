/**
 * The filter() method creates a new array filled with elements that pass a test provided by a function.
 * The filter() method does not execute the function for empty elements.
 * The filter() method does not change the original array.
 */

/**
 * - Dưới đây là demo của method map 👇
 */
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present']

const result = words.filter((word) => {
  return word.length > 6
})
console.log('result 1:', result)
console.log('==========================================================')

/**
 * - Sau đây là mình sẽ build lại hàm map theo cách custom method 👇
 */
Array.prototype.filterCustom = function (callback) {
  console.log('filter running')
  console.log('this:', this)
  console.log('callback:', callback)

  let newArrayFilter = []
  for (const item of this) {
    console.log('item:', item)
    const dataFilterTrue = callback(item)
    console.log('dataFilterTrue is:', dataFilterTrue)

    if (dataFilterTrue) {
      newArrayFilter.push(item)
    }
  }
  return newArrayFilter
}
// Dòng này mình log ra là để xem trong prototype của Array đã có hàm fileCustom chưa
console.log('Array.prototype:', Array.prototype)
/**
 * - Trong hàm này dù mình có khai báo những dòng code gì đi chăng nữa => thì khi chạy code thì sẽ không vào hàm này
 * - Những đoạn code trong hàm này chỉ chạy khi mình truyền hàm này như 1 tham số (callback) và gọi callback đó thực thi thì những dòng code trong này sẽ chạy
 */
const filterResult = words.filterCustom(function (element) {
  console.log('element:', element)
  if (element.length > 6) {
    return true
  }
  return false
})
console.log('==========================================================')
console.log('filterResult:', filterResult)
