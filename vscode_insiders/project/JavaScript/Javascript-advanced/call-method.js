// Ví dụ 1:
// const teacher = {
//   firstName: "Minh",
//   lastName: "Thu",
// };

// const me = {
//   firstName: "Duy",
//   lastName: "Nghĩa",
//   showFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// me.showFullName.call(me);
// me.showFullName.call(teacher);

// Ví dụ 2:
// "use strict";

// this.firstName = "Duy";
// this.lastName = "Nghĩa";

// function showFullName() {
//   console.log(`${this.firstName} ${this.lastName}`);
// }

// showFullName.call(this);

// Ví dụ 3:
// function Animal(name, weight) {
//   this.name = name;
//   this.weight = weight;
// }

// function Chicken(name, weight, legs) {
//   Animal.call(this, name, weight);
//   this.legs = legs;
// }

// const duyNghia = new Chicken("Duy Nghia", 65, 2);

// console.log(duyNghia);

// Ví dụ 4.1:
// function logger() {
//   Array.prototype.forEach.call(arguments, (item) => {
//     console.log(item);
//   });
// }
// logger(1, 2, 3, 4, 5);

// Ví dụ 4.2:
// function logger() {
//   const arr = Array.prototype.slice.call(arguments);
//   arr.forEach((item) => console.log(item));
// }
// logger(1, 2, 3, 4, 5);

// Ví dụ 4.3: Dùng ES6 => Nó sẽ trả ra Array
function logger() {
  const arr = [...arguments];
  console.log(arr);
}
logger(1, 2, 3, 4, 5);
