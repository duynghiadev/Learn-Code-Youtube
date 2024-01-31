function Animals(name) {
  this.name = name;
}

Animals.prototype.eat = function () {
  console.log("Eating...");
};

function Bird(name) {
  Animals.call(this, name);
}

Bird.prototype = Object.create(Animals.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function () {
  console.log("Flying...");
};

function Parrot(name) {
  Bird.call(this, name);
}

Parrot.prototype = Object.create(Bird.prototype);
Parrot.prototype.constructor = Parrot;

Parrot.prototype.speak = function () {
  console.log("Speaking...");
};

const bird = new Parrot("CukCu");
bird.speak(); // Output: Speaking...
