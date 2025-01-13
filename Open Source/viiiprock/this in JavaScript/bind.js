// bind
function greet3(l1, l2, l3) {
  console.log(`My name is ${this.name} and I know ${l1}, ${l2} and ${l3}`);
}

const user4 = {
  name: "Duy Nghia Le",
  age: 27,
};

const languages2 = ["Math", "Data Structure", "Networking"];
const newFn = greet3.bind(user4, languages2[0], languages2[1], languages2[2]);
newFn();
