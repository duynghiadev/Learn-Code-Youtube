const fs = require('fs')

fs.readFile('text1.txt', (error, dataMot) => {
  const file1 = dataMot.toString()
  console.log('dataMot -> file1:', file1)
  fs.readFile('text2.txt', (error, dataHai) => {
    const file2 = dataHai.toString()
    console.log('dataMot -> file2:', file2)
    fs.readFile('text3.txt', (error, dataBa) => {
      const file3 = dataBa.toString()
      console.log('dataMot -> file3:', file3)

      const result = [file1, file2, file3]
      console.log('result:', result)
    })
  })
})
