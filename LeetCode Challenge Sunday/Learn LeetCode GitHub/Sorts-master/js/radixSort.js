/**
 * Function: Radix Sort
 * @param {Array} arr The array to be sorted
 * @param {number} maxDigit The maximum number of digits
 * @return {Array} The sorted array
 */
// LSD Radix Sort
function radixSort(arr, maxDigit) {
  var mod = 10
  var dev = 1
  var counter = []
  console.time('Radix Sort Time')
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev)
      if (counter[bucket] == null) {
        counter[bucket] = []
      }
      counter[bucket].push(arr[j])
    }
    var pos = 0
    for (var j = 0; j < counter.length; j++) {
      var value = null
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value
        }
      }
    }
  }
  console.timeEnd('Radix Sort Time')
  return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(radixSort(arr, 2)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
