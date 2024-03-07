import chalk from 'chalk'

const colors = ['red', 'green', 'blue']

colors.forEach(function(color) {
  console.log(chalk[color]('Hello world'))
})
