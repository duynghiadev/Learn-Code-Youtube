function* fibonacciGenerator() {
  let a = 0,
    b = 1
  while (true) {
    yield a
    ;[a, b] = [b, a + b]
  }
}

const fibonacci = fibonacciGenerator()

console.log(fibonacci.next().value) // 0
console.log(fibonacci.next().value) // 1
console.log(fibonacci.next().value) // 1
console.log(fibonacci.next().value) // 2
console.log(fibonacci.next().value)
console.log(fibonacci.next().value)
console.log(fibonacci.next().value)
