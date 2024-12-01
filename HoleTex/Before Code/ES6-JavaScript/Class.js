// ES6
// Class: Tính kế thừa
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getJob() {
    console.log(`Cong viec cua toi la ${this.job}`);
  }
}

class Worker extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
}

const worker = new Worker("DuyNghia", 20, "IT");
console.log(worker);
worker.getJob();

// ES5
// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   console.log(this);
// }

// Person.prototype.getJob = function () {
//   return "Cong viec cua toi la " + this.job;
// };

// var bob = new Person("David", 22);

// var david = Object.create(new Person("DuyNghia", 99));

// console.log(david.name);
// console.log(david.age);
// david.job = "IT";
// console.log(david.getJob());
