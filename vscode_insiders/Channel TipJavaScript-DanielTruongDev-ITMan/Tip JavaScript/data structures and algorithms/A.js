// Programmer A uses a hash set to efficiently find common elements.

function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1)
  const commonElements = []

  for (const num of arr2) {
    if (set1.has(num)) {
      commonElements.push(num)
    }
  }
  return commonElements
}

const ArrayA = [2, 5, 8, 10, 14]
const ArrayB = [1, 6, 4, 8, 3]

console.time('Programmer A')
const resultA = findCommonElements(ArrayA, ArrayB)
console.timeEnd('Programmer A')

console.log('Common elements:', resultA)
