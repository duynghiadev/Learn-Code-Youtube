const myFunction = param => {
  return param * 2
}

const myFunction1 = param => param * 2

const myFunction2 = (a, b) => a * b

const myFunction3 = () => ({
  hello: 'world'
})


const people = [
  {
    name: 'Bob',
    age: 30
  },
  {
    name: 'Jane',
    age: 22
  },
  {
    name: 'Steve',
    age: 40
  }
]

let ages = people.map(function(person) {
  return person.age
})

ages = people.map(person => person.age)

function Person() {
  this.age = 0

  setInterval(function growUp() {
    this.age++
  }, 1000)
}

var p = new Person()


function Person1() {
  var that = this
  that.age = 0

  setInterval(function growUp() {
    that.age++
  }, 1000)
}

var p = new Person1()


function Person2() {
  this.age = 0

  setInterval(() => {
    this.age++
  }, 1000)
}

var p = new Person2()
