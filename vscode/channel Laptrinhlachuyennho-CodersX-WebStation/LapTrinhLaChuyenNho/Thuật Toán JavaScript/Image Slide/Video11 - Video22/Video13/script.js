function recursiveFactorial(n) {
  if (n === 0) {
    return 1
  }
  return n * recursiveFactorial(n - 1)
}

console.log('recursiveFactorial(0):', recursiveFactorial(0))
console.log('recursiveFactorial(1):', recursiveFactorial(1))
console.log('recursiveFactorial(5):', recursiveFactorial(5))

// Big-O = O(n)
