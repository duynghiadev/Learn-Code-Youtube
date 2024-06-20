// ARRAY AND OBJECTS
console.log("========================");

let names = ["mai", "nam", "hung"];
names.push("nghia");
console.log("names:", names);

console.log("========================");

let numbers = [1, 2, 3];
numbers.push(4);
numbers[4] = 10;
console.log("numbers:", numbers);

console.log("========================");

let mixed = [1, "nghia", true];
mixed.push(5);
mixed.push(false);
mixed[5] = "duynghiadev";
console.log("mixed:", mixed);

console.log("========================");

let person = {
  name: "duynghiadev",
  age: 22,
  isStudent: true,
};

person.name = "ronaldo";
person.age = 23;

person = {
  name: "messi",
  age: 33,
  isStudent: false,
};

console.log("person:", person);

console.log("========================");
