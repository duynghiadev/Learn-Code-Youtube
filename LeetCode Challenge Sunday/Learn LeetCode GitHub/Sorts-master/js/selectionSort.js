/**
 * Function: Selection Sort
 * @param {Array} arr The array to be sorted
 * @return {Array} The sorted array
 */
function selectionSort(arr) {
  var len = arr.length
  var minIndex, temp
  console.time('Selection Sort Time')
  for (var i = 0; i < len - 1; i++) {
    minIndex = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // Find the minimum element
        minIndex = j // Save the index of the minimum element
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.timeEnd('Selection Sort Time')
  return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(selectionSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
