function request(type) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      type === 'a' ? resolve('resolve') : reject('reject')
    }, 2000)
  })
}

// level 1
async function getData() {
  try {
    let res1 = await request('a')
    console.log('res1:', res1)
  } catch (error) {
    // todo
    console.error('>>> Level 1 >>> Error res1:', error)
  }

  try {
    let res2 = await request('b')
    console.log('res2:', res2)
  } catch (error) {
    // todo
    console.error('>>> Level 1 >>> Error res2:', error)
  }

  try {
    let res3 = await request('c')
    console.log('res3:', res3)
  } catch (error) {
    console.error('>>> Level 1 >>> Error res3:', error)
  }
}

getData()
