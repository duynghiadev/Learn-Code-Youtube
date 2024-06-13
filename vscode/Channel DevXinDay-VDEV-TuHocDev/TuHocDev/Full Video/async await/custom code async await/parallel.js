// File 2: Parallel sleep calls using Promise.all
const { sleep } = require('./utils')

const parallelTask = async () => {
  console.log('Type: Parallel')
  console.time('task')
  const [task1, task2, task3, task4, task5] = await Promise.all([
    sleep(),
    sleep(),
    sleep(),
    sleep(),
    sleep()
  ])
  console.timeEnd('task')
}

module.exports = parallelTask
