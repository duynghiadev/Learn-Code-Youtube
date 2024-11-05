setTimeout(() => {
  console.log('Bước 1: chuẩn bị xây cà phê')
  const data = {
    cafe: ['Robusta', 'Arabica']
  }
  console.log('Bước 1: DONE')

  setTimeout(() => {
    console.log('Bước 2: Lấy sữa + trộn với cà phê')
    const updatedData = { newData: data.cafe[0] + ' + sữa ông thọ' }
    console.log('Bước 2: DONE')

    setTimeout(() => {
      console.log('Bước 3: Lấy sữa + trộn với cà phê + pha cafe phê')
      const finalResult = {
        result: updatedData.newData + ' + pha bằng phin'
      }
      console.log('Bước 3: DONE')

      setTimeout(() => {
        console.log('finalResult:', finalResult)
      }, 0)
    }, 3000)
  }, 2000)
}, 2000)
