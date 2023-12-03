/**
 * The every() method executes a function for each array element.
 * The every() method returns true if the function returns true for all elements.
 * The every() method returns false if the function returns false for one element.
 * The every() method does not execute the function for empty elements.
 * The every() method does not change the original array
 */

/**
 * - Dưới đây là demo của method every 👇
 * - Có trong mảng có 1 item bị false thì nó sẽ trả về false
 * - Nếu tất cả element true thì nó sẽ trả về true
 */
const ages = [1, 30, 19, 20]

const everyResult = ages.every(function (element) {
  if (element > 18) {
    return true
  }
  return false
})
console.log('everyResult:', everyResult)

/**
 * - Sau đây là mình sẽ build lại hàm every theo cách custom method 👇
 */
Array.prototype.everyCustom = function (callback) {
  console.log('this:', this)
  // loop array
  for (const item of this) {
    console.log('item:', item)
    const isTrue = callback(item)
    console.log(`${item} is: `, isTrue)
    if (!isTrue) {
      return false
    }
    console.log('item in isTrue:', item)
  }
  return true
}

const everyResult_1 = ages.everyCustom(function (element) {
  /**
   * - Trong hàm này dù mình có khai báo những dòng code gì đi chăng nữa => thì khi chạy code thì sẽ không vào hàm này
   * - Những đoạn code trong hàm này chỉ chạy khi mình truyền hàm này như 1 tham số (callback) và gọi callback đó thực thi thì những dòng code trong này sẽ chạy
   */
  console.log('element:', element)
  if (element > 18) {
    return true
  }
  return false
})
console.log('=========================================================')
console.log('✅Nếu tất cả element true thì nó sẽ trả về true✅')
console.log('❌Có trong mảng có 1 item bị false thì nó sẽ trả về false❌')
console.log('👉everyResult_1:', everyResult_1)
