const fs = require('fs')

const readPromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      resolve(data)
    })
  })
}

let result = []

readPromise('text1.txt')
  .then((resolveData1) => {
    const mot = resolveData1.toString()
    result.push(mot)
    return readPromise('text2.txt')
  })
  .then((resolveData2) => {
    const hai = resolveData2.toString()
    result.push(hai)
    return readPromise('text3.txt')
  })
  .then((resolveData3) => {
    const ba = resolveData3.toString()
    result.push(ba)
    console.log('result:', result)
  })
