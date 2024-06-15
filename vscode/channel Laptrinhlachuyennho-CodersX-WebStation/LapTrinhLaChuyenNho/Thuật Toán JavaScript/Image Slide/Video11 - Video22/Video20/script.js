function bubbleSort(arr) {
  let swapped
  let iteration = 1

  do {
    swapped = false
    console.log(`🔄 Iteration ${iteration++}:`)
    for (let i = 0; i < arr.length - 1; i++) {
      console.log(`  Comparing ${arr[i]} and ${arr[i + 1]}`)
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
        console.log(`  Swapped ${arr[i]} and ${arr[i + 1]}`)
      }
    }
    console.log('Array after this iteration:', arr)
  } while (swapped)
}

const arr = [-5, 22, 6, -3, 4]
console.log('🚀 Original array:', arr)
bubbleSort(arr)
console.log('✅ Sorted array:', arr)

// Trong bài toán của mình có 2 vòng lặp nên độ phức tạp về thời gian của thuật toán là: `O(n^2)`
