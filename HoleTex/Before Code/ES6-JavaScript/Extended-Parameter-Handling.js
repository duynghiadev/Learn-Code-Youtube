// ES6
// Extend Parameter Handing
// Default Parameter
// Rest Parameter
// Spread Operator
function getNameES6(name, age, ...rest) {
  console.log(name + " " + age);
  console.log("rest", rest);
}
// ...rest => nó sẽ lấy ra tất cả những giá trị có trong đối số khi ta truyền vào
getNameES6("David", 23, "IT", 20000);

console.log("\n");
// Spread Parameter

const todoList = ["lam bai tap", "di sie thi", "da bong"];
const todoListMore = ["Da bong", "Nau com", ...todoList]; // ...spread sẽ copy mảng todoList vào trong mảng todoListMore
console.log("todoListMore", todoListMore);

const person = {
  name: "David",
  age: 21,
};

const worker = {
  job: "Worker",
  ...person,
};

console.log("worker", worker);
