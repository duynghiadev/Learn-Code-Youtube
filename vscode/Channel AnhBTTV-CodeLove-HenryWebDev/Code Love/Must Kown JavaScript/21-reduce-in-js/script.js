/**
 * The reduce() method executes a reducer function for array element.
 * The reduce() method returns a single value: the function's accumulated result.
 * The reduce() method does not execute the function for empty array elements.
 * The reduce() method does not change the original array.
 */

/**
 * - The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
 *
 * - The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
 *
 * - Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:
 */

const array = [1, 2, 3, 4]

/**
 * - Dưới đây là demo của method map 👇
 */

// lần chạy thứ 1: accumulator = 0 (initValue), currentValue = 1 => return 0 + 1
// lần chạy thứ 2: accumulator = 1, currentValue = 2 => return 1 + 2
// lần chạy thứ 3: accumulator = 3, currentValue = 3 => return 3 + 3
// lần chạy thứ 4: accumulator = 6, currentValue = 4 => return 6 + 4

// không có lần chạy thứ 5 do mảng đã hết phần tử. Vì mảng đã kết thúc tại phần tử số 4 ❌❌❌
// khi trong mảng không còn phần tử nào nữa thì vòng lặp nó sẽ tự return về giá trị của biến lưu trữ ❌❌❌

// lần chạy thứ 1: accumulator = array[0], currentValue = 2 => return 1 + 2
// lần chạy thứ 2: accumulator = 3, currentValue = 3 => return 3 + 3
// lần chạy thứ 3: accumulator = 6, currentValue = 4 => return 6 + 4

const sumWithInitial = array.reduce((accumulator, currentValue, index) => {
  console.table({
    'lần chạy thứ': index + 1,
    currentValue: currentValue,
    accumulator: accumulator,
    total: accumulator + currentValue
  })
  return accumulator + currentValue
}, 0)
console.log('sumWithInitial:', sumWithInitial)
console.log('----------------------------------------')

/**
 * - Sau đây là mình sẽ build lại hàm map theo cách custom method 👇
 */

/**
 * 1. Khi phân tích phương thức reduce thì chúng ta nên chia làm 2 case:
 * - case 1: có giá trị khởi tạo
 * - case 2: callback nó không truyền vào (giá trị khởi tạo nó là optional => có cũng được mà không có cũng được)
 *  - Trong case 2 này thì chúng ta có 2 cái cần xử lý đó là:
 *    + Chúng ta phải gán giá trị khởi tạo bằng cái giá trị đầu tiên trong mảng
 *    + Chúng ta phải loop từ phần tử thứ 2 => bỏ qua index = 1 đi => Bởi vì giá trị khởi tạo là bằng 1 và nó không có callback nào trả về => Cho nên chúng ta phải bỏ qua thằng giá trị 1 đi mà phải loop từ phần tử thứ 2
 */

/**
 * Đây là ví dụ trong case 1: có giá trị khởi tạo
 * @param {*} callback
 * @param {*} initialValue
 * @returns
 */
Array.prototype.reduceCustom = function (callback, initialValue) {
  console.log('Dưới đây là ví dụ trong case 1: có giá trị khởi tạo 🚀🚀🚀')
  console.log('----------------------------------------')

  console.log('reduceCustom running....')
  // this ở đây là cái gì? Do array gọi đến phương thức này (reduceCustom) nên this đó chính là cái mảng đó
  console.log('this of reduceCustom:', this)
  console.log('callback:', callback)
  console.log('----------------------------------------')

  let accumulator
  accumulator = initialValue
  let i = 0
  while (i < this.length) {
    console.log('accumulator initial:', accumulator)

    accumulator = callback(accumulator, this[i])

    console.log('result reduce:', accumulator)
    console.log('----------------------------------------')

    i++
  }
  return accumulator
}

const resultCustom = array.reduceCustom(function (accumulator, currentValue) {
  console.log('accumulator in reduce custom:', accumulator)
  console.log('currentValue in reduce custom:', currentValue)

  console.table({
    accumulator: accumulator,
    currentValue: currentValue,
    total: accumulator + currentValue
  })
  console.log('----------------------------------------')

  let totalCustom = accumulator + currentValue
  console.log('totalCustom:', totalCustom)
  return totalCustom
}, 10) // giá trị khởi tạo là 10
console.log('resultCustom:', resultCustom)
console.log('----------------------------------------')
console.log('Dưới đây là ví dụ trong case 2: không có giá trị khởi tạo 🚀🚀🚀')
console.log('----------------------------------------')

/**
 * Đây là ví dụ trong case 2: không có giá trị khởi tạo
 * @param {*} callback
 * @param {*} initialValue
 * @returns
 */
Array.prototype.reduceCustom_1 = function (callback, initialValue) {
  console.log('initialValue but not initial value:', initialValue)
  console.log('reduceCustom_1 running....')
  // this ở đây là cái gì? Do array gọi đến phương thức này (reduceCustom_1) nên this đó chính là cái mảng đó
  console.log('this of reduceCustom_1:', this)
  console.log('callback:', callback)
  console.log('----------------------------------------')

  let i = 0
  let accumulator
  if (initialValue === undefined) {
    accumulator = this[0]
    i++
  } else {
    accumulator = initialValue
  }

  while (i < this.length) {
    console.log('accumulator initial:', accumulator)

    accumulator = callback(accumulator, this[i])

    console.log('result reduce:', accumulator)
    console.log('----------------------------------------')

    i++
  }
  return accumulator
}

const resultCustom_1 = array.reduceCustom_1(function (accumulator, currentValue) {
  console.log('accumulator in reduce custom:', accumulator)
  console.log('currentValue in reduce custom:', currentValue)

  console.table({
    accumulator: accumulator,
    currentValue: currentValue,
    total: accumulator + currentValue
  })
  console.log('----------------------------------------')

  let totalCustom = accumulator + currentValue
  console.log('totalCustom:', totalCustom)
  return totalCustom
}) // Ở đây không có giá trị khởi tạo
console.log('resultCustom_1 but not pass initial value:', resultCustom_1)
