/**
 * - The findIndex() method executes a function for each array element
 * - The findIndex() return the index (position) of the first element that passes a test
 * - The findIndex() method return -1 if no match is found
 */

const ages = [3, 10, 90, 18, 20, 34]

/**
 * - Dưới đây là demo của method findIndex 👇
 */
function checkAge(age) {
  return age > 18
}
console.log(ages.findIndex(checkAge))

/**
 * - Sau đây là mình sẽ build lại hàm findIndex theo cách custom method 👇
 */

/**
 * - Các bạn lưu ý: callback là 1 hàm được nhận vào 1 hàm khác như 1 tham số
 * - Ở ví dụ dưới là 1 điển hình
 * - tham số callback được truyền vào là 1 tham số khi mình khai báo hàm findIndexCustom. callback là hàm hứng giá trị được trả về từ hàm khai báo của nó (cụ thể ở đây là hàm khai báo của nó tham số của hàm findIndexCustom được nhận vào 1 tham số là 1 hàm)
 * - tham số callback được hứng giá trị trả về từ hàm của nó. Và nhiệm vụ của callback là thực thi chức năng của hàm đó trả về
 * - Hãy luôn nhớ là callback là tham số hứng giá trị và thực thi chức năng của hàm khai báo của nó ❌❌❌
 */
Array.prototype.findIndexCustom = function (callback) {
  console.log('findIndexCustom running')
  for (let i = 0; i < this.length; i++) {
    console.log('this[i]:', this[i])

    const isTrue = callback(this[i])
    console.log(`element ${this[i]} is: ${isTrue}`)

    if (isTrue) {
      return i
    }
  }
  return -1
}

const index = ages.findIndexCustom(function (element) {
  if (element > 18) {
    return true
  }
  return false
})
console.log('index:', index)
