/**
 * Function: Counting Sort
 * @param {Array} array The array to be sorted
 * @return {Array} The sorted array
 */
function countingSort(array) {
  var len = array.length,
    B = [],
    C = [],
    min = (max = array[0])
  console.time('Counting Sort Time')
  for (var i = 0; i < len; i++) {
    min = min <= array[i] ? min : array[i]
    max = max >= array[i] ? max : array[i]
    C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1
  }
  for (var j = min; j < max; j++) {
    C[j + 1] = (C[j + 1] || 0) + (C[j] || 0)
  }
  for (var k = len - 1; k >= 0; k--) {
    B[C[array[k]] - 1] = array[k]
    C[array[k]]--
  }
  console.timeEnd('Counting Sort Time')
  return B
}

var arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2]
console.log(countingSort(arr)) //[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]
