function* lazySequence() {
  let index = 0
  while (true) {
    yield index++
  }
}

const generator = lazySequence()

console.log('generator:', generator)
console.log('generator.next():', generator.next())
console.log('generator.next().value:', generator.next().value)
console.log('generator.next().value:', generator.next().value)
console.log('generator.next().value:', generator.next().value)
console.log('generator.next().value:', generator.next().value)
console.log('generator.next().value:', generator.next().value)
console.log('generator.next().value:', generator.next().value)
