// ========================================
console.log('='.repeat(40))
console.log('Constructor Function')
// ========================================

/**
 * Constructor Function
 */
function Constructor(name, age) {
  this.name = name
  this.age = age
  this.age++

  this.ten = function () {
    return `Ten: ${this.name}`
  }

  this.tuoi = function () {
    return `Tuoi: ${this.age}`
  }
}

const p = new Constructor('Hoc co ban', 10)
console.log('typeof p:', typeof p)
console.log('p.ten():', p.ten())
console.log('p.tuoi():', p.tuoi())

const q = new Constructor('Hoc JavaScript with duynghiadev', 10)
console.log('\ntypeof q:', typeof q)
console.log('q.ten():', q.ten())
console.log('q.tuoi():', q.tuoi())

Constructor.prototype.test = function () {
  return this.name + ', this is a method test'
}
console.log('\nq.test():', q.test())
