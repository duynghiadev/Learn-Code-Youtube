// File 1: Sequential sleep calls with await
const { sleep } = require('./utils')

const sequentialTask = async () => {
  console.log('Type: Sequential')
  console.time('task')
  await sleep()
  await sleep()
  await sleep()
  await sleep()
  await sleep()
  console.timeEnd('task')
}

module.exports = sequentialTask
