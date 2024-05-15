// crypto
const start = Date.now()
const crypto = require('crypto')
const fs = require('fs')
const https = require('https')

// default is 4. I can edit this number
// process.env.UV_THREADPOOL_SIZE = 4

https
  .get('https://www.google.co.nz/', (res) => {
    res.on('data', (d) => {})
    res.on('end', () => {
      const end = Date.now()
      const tong = end - start
      console.log(`HTTPS Request - \t:${tong}`)
    })
  })
  .on('error', (e) => {
    console.error(e)
  })

function read() {
  fs.readFile(__filename, function (err, data) {
    const end = Date.now()
    const tong = end - start
    console.log(`THREADPOOL - fs - :\t ${tong}`)
  })
}

function theHash() {
  // code synchronous
  // crypto.pbkdf2Sync('hoccoban', 'https://www.youtube.com/@hoccoban/featured', 100000, 64, 'sha512')
  // const end = Date.now()
  // const tong = end - start
  // console.log(`THREADPOOL - crypto SYNC - : \t${tong}`)

  // code asynchronous
  crypto.pbkdf2(
    'hoccoban',
    'https://www.youtube.com/@hoccoban/featured',
    100000,
    1024,
    'sha512',
    function () {
      const end = Date.now()
      const tong = end - start
      console.log(`THREADPOOL - crypto ASYNC - : \t${tong}`)
    }
  )
}

read()
theHash()
theHash()
theHash()
theHash()
