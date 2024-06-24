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
    console.log(`${this.name} we are champion !!!`)
  }

  run() {
    handle(() => this.meow())
  }
}

let neymar = new Cat('Neymar', 'Black', 'Direction')
neymar.run()
