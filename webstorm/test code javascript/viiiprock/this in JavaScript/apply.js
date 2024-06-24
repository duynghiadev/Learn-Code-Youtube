// apply
function greet2(l1, l2, l3) {
  console.log(`My name is ${this.name} and I know ${l1}, ${l2} and ${l3}`);
}

const user3 = {
  name: "Duynghiadev",
  age: 27,
};

const languages1 = ["Reactjs", "Angularjs", "Nodejs"];
greet2.apply(user3, languages1);
