// ***************** Phần 7 + 8: Destructuring, Rest Parameters ***************
//Ví dụ 1:
var array = ["JavaScript", "Nodejs", "React"];
var [a, b, ...rest] = array;
console.log(a, b);
console.log(rest);

// Ví dụ 2:
// var course = {
//   name: "JavaScript",
//   price: 1000,
//   image: "image-address",
// };
// var { name, ...newObject } = course;
// console.log(name);

