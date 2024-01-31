// ES6
// Arrow Function
const person = {
  name: "John",
  age: 22,
  getDescription: function () {
    console.log(
      "Toi ten la " + this.name + ". Nam nay toi " + this.age + " tuoi"
    );

    const getAge = () => {
      console.log("ES6 - Nam nay toi " + this.age + " tuoi");
    };
    getAge();
  },
};
person.getDescription();

// ES5
// var person = {
//   name: "David",
//   age: 23,
//   getDescription: function () {
//     console.log(
//       "Toi ten la " + this.name + ". Nam nay toi " + this.name + " tuoi"
//     );

//     var that = this;
//     function getAge() {
//       console.log("Nam nay toi " + that.age + " tuoi");
//     }

//     getAge();
//   },
// };

// person.getDescription();
