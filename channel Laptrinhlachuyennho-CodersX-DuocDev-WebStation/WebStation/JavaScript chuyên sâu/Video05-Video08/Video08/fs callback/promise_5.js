const fs = require('fs')

fs.readFile('text1.txt', (error, dataMot) => {
  const file1 = dataMot.toString()
  fs.readFile('text2.txt', (error, dataHai) => {
    const file2 = dataHai.toString()
    fs.readFile('text3.txt', (error, dataBa) => {
      const file3 = dataBa.toString()
      const result = [file1, file2, file3]
      console.log('result:', result)
    })
  })
})
