const crypto = require('crypto')
const code = crypto.createHash('md5').update('duynghiadev22302@gmail.com').digest('hex')

console.log('code:', code)
