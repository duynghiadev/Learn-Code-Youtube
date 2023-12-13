// Syntax parser, Lexical Enviroment, Execution Context (Creation/Hoisting, Run Phases)
console.log('i before:', i)
var i = 10

function hello(params) {
  console.log('Duynghiadev is here', params)
}
hello(i)
console.log('i after:', i)
