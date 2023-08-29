// ES6
// Enhanced Object Property
// Property Shorthand
// Method property
// Computed property key
function person(name, age) {
  const salary = "DuyNghia";
  return {
    name,
    age,
    getName() {
      return this.name + " " + this.age;
    },
    [`${salary}`]: 20000,
  };
}
console.log(person("David", 22));
console.log(person("David", 22).getName());

// ES5
var person = {
  name: "David",
  age: 22,
};

var salary = "DuyNghia";
person[salary + "OfDavid"] = 20000;

console.log("ES5 - person: ", person);
