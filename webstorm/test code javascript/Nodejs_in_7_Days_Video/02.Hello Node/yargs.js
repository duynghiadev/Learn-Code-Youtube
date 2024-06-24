const yargs = require('yargs')

const argv = yargs.option('f', {
  alias: 'file',
  demandOption: true,
  // default: '/etc/passwd',
  describe: 'x marks the spoot',
  type: 'string'
}).argv

console.log(argv)
