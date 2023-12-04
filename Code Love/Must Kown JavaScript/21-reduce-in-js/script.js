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
