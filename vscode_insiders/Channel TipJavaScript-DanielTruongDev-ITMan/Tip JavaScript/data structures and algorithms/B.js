// Programmer B is not familiar with efficient search techniques and uses a nested loop.

function findCommonElements(arr1, arr2) {
  const commonElements = [];

  for (const num1 of arr1) {
    for (const num2 of arr2) {
      if (num1 === num2) {
        commonElements.push(num1);
        break; // Break to avoid duplicates
      }
    }
  }
  return commonElements;
}

const ArrayA = [2, 5, 8, 10, 14];
const ArrayB = [1, 6, 4, 8, 3];

console.time("Programmer B");
const resultB = findCommonElements(ArrayA, ArrayB);
console.timeEnd("Programmer B");

console.log("Common elements:", resultB);
