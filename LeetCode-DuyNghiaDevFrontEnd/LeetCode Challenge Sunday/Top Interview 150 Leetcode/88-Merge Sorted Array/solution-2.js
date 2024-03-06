/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const nums1Copy = Array.from(nums1)
  let i = 0,
    j = 0,
    p = 0

  console.log('Initial nums1:', nums1)
  console.log('Initial nums2:', nums2)
  console.log('Initial m:', m)
  console.log('Initial n:', n)

  while (i < m && j < n) {
    if (nums1Copy[i] < nums2[j]) {
      nums1[p] = nums1Copy[i]
      i++
    } else {
      nums1[p] = nums2[j]
      j++
    }

    p++

    console.log(
      `Moved ${nums1[p - 1]} from ${nums1Copy[i] < nums2[j] ? 'nums1' : 'nums2'}[${
        nums1Copy[i] < nums2[j] ? i : j
      }] to nums1[${p - 1}]`
    )
    console.log('Current nums1:', nums1)
    console.log('Current i:', i)
    console.log('Current j:', j)
    console.log('Current p:', p)
    console.log('\n') // Add line break
  }

  if (i === m) {
    for (let k = j; k < n; k++) {
      nums1[p++] = nums2[k]
      console.log(`Moved ${nums2[k]} from nums2[${k}] to nums1[${p - 1}]`)
      console.log('Current nums1:', nums1)
      console.log('Current p:', p)
      console.log('\n') // Add line break
    }
  } else if (j === n) {
    for (let k = i; k < m; k++) {
      nums1[p++] = nums1Copy[k]
      console.log(`Moved ${nums1Copy[k]} from nums1[${k}] to nums1[${p - 1}]`)
      console.log('Current nums1:', nums1)
      console.log('Current p:', p)
      console.log('\n') // Add line break
    }
  }

  console.log('Final nums1:', nums1)
}

const nums1 = [1, 3, 5, 0, 0, 0] // nums1 with space for nums2 elements
const m = 3 // Number of elements in nums1
const nums2 = [2, 4, 6] // nums2
const n = 3 // Number of elements in nums2

// Example usage:
merge(nums1, m, nums2, n)
