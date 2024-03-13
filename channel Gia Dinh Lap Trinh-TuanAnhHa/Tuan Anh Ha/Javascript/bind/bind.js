const person = {
  name: 'John Doe',
  age: 22,
  selfIntro: function () {
    console.log(`My name is ${this.name}. I am ${this.age} years old`)
  }
}

getData = () => {
  console.log('Sending request...')
  setTimeout(person.selfIntro.bind(person), 1000)
}

getData()
