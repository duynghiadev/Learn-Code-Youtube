const myArray = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Eve" },
];

type Person = (typeof myArray)[number]["age"];
type Name = (typeof myArray)[number]["name"];

const personAge: Person = 12;
const personName: Name = "duynghiadev";

console.log("personAge:", personAge);
console.log("personName:", personName);
