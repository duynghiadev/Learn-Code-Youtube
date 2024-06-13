/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question('Enter elements of nums1 separated by space: ', (nums1Input) => {
    nums1 = nums1Input.split(' ').map(Number)
    readline.question('Enter the value of m: ', (mInput) => {
      m = parseInt(mInput)
      readline.question('Enter elements of nums2 separated by space: ', (nums2Input) => {
        nums2 = nums2Input.split(' ').map(Number)
        readline.question('Enter the value of n: ', (nInput) => {
          n = parseInt(nInput)

          const nums1Copy = Array.from(nums1)
          let i = 0,
            j = 0,
            p = 0

          console.log('Starting merge...')
          console.log('Initial nums1:', nums1.slice(0, m))
          console.log('Initial nums2:', nums2)

          while (i < m && j < n) {
            if (nums1Copy[i] < nums2[j]) {
              nums1[p] = nums1Copy[i]
              i++
            } else {
              nums1[p] = nums2[j]
              j++
            }
            p++
          }

          console.log('After merging initial parts of nums1 and nums2:')
          console.log('Merged nums1:', nums1.slice(0, p))

          if (i === m) {
            for (let k = j; k < n; k++) {
              nums1[p++] = nums2[k]
            }
          } else if (j === n) {
            for (let k = i; k < m; k++) {
              nums1[p++] = nums1Copy[k]
            }
          }

          console.log('Final merged nums1:', nums1.slice(0, m + n))
          readline.close()
        })
      })
    })
  })
}

merge([], 0, [], 0) // Start the merging process with empty arrays and lengths 0
