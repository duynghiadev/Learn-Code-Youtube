function Animal(name, weight) {
  this.name = name
  this.weight = weight
}

function Cat() {
  Animal.call(this, 'cat', 50)
  this.say = function () {
    console.log(`I am ${this.name}, my weight is ${this.weight}`)
  }
}

const cat = new Cat()
cat.say()

const tiger = new Animal('tiger', 100)
console.log(`I am ${tiger.name}, my weight is ${tiger.weight}`)
