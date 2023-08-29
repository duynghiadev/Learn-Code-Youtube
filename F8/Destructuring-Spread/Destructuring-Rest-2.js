// ***************** Phần 7 + 8: Destructuring, Rest Parameters ***************

// Ví dụ 3:
var course = {
  name: "JavaScript",
  price: 1000,
  image: "image-address",
  children: {
    name: "ReactJS",
  },
};
var {
  name: parentName,
  children: { name: childrenName },
} = course;
console.log(parentName);
console.log(childrenName);

// Ví dụ 4:
// var course = {
//   name: "ReactJS",
//   price: 2000,
//   image: "image-address",
// };
// var { name, description = "default description" } = course;
// console.log(name);
// console.log(description);
