// FUNCTION
const square = (side: number) => side * side;
console.log("square:", square(3));

console.log("========================");

let greet: Function;
greet = () => console.log("function greet: hello");
greet();

console.log("========================");

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};
add(1, 2, 3);
add(1, 2, "duynghiadev");
add(1, 3);

console.log("========================");

const addDefault = (a: number, b: number, c: number | string = 10) => {
  console.log("sum:", a + b);
  console.log(c);
};
addDefault(1, 3);

console.log("========================");

const minus = (a: number, b: number): number => a - b;
console.log("minus:", minus(4, 1));
