function insertionSort(arr) {
  // Loop through unsorted part
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]
    console.log(`Step ${i}:`)
    console.log(`🟢 Number to insert: ${numberToInsert}`)
    // j = index of elements in sorted part
    let j = i - 1
    while (j >= 0 && arr[j] > numberToInsert) {
      console.log(`  ⬅️ Moving ${arr[j]} one step to the right`)
      arr[j + 1] = arr[j]
      j = j - 1
      console.log(`  j after this iteration: ${j}`)
    }
    // Place Number To Insert to the right of SE
    arr[j + 1] = numberToInsert
    // console.log('arr[j + 1]:', arr[j + 1])
    console.log(`  ✅ Updated arr[j + 1]: ${arr[j + 1]}`)
    console.log(`✅ Result after step ${i}: [${arr}]`)
  }
  return arr
}

const unsortedArray = [5, 2, 6, -3, 4]
console.log('Unsorted Array:', unsortedArray)
const sortedArray = insertionSort(unsortedArray)
console.log('Sorted Array:', sortedArray)

console.log('\n 🚀 Final sorted array:', insertionSort([5, 2, 6, -3, 4]))

// Trong bài toán của mình có 2 vòng lặp lồng nhau nên có độ phức tạp là: BigO = O(n^2)
