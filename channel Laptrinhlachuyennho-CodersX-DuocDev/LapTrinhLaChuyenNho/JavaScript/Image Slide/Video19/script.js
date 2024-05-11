function insertionSort(arr) {
  // Loop through unsorted part
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]
    // j = index of elements in sorted part
    let j = i - 1
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    // Place Number To Insert to the right of SE
    arr[j + 1] = numberToInsert
  }
  return arr
}

console.log('insertionSort([-5, 22, 6, -3, 4]):', insertionSort([-5, 22, 6, -3, 4]))

// Trong bài toán của mình có 2 vòng lặp lồng nhau nên có độ phức tạp là: BigO = O(n^2)
