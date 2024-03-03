function* stateMachine() {
  let state = 0

  while (true) {
    switch (state) {
      case 0:
        console.log('Entering State 0')
        // Do something for state 0
        yield
        console.log('Exiting State 0')
        state = 1
        break
      case 1:
        console.log('Entering State 1')
        // Do something else for state 1
        yield
        console.log('Exiting State 1')
        state = 2
        break
      // Add more cases for additional states...

      // New case for exiting the state machine
      case 'exit':
        console.log('Exiting State Machine')
        return // This ends the generator
    }
  }
}

// Function to start the state machine
function startStateMachine() {
  const machine = stateMachine()

  function executeNext(value) {
    const { done } = machine.next(value)
    if (!done) {
      // If not done, execute the next state after a delay (simulating asynchronous operations)
      setTimeout(() => {
        executeNext()
      }, 1000)
    }
  }

  // Start the state machine by executing the first state
  executeNext()

  // Trigger an exit after a certain time (simulating an exit condition)
  setTimeout(() => {
    console.log('Requesting State Machine to Exit')
    executeNext('exit')
  }, 5000) // Change the timeout value as needed
}

// Example usage
startStateMachine()
