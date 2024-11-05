const person1 = {
  name: "Son",
  age: 21,
};

// use spread function to copy object person1 to person2
const person2 = { ...person1 }; // { name: "Son", age: 21 }

// Expected results
console.log(person2.name); // Output: 'Son'
console.log(person2.age); // Output: 21
console.log(person1 === person2); // Output: false
