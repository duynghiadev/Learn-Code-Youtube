// FUNCTION SIGNATURE
let greet: Function;
greet = () => console.log("hello world");

console.log("========================");

let perfect: (a: string, b: string) => void;
perfect = (name: string, greeting: string) =>
  console.log(`${name} says ${greeting}`);
perfect("henry", "hello");

console.log("========================");

let calculate: (a: number, b: number, c: string) => number;
calculate = (numOne: number, numTwo: number, action: string) =>
  action === "add" ? numOne + numTwo : numOne - numTwo;
console.log(calculate(4, 2, "add"));
console.log(calculate(4, 2, "ronaldo"));

console.log("========================");

type Student = { name: string; age: number };
let printNumber: (student: Student) => void;
printNumber = (myStudent: Student) => {
  console.log(`${myStudent.name} is ${myStudent.age} years old`);
};
printNumber({ name: "duynghiadev", age: 22 });
