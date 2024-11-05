const delay = async (timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(timeout)
    }, timeout)
  })
}

const main = async () => {
  const result = await Promise.all([delay(1000), delay(3000), delay(1000)])

  console.log(result)
}

main()
