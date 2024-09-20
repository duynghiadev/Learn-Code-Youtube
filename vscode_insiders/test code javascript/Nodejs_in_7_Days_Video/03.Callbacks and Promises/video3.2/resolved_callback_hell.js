const fs = require('fs')
const path = require('path')

function readDirectory() {
  fs.readdir(__dirname, (err, files) => {
    if (err) {
      return
    }

    readFile()
  })
}

function readFile() {
  fs.readFile(path.resolve(__dirname, 'callback_hell.js'), (err, data) => {
    if (err) {
      return
    }

    copyToNewFile(data)
  })
}

function copyToNewFile(data) {
  fs.writeFile(path.resolve(__dirname, 'callback_hell_copy.js'), data, (err) => {
    console.log('done')
  })
}

readDirectory()
