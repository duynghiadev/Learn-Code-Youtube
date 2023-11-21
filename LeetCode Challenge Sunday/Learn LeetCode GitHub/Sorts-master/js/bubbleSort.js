/**
 * Method Description: Bubble Sort
 * @param {Array} arr
 * @return {Array}
 */
function bubbleSort(arr) {
  var len = arr.length
  console.time('Time consuming of bubble sort before improvement')
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        //Compare adjacent elements pairwise
        var temp = arr[j + 1] //element exchange
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.timeEnd('Time consuming of bubble sort before improvement')
  return arr
}
//1.Improve bubble sort
function bubbleSort2(arr2) {
  console.time('1. Time consuming of bubble sort after improvement')
  var i = arr.length - 1 // Initially, the final position remains unchanged
  while (i > 0) {
    var pos = 0 // At the beginning of each trip, no records are exchanged
    for (var j = 0; j < i; j++)
      if (arr[j] > arr[j + 1]) {
        pos = j // Record the location of the exchange
        var tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    i = pos // Prepare for the next sorting trip
  }
  console.timeEnd('1. Time consuming of bubble sort after improvement')
  return arr2
}
//2.Improve bubble sort
function bubbleSort3(arr3) {
  var low = 0
  var high = arr.length - 1 //Set the initial value of a variable
  var tmp, j
  console.time('2. Time consuming of bubble sort after improvement')
  while (low < high) {
    for (
      j = low;
      j < high;
      ++j //Forward bubbling, find the largest one
    )
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    --high //Modify the high value and move it forward one bit
    for (
      j = high;
      j > low;
      --j //Reverse bubbling to find the smallest one
    )
      if (arr[j] < arr[j - 1]) {
        tmp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = tmp
      }
    ++low //Modify the low value and move it back one bit
  }
  console.timeEnd('2. Time consuming of bubble sort after improvement')
  return arr3
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(selectionSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(bubbleSort2(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(bubbleSort3(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
