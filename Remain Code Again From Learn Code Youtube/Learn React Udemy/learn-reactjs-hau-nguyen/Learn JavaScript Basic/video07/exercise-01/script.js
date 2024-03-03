function* myGenerator() {
  yield 1
  yield 2
  yield 3
}

const generator = myGenerator()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
