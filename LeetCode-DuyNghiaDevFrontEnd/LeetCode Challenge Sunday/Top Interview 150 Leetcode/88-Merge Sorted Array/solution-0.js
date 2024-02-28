var merge = function (nums1, m, nums2, n) {
  const nums1Copy = nums1.slice(0, m) // Make a copy of the first m elements of nums1
  let i = 0,
    j = 0,
    p = 0 // Initialize pointers for nums1Copy, nums2, and the merged array

  // Iterate through nums1Copy and nums2 while there are elements in both arrays
  while (i < m && j < n) {
    if (nums1Copy[i] < nums2[j]) {
      nums1[p] = nums1Copy[i] // Place the smaller element from nums1Copy
      i++ // Move pointer to the next element in nums1Copy
    } else {
      nums1[p] = nums2[j] // Place the smaller element from nums2
      j++ // Move pointer to the next element in nums2
    }
    p++ // Move pointer to the next position in the merged array
  }

  // Copy any remaining elements from nums2 to the merged array
  while (j < n) {
    nums1[p++] = nums2[j++]
  }
}
