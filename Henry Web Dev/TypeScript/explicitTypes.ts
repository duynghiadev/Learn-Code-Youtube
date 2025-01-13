// EXPLICIT TYPES
let myName: string;
let age: number;
let isAuthenticated: boolean;

myName = "duynghiadev";
age = 23;
isAuthenticated = true;

console.log("========================");

// arrays
let students: string[] = ["nam", "hung"];
students.push("lan");
console.log("students:", students);

console.log("========================");

// union
let mixed: (string | number | boolean)[];
mixed = ["henry", 5, true];
mixed.push("lan");
mixed.push(false);
console.log("mixed:", mixed);

console.log("========================");

let id: string | number;
id = "mbape";
id = 30;

console.log("========================");

let hobby: "book" | "music";
hobby = "book";
hobby = "music";

console.log("========================");

// objects
let person: object;
person = { name: "duynghiadev", age: 23 };
person = [];
console.log("person:", person);

console.log("========================");

let studentList: {
  name: string;
  age: number;
  isGood: boolean;
};
studentList = {
  name: "duynghiadev",
  age: 23,
  isGood: true,
};
console.log("studentList:", studentList);
