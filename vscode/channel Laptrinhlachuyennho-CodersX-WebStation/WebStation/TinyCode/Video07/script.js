// 1. Normal Function
function normalFunction() {
  console.log('This is a normal function.')
}
console.log('Calling normal function:')
normalFunction() // Call the normal function
console.log('\n')

// 2. General Generator Function
function* generalGeneratorFunction() {
  let i = 0
  while (true) {
    yield i++
  }
}

console.log('General Generator Function created.\n')

// 3. General Object with General Function
const generalObject = {
  *generalGeneratorFunction() {
    let i = 0
    while (true) {
      yield i++
    }
  }
}

console.log('General Object with Generator Function created.\n')

// 4. Separating Generator Object
const generatorObject = generalObject.generalGeneratorFunction()
console.log('Generator Object separated from General Object.\n')

// 5. Use Case 1: Creating Iterable
const iterable = {
  [Symbol.iterator]: generalGeneratorFunction
}

console.log('Iterating using the general generator function:')
for (const value of iterable) {
  console.log(value)
  if (value >= 5) break // Limit output for demonstration
}
console.log('\n')

// 6. Use Case 2: Creating a Safe, Unlimited Loop
function safeUnlimitedLoop(generator) {
  const iterator = generator()
  console.log('Starting safe unlimited loop:')
  for (let i = 0; i < 10; i++) {
    // Limiting to 10 iterations for safety
    console.log(iterator.next().value)
  }
  console.log('Safe unlimited loop finished.\n')
}

safeUnlimitedLoop(generalGeneratorFunction)

// 7. Use Case 3: Control (Pause, Resume) the Loop
function controlLoop(generator) {
  const iterator = generator()
  let running = true

  function start() {
    running = true
    console.log('Loop started.')
    loop()
  }

  function stop() {
    running = false
    console.log('Loop stopped.')
  }

  function loop() {
    if (running) {
      console.log(iterator.next().value)
      setTimeout(loop, 1000) // Loop every second
    }
  }

  return { start, stop }
}

const loopController = controlLoop(generalGeneratorFunction)

// Start the loop
console.log('Starting the controlled loop:')
loopController.start()

// Example to stop the loop after 5 seconds
setTimeout(() => {
  loopController.stop()
}, 5000)
