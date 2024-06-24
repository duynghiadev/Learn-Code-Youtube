class Cat {
  constructor(name, color, type) {
    // create these property
    this.name = name
    this.color = color
    this.type = type
  }

  // add into these method
  meow() {
    console.log(`${this.name} meows: meow meow meow!`)
  }
}

let alex = new Cat('Alex', 'Yellow', 'Bengal')

alex.meow() // Alex meows: meow meow meow!
