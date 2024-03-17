// Hàm delay 1s
const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000))
}

const readfile = async () => {
  console.time('task')
  // 1
  // const task_1 = await sleep()
  // const task_2 = await sleep()
  // const task_3 = await sleep()
  // const task_4 = await sleep()
  // const task_5 = await sleep()

  // 2
  const task_1 = sleep()
  const task_2 = sleep()
  const task_3 = sleep()
  const task_4 = sleep()
  const task_5 = sleep()

  // const _task_1 = await task_1
  // const _task_2 = await task_2
  // const _task_3 = await task_3
  // const _task_4 = await task_4
  // const _task_5 = await task_5

  const [_task_1, _task_2, _task_3, _task_4, _task_5] = await Promise.all([
    task_1,
    task_2,
    task_3,
    task_4,
    task_5
  ])
  console.timeEnd('task')
}
readfile()
