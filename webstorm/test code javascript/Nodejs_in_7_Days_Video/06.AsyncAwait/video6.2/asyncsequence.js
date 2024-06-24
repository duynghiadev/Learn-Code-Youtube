const delay = async (timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(timeout)
    }, timeout)
  })
}

const sequencer = async (arr) => {
  const results = []

  for (let func of arr) {
    const result = await func()
    results.push(result)
  }

  return results
}

const main = async () => {
  const result = await sequencer([
    async () => {
      return delay(1000)
    },
    async () => {
      return delay(2000)
    },
    async () => {
      return delay(3000)
    }
  ])

  console.log(result)
}

main()
