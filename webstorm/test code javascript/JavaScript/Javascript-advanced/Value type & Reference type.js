// 1:
// let a = {
//   name: "Mercedes",
// };

// let b = a;

// a.name = "BMW";

// console.log(b);

// 2:
// function sum(a, b) {
//   a = 0;
//   b = 0;
//   console.log(a, b);
// }
// const c = 1;
// const d = 3;
// sum(c, d);
// console.log(c, d);

// 3
// const student = {
//   name: "Duy Nghia",
//   profile: {
//     firstName: "Thanh",
//     lastName: "Thuy",
//     introduction: "Girl",
//   },
// };

// const studentProfile = student.profile;
// student.profile.introduction = "Good Girl";
// console.log(studentProfile.introduction);

// 4: ==> Cách 1 <==
// function func(obj){
//   // let obj = a
//   obj.name = 'Mercedes'
//   console.log(obj)
// }

// const a = {
//   name: 'BMW'
// }

// func(a)
// console.log(a)

// 4: ==> Cách 2 <==
// function createCar(obj) {
//   obj = JSON.parse(JSON.stringify(obj));
//   obj.name = "Mercedes";
//   return obj;
// }

// const car = {
//   name: "BMW",
// };

// const newCar = createCar(car);
// console.log(car);
// console.log(newCar);

// 4: ==> Cách 3 <==
// function createCar(obj) {
//   obj = { ...obj };
//   obj.name = "Mercedes";
//   return obj;
// }

// const car = {
//   name: "BMW",
// };

// const newCar = createCar(car);
// console.log(car);
// console.log(newCar);

// Bài Tập:
const iphone13 = {
  screen: 'OLED6.7"Super Retina XDR',
  chip: "Apple A15 Bionic",
  ram: "6 GB",
};
const iphone11 = iphone13;
iphone11.ram = "12 GB";
const iphone6 = iphone11;
console.log(iphone6 === iphone13); // Output?
// Giải thích: 
// const iphone11 = iphone13 thì iphone11 sẽ trỏ về cùng vùng nhớ của iphone13.
// const iphone6 = iphone11 thì iphone6 sẽ trỏ về cùng vùng nhớ của iphone11.
// Lúc này iphone13, iphone11 và iphone6 cùng trỏ về một vùng nhớ.
