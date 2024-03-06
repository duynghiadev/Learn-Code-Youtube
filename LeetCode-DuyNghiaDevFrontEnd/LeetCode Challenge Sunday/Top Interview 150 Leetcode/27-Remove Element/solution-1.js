/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

function removeElement(nums, val) {
  let k = 0 // Initialize counter for elements not equal to val

  // Loop through the array
  for (let i = 0; i < nums.length; i++) {
    // Log iteration details
    console.log(`⮕ Iteration ${i + 1}: nums[${i}] = ${nums[i]}, k = ${k}\n`)

    // Check if the current element is equal to val
    if (nums[i] === val) {
      console.log(`  ➡️ Element ${nums[i]} is equal to val ${val}, skipping.❌\n`)
    } else {
      // Log details for non-equal elements
      console.log(`  ➡️ Element ${nums[i]} is not equal to val ${val}.✅`)
      console.log(`  ➡️ Placing ${nums[i]} at position k ${k}.\n`)

      // Place the element at position k and increment k
      nums[k] = nums[i]
      console.log(`  ➡️ After placing ${nums[i]} at position k ${k}, k becomes ${k + 1}.`)
      console.log(`  ➡️ Updated nums[${k}] = ${nums[k]}, k = ${k + 1}\n`)
      k++
    }
  }

  return k // Return the number of elements not equal to val
}

// Test cases
let nums1 = [3, 2, 2, 3]
let val1 = 3
console.log('Original nums1: [' + nums1.join(', ') + ']\n')
console.log('val1:', val1 + '\n')
console.log('Output: ' + removeElement(nums1, val1) + '\n') // Output: 2
console.log(
  'Modified nums1: [' +
    nums1.slice(0, 2).join(', ') +
    ', ' +
    Array(nums1.length - 2)
      .fill('_')
      .join(', ') +
    ']\n'
) // Output: [2, 2, _, _]

console.log('\n')
console.log('--------------------------------------------------\n') // Additional separator
console.log('\n')

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2]
let val2 = 2
console.log('Original nums2: [' + nums2.join(', ') + ']\n')
console.log('val2:', val2 + '\n')
console.log('Output: ' + removeElement(nums2, val2) + '\n') // Output: 5
console.log(
  'Modified nums2: [' +
    nums2.slice(0, 5).join(', ') +
    ', ' +
    Array(nums2.length - 5)
      .fill('_')
      .join(', ') +
    ']\n'
) // Output: [0, 1, 4, 0, 3, _, _, _]
console.log('\n')
