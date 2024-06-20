// ANY TYPES
let age: any = 25;
age = "duynghiadev";
(age = false), (age = { a: "ok" });
age = [1, 3];
console.log("age:", age);

console.log("========================");

let mixed: any[] = [];
mixed.push(5);
mixed.push(false);
console.log("mixed:", mixed);

console.log("========================");

let person: { name: any; age: any };
person = { name: 10, age: true };
console.log("person:", person);
