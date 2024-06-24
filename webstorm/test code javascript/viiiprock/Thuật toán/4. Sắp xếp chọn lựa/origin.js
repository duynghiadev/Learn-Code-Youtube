function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // find the smallest index
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // swap the index
    if (minIndex !== i) {
      var temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;

      // or use ES6 destructuring to swap
      // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

const arr = [45, 58, 11, 25, 34, 32, 97, 58];
const sortedArr = selectionSort(arr);
console.log("Sorted array:", sortedArr);
