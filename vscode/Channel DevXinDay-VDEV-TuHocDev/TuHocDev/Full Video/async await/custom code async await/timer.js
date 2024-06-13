// File 3: Timer measurement for the tasks
const sequentialTask = require('./sequential')
const parallelTask = require('./parallel')

const measureTime = async () => {
  console.log('Timer Measurement for Tasks:')

  console.log('Sequential Task:')
  await sequentialTask()

  console.log('\nParallel Task:')
  await parallelTask()
}

module.exports = measureTime

// Run the measurement
measureTime()
