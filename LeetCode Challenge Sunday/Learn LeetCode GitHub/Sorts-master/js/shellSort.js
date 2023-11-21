/**
 * Function: Shell Sort
 * @param {Array} arr The array to be sorted
 * @return {Array} The sorted array
 */
function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1
  console.time('Shell Sort Time:')
  while (gap < len / 5) {
    // Dynamically define the gap sequence
    gap = gap * 5 + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i]
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  console.timeEnd('Shell Sort Time:')
  return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(shellSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
