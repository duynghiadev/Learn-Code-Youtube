// use Promise.all to save performance
const p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolve success by use Promise.all \n')
    }, 1000)
  })
}

const handle = async () => {
  const [v1, v2, v3] = await Promise.all([p(1000), p(2000), p(3000)])
  console.log(v1, v2, v3)
  // only takes 3 seconds
  console.log('Finish when run Promise.all')
}

handle()
