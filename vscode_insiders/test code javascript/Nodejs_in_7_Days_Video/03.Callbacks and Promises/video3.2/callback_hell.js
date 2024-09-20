const fs = require('fs')
const path = require('path')

fs.readdir(__dirname, (err, files) => {
  if (err) {
    return
  }

  fs.readFile(path.resolve(__dirname, 'callback_hell.js'), (err, data) => {
    if (err) {
      return
    }

    fs.writeFile(path.resolve(__dirname, 'callback_hell_copy.js'), data, (err) => {
      console.log('done')
    })
  })
})
