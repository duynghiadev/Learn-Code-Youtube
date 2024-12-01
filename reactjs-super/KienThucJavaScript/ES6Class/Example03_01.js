function handle(callback) {
  callback()
}

class Cat {
  constructor(name, color, type) {
    this.name = name
    this.color = color
    this.type = type
  }

  meow = () => {
    console.log(`${this.name} meows: meow meow meow`)
  }

  run() {
    handle(this.meow)
  }
}

let messi = new Cat('Messi', 'Purple', 'Actor')
messi.run()
