function xayCaPhe() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bước 1: chuẩn bị xây cà phê')
      resolve({
        cafe: ['Robusta', 'Arabica']
      })
      console.log('Bước 1: DONE ✅')
    }, 2000)
  })
}

xayCaPhe()
  .then(function vatSua(dataResolveMot) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Bước 2: Lấy sữa + trộn với cà phê')
        resolve({
          newData: dataResolveMot.cafe[0] + ' + sữa ông thọ'
        })
        console.log('Bước 2: DONE ✅')
      }, 2000)
    })
  })
  .then(function phaCaPhe(dataResolveHai) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Bước 3: Lấy sữa + trộn với cà phê + pha cafe phê')
        resolve({
          result: dataResolveHai.newData + ' + pha bằng phin'
        })
        console.log('Bước 3: DONE ✅')
      }, 3000)
    })
  })
  .then(function (cafePhaXong) {
    console.log('cafePhaXong:', cafePhaXong)
  })
