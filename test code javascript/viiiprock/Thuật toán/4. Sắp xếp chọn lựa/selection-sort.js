function selectionSort(arr) {
  console.log(`Initial array: ${arr}`);

  for (let i = 0; i < arr.length; i++) {
    // find the smallest index
    let minIndex = i;
    console.log(`\n👉 Iteration ${i + 1}:`);
    console.log(
      `  🔍 Start with index ${i} (value: ${arr[i]}) as the current minimum (minIndex: ${minIndex})`
    );

    for (let j = i + 1; j < arr.length; j++) {
      console.log(
        `  🔍 Comparing index ${minIndex} (value: ${arr[minIndex]}) with index ${j} (value: ${arr[j]})`
      );
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
        console.log(`  ✔️ Found new minimum at index ${j} (value: ${arr[j]})`);
      }
    }

    // swap the index
    if (minIndex !== i) {
      console.log(
        `  ♻️ Swapping index ${i} (value: ${arr[i]}) with index ${minIndex} (value: ${arr[minIndex]})`
      );
      var temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;

      // Uncomment the following line to use ES6 array destructuring to swap
      // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    } else {
      console.log(
        `  👍 No need to swap, index ${i} already in correct position`
      );
    }

    console.log(`  ✅ Array after iteration ${i + 1}: ${arr}`);
  }

  console.log(`\nSorted array: ${arr}`);
  return arr;
}

const arr = [45, 58, 11, 25, 34, 32, 97, 58];
selectionSort(arr);
