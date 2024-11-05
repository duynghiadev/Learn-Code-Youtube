// ************* Phần 10: Enhanced Object Literals ***************
/*
  1. Định nghĩa key: value cho object
  2. Định nghĩa method cho object
  3. Định nghĩa key cho object dưới dạng biến
*/

// Ví dụ 1:
var name = "JavaScript";
var price = 2000;
var course = {
  name,
  price,
  getName() {
    return name;
  },
};
console.log(course.getName());

// Ví dụ 2:
// var fieldName = "new-name";
// var fieldPrice = 1000;

// const course = {
//   name: "JavaScript",
//   [fieldName]: "ReactJS",
//   [fieldPrice]: 5000,
// };
// console.log(course);
