// ES6
// Destructuring Assignment

// Array
const todoList = ["di hoc", "di sieu thi", "lam bai tap"];

const [first, third] = todoList;
console.log({
  first,
  third,
});

// Object
const person = {
  name: "John",
  job: "IT",
  salary: 20000,
};

const { name, salary } = person;
console.log({ name, salary });

// Parameter trong cùng một Function
const getFullName = ([name, age]) => {
  console.log(`Toi ten la ${name}. Nam nay toi ${age} tuoi`);
};
getFullName(["Nghia", 20]);
