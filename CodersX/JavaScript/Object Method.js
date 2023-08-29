var myDog = {
  weight: 5,
  name: 'Dog',
  age: 1,
  bark: function(){ // anonymous function
      console.log('Meo meo, my name is', this.name)
  },
  eat: function(bone) {
    this.weight = this.weight + bone.weight;
    return this
  }
}

var bone = { weight: 0.5 }
console.log('Before eating', myDog.weight)

myDog.eat(bone)
console.log('After eating', myDog.weight)