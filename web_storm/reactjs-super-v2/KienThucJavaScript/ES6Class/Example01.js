function Cat(name, color, type) {
  this.name = name
  this.color = color
  this.type = type
}

// add method
Cat.prototype.meow = function () {
  console.log(`${this.name}, ${this.color}, ${this.type} --> meows: meow meow meow`)
}

// create a instance object
let alex = new Cat('Alex', 'Yellow', 'Bengal')

alex.meow()
