function request(type) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      type === 'a' ? resolve('resolve') : reject('reject')
    }, 2000)
  })
}

// Level 2
const getDataLevel2 = async () => {
  let res_other_1 = await request('a')
    .then((response) => console.log('response a:', response))
    .catch((error) => console.error('>>> Level 2 >>> Error res_other_1:', error))

  let res_other_2 = await request('b')
    .then((response) => console.log('response b:', response))
    .catch((error) => console.error('>>> Level 2 >>> Error res_other_2:', error))

  let res_other_3 = await request('c')
    .then((response) => console.log('response c:', response))
    .catch((error) => console.error('>>> Level 2 >>> Error res_other_3:', error))
}

getDataLevel2()
