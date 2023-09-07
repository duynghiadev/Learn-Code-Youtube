let person: object;

let mine3 = {
  name: "hoi dan it",
};

person = {
  name: "Eric",
}; // passed ✅

// person = 'Eric' // error ❌

console.log(">>> check person: ", person);
console.log(">>> check mine3: ", mine3);

let pro = {
  name: "Duy Nghia", //string
  age: 21, //age
};

let pro1: {
  name: string;
  age: number;
} = {
  name: "Eric", //string
  age: 25, //age
};

console.log(">>> check pro: ", pro);
console.log(">>> check pro 1: ", pro1);
