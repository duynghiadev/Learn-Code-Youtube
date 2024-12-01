// ví dụ 1:
// const teacher = {
//   firstName: "Minh",
//   lastName: "Thu",
// };

// function greet(greeting, message) {
//   return `${greeting} ${this.firstName} ${this.lastName} ${message}`;
// }

// let result = greet.apply(teacher, [
//   "Em chào cô",
//   "Cô dạy môn gì thế ạ (Đã xem cô livestream 1 tiếng)",
// ]);

// console.log(result);

// // So sánh với call() method
// result = greet.call(
//   teacher,
//   "Em chào cô",
//   "Cô dạy môn gì thế ạ (Đã xem cô livestream 1 tiếng)"
// );

// console.log(result);

// Ví dụ 2:
// const teacher = {
//   firstName: "Minh",
//   lastName: "Thảo",
//   isOnline: false,
//   goOnline() {
//     this.isOnline = true;
//     console.log(`${this.firstName} ${this.lastName} isOnline`);
//   },
//   goOffline() {
//     this.isOffline = false;
//     console.log(`${this.firstName} ${this.lastName} isOffline`);
//   },
// };

// const me = {
//   firstName: "Nghia",
//   lastName: "Duy",
//   isOnline: false,
// };

// console.log("Teacher: ", teacher.isOnline);
// teacher.goOnline();
// console.log("Teacher: ", teacher.isOnline);

// console.log("--------------------");

// console.log("Student: ", me.isOnline);
// teacher.goOnline.apply(me);
// console.log("Student: ", me.isOnline);

// Ví dụ 3:
function Animal(name, weight) {
	(this.name = name), (this.weight = weight)
}

function Parrot() {
	Animal.apply(this, arguments)
	this.speak = function () {
		console.log('Nhà có khách!')
	}
}

const conVet = new Parrot('Vẹt', 500) // Vẹt là tên của con vẹt, 500 là trọng lượng của con vẹt nhất định

console.log(conVet)