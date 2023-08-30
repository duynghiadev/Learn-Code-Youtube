const person = {
  name: "jack",
  age: 20,

  great() {
    console.log(this);
    console.log(this.name);

    let innerFunction = () => {
      console.log(this);
      console.log(this.name);
    };
    innerFunction();
  },
};

person.great();

// Hằng số const
const numberList = {};
numberList.name = "bob";

console.log(numberList);

// destructuring && spread operator
const bob = {
  id: 1,
  name: "Bob",
  age: 18,
  gender: "male",
};
// OLD WAY
// const id = bob.id;
// const rest = {
//   name: bob.name,
//   age: bob.age,
//   gender: bob.gender,
// };

// NEW WAY WITH REST OPERATOR
const { id, ...rest } = bob;

console.log(">>> destructuring bob: ", bob);

const bob1 = {
  id: 1,
  name: "Bob 1",
  age: 18,
  gender: "male",
};
const bob2 = {
  ...bob1,
  name: "Duy Nghia",
};
const bob3 = {
  ...bob1,
};
console.log(">>> spread bob1: ", bob1 === bob2); // false;
console.log(">>> spread bob2: ", bob2);
console.log(">>> spread bob3: ", bob3);
