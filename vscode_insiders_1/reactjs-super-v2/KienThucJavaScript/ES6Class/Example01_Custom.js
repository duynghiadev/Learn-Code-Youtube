function Cat(name, color, type) {
  this.name = name
  this.color = color
  this.type = type

  this.meow = function () {
    console.log(`${this.name}, ${this.color}, ${this.type} --> meows: meow meow meow`)
  }
}

let alex = new Cat('Ronaldo', 'Red', 'Player')
alex.meow()
