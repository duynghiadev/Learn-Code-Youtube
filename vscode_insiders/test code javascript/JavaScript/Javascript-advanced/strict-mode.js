// 1:
// "use strict";

// var fullName = "Nguyen Van A"; // tạo ra biến fullName

// function testFunc() {
//   var age = 18; // tạo ra biến age ở pham vi global
// }

// testFunc();
// console.log(fullName);

// 2:
// "use strict";

// const student = {};

// Object.defineProperty(student, "fullName", {
//   value: "Nguyen Van A",
//   writable: true,
// });

// student.fullName = "Nguyen Van B";

// console.log(student);

// 3:
("use strict");
var hero = "Doctor Strange";

function MultiverseOfMadness() {
  var universe = 616;
}

MultiverseOfMadness();

console.log(hero); //Output ?
console.log(universe); //Output chỗ dòng àny sẽ bị lỗi. Cách khắc phục là di chuyển vào trong hàm MultiverseOfMadness sẽ hết lỗi

// *********** Giải thích **************
// => Với use strict mode, biến universe chỉ được khai báo trong phạm vi của một function. Khi đó, nếu gọi đến biến đó ở ngoài phạm vi khai báo sẽ dẫn đến lỗi.