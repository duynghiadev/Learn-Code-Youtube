function binarySearch(targetValue, array) {
  let min = 0;
  let max = array.length - 1;
  let count = 0;
  let guessedIndex;

  while (min <= max) {
    count++;
    guessedIndex = Math.floor((max + min) / 2);

    if (array[guessedIndex] === targetValue) {
      return `Total count is ${count} times, and result is at ${guessedIndex}`;
    } else if (targetValue <= array[guessedIndex]) {
      max = guessedIndex - 1;
    } else {
      min = guessedIndex + 1;
    }
  }

  return `Total count is ${count} times, and result is not found`;
}

const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];
