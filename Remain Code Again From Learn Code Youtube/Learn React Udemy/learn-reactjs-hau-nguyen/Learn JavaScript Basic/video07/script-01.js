function* loopRange(from, to) {
  for (let i = from; i <= to; i++) {
    yield i
  }

  console.log('to:', to)
  return to + 1
}

const range = loopRange(0, 5)

for (const i of range) {
  console.log('i in for:', i)
}