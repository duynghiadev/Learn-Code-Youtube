function binarySearch(targetValue, array) {
  let min = 0;
  let max = array.length - 1;
  let count = 0;
  let guessedIndex;

  console.log(`Initial array: ${array}`);
  console.log(`Target value: ${targetValue}`);

  while (min <= max) {
    count++;
    guessedIndex = Math.floor((max + min) / 2);
    console.log(`Iteration ${count}:`);
    console.log(`  min: ${min}`);
    console.log(`  max: ${max}`);
    console.log(`  guessedIndex: ${guessedIndex}`);
    console.log(`  array[guessedIndex]: ${array[guessedIndex]}`);

    if (array[guessedIndex] === targetValue) {
      console.log(`  Target found at index ${guessedIndex}`);
      return `Total count is ${count} times, and result is at ${guessedIndex}`;
    } else if (targetValue <= array[guessedIndex]) {
      console.log(`  Target is less than array[guessedIndex]. Adjusting max.`);
      max = guessedIndex - 1;
    } else {
      console.log(
        `  Target is greater than array[guessedIndex]. Adjusting min.`
      );
      min = guessedIndex + 1;
    }
  }

  console.log(`Target value not found in the array.`);
  return `Total count is ${count} times, and result is not found`;
}

const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

const result = binarySearch(73, primes);
console.log(result);
