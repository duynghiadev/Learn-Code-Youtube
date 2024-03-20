// async await used only within a async function. And await used only with promise

const p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolve success')
    }, 1000)
  })
}

const handle = async () => {
  try {
    const value = await p()
    console.log('value resolve:', value)
  } catch (error) {
    console.log(error)
  } finally {
    console.log('Finish!')
  }
  console.log('Run final')
}

handle()
