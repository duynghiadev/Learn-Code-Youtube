/**
 * Function: Heap Sort
 * @param {Array} array The array to be sorted
 * @return {Array} The sorted array
 */
function heapSort(array) {
  console.time('Heap Sort Time')
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    // Build Heap
    var heapSize = array.length,
      temp
    for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
      heapify(array, i, heapSize)
    }

    // Heap Sort
    for (var j = heapSize - 1; j >= 1; j--) {
      temp = array[0]
      array[0] = array[j]
      array[j] = temp
      heapify(array, 0, --heapSize)
    }
    console.timeEnd('Heap Sort Time')
    return array
  } else {
    return 'Array is not an array!'
  }
}
/* Function: Maintain the Heap Property
@param  arr Array
@param  x   Array index
@param  len Heap size*/
function heapify(arr, x, len) {
  if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
    var l = 2 * x + 1,
      r = 2 * x + 2,
      largest = x,
      temp
    if (l < len && arr[l] > arr[largest]) {
      largest = l
    }
    if (r < len && arr[r] > arr[largest]) {
      largest = r
    }
    if (largest != x) {
      temp = arr[x]
      arr[x] = arr[largest]
      arr[largest] = temp
      heapify(arr, largest, len)
    }
  } else {
    return 'Array is not an array or x is not a number!'
  }
}
var arr = [91, 60, 96, 13, 35, 65, 46, 65, 10, 30, 20, 31, 77, 81, 22]
console.log(heapSort(arr)) //[10, 13, 20, 22, 30, 31, 35, 46, 60, 65, 65, 77, 81, 91, 96]
