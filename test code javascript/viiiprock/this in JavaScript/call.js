// call
function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const user1 = {
  name: "Tyler",
  age: 27,
};
greet.call(user1);

// ==============================================

console.log("=".repeat(40));

// call
function greet1(l1, l2, l3) {
  console.log(`My name is ${this.name} and I know ${l1}, ${l2} and ${l3}`);
}

const user2 = {
  name: "John",
  age: 22,
};

const languages = ["JavaScript", "Ruby", "Python"];
greet1.call(user2, languages[0], languages[1], languages[2]);
