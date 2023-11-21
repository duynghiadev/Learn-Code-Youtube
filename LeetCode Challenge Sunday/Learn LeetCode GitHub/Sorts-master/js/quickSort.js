/**
 * Function: Quick Sort
 * @param {Array} array The array to be sorted
 * @param {number} left The left index of the array
 * @param {number} right The right index of the array
 * @return {Array} The sorted array
 */
// Method One
function quickSort(array, left, right) {
  console.time('1. Quick Sort Time')
  if (
    Object.prototype.toString.call(array).slice(8, -1) === 'Array' &&
    typeof left === 'number' &&
    typeof right === 'number'
  ) {
    if (left < right) {
      var x = array[right],
        i = left - 1,
        temp
      for (var j = left; j <= right; j++) {
        if (array[j] <= x) {
          i++
          temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
      }
      quickSort(array, left, i - 1)
      quickSort(array, i + 1, right)
    }
    console.timeEnd('1. Quick Sort Time')
    return array
  } else {
    return 'Array is not an array or left or right is not a number!'
  }
}

// Method Two
var quickSort2 = function (arr) {
  console.time('2. Quick Sort Time')
  if (arr.length <= 1) {
    return arr
  }
  var pivotIndex = Math.floor(arr.length / 2)
  var pivot = arr.splice(pivotIndex, 1)[0]
  var left = []
  var right = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  console.timeEnd('2. Quick Sort Time')
  return quickSort2(left).concat([pivot], quickSort2(right))
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(quickSort(arr, 0, arr.length - 1)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(quickSort2(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
