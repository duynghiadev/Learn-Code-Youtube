/**
 * Function: Insertion Sort
 * @param {Array} array The array to be sorted
 * @return {Array} The sorted array
 */
function insertionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    console.time('Insertion Sort Time:')
    for (var i = 1; i < array.length; i++) {
      var key = array[i]
      var j = i - 1
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j]
        j--
      }
      array[j + 1] = key
    }
    console.timeEnd('Insertion Sort Time:')
    return array
  } else {
    return 'Array is not an array!'
  }
}

/**
 * Function: Binary Insertion Sort
 * @param {Array} array The array to be sorted
 * @return {Array} The sorted array
 */
function binaryInsertionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    console.time('Binary Insertion Sort Time:')

    for (var i = 1; i < array.length; i++) {
      var key = array[i],
        left = 0,
        right = i - 1
      while (left <= right) {
        var middle = parseInt((left + right) / 2)
        if (key < array[middle]) {
          right = middle - 1
        } else {
          left = middle + 1
        }
      }
      for (var j = i - 1; j >= left; j--) {
        array[j + 1] = array[j]
      }
      array[left] = key
    }
    console.timeEnd('Binary Insertion Sort Time:')

    return array
  } else {
    return 'Array is not an array!'
  }
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(insertionSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(binaryInsertionSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
