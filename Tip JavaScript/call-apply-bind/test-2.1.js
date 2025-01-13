class Animal {
  constructor(name, weight) {
    this.name = name
    this.weight = weight
  }
}

class Cat extends Animal {
  constructor() {
    super('cat', 50)
  }

  say() {
    console.log(`I am ${this.name}, my weight is ${this.weight}`)
  }
}

const cat = new Cat()
cat.say()

const tiger = new Animal('tiger', 100)
console.log(`I am ${tiger.name}, my weight is ${tiger.weight}`)
