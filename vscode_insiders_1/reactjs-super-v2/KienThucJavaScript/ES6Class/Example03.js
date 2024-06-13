// must have method bind when call function outsite
function handle(callback) {
  callback()
}

class Cat {
  constructor(name, color, type) {
    this.name = name
    this.color = color
    this.type = type
    this.meow = this.meow.bind(this)
  }

  meow() {
    console.log(`${this.name} meows: meow meow meow!`)
  }

  run() {
    handle(this.meow)
  }
}

let ronaldo = new Cat('Ronaldo', 'Blue', 'Player')
ronaldo.run()
