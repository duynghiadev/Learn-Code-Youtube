// ES6: let, count
// block scope
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let todoList = ["di hoc", "lam bai tap ve nha"];
todoList = 3;
console.log("update todoList: " + todoList);

// ES5:
var firstName = "David"; // global scope

function getName() {
  var lastName = "Nguyen";

  return firstName + " " + lastName;
}

console.log(getName());
