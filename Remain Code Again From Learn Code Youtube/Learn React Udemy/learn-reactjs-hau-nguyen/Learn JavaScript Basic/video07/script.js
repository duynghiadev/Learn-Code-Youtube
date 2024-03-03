function* generateId() {
  yield 1

  console.log('Continue to run...')
  yield 2

  console.log('Resume...')
  return 3
}

const newId = generateId()
console.log(newId.next())
console.log(newId.next())
console.log(newId.next())
