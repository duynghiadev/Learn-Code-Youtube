// this is fibonacci sequence: 0 1 1 2 3 5 8 13 21 ...

function recursiveFibonacci(n) {
  if (n < 2) {
    return n
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log('recursiveFibonacci(0):', recursiveFibonacci(0))
console.log('recursiveFibonacci(1):', recursiveFibonacci(1))
console.log('recursiveFibonacci(6):', recursiveFibonacci(6))

/**
 * Big-O = O(n)- Iterative
 *
 * Big-O = O(2^n)
 */
