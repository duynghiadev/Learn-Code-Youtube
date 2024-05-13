/**
 * 5. constructor function
 */
console.log('='.repeat(40))
console.log('constructor function')

function Constructor(name) {
  this.name = name
  this.getName = function () {
    return this.name
  }
}

const author = new Constructor('duynghiadev')
console.log('name constructor function:', author.getName())

Constructor.prototype.age = 30

console.log('age constructor function:', author.age)

Constructor.prototype.Me = function () {
  return this.name + ' - ' + 'hàm Me'
}

console.log('Me constructor function:', author.Me())
