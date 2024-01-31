var x = 5
var y = 10
console.log(x)

var z = 20
if (true) {
  var a = 23
  console.log(a)
}
console.log(z)

var name = 'global scope'
const inner = () => {
  var name = 'local scope inner function'
  if (true) {
    var name = 'local scope inner function in if'
  }
  console.log(name)
}
inner()
