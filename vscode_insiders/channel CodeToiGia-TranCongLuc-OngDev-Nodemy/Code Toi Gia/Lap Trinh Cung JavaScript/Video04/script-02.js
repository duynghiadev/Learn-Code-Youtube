const array = [1, 2, 3]
let newArray = []

// Define a function to append the contents of an array to another array
function appendArray(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i])
  }
}

// Append the contents of array to newArray twice
appendArray(newArray, array)
appendArray(newArray, array)

console.log('>>> array:', array)
console.log('array:', array)
console.log('🚀 newArray:', newArray)

/**
 * In this method:
 *
 * - We define a function appendArray that takes two arrays as parameters and appends the contents of the second array to the first array
 *
 * - We then call this function twice to append the contents of array to newArray
 *
 * - Finally, we log both the original array and the resulting newArray for clarity.
 */
