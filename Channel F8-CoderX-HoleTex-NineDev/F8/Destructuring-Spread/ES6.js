/**
 * 0. String Literals--> OK (ES6) Example => (`${firstName} ${lastName}`)
 * 1. Let, const --> OK
 * 2. Template Literals --> OK => cũng giống như String Literals
 * 3. Multiline Strings --> OK
 * 4. Arrow Functions --> OK
 * 5. Classes --> OK
 * 6. Default Parameters values --> OK
 * 7. Destructuring (...rest) --> OK
 * 8. Rest Parameters --> OK
 * 9. Spread Operator --> OK
 * 10. Enhanced Object Literals --> OK
 * 11. Tagged template literals --> OK
 * 12. Modules --> OK
 * 13. Optional chaining (?.) --> OK
 */

/************** Let's go **************/

// Phần 1: Let, const
/**
 * - Code thuần: dùng var
 * - Babel: dùng let, const (ES6) => dùng trình biên dịch để chuyển đổi code thuần sang ES6
 *  + Khi định nghĩa biến và không gán lại biến đó: thì dùng const
 *  + Khi cần gán lại giá trị của biến: thì sẽ dùng let
 */

// Phần 2: Template Literals
// const courseName = 'Course'
// const description = 'PHP'
// const result = `${courseName} ${description}`
// console.log(result)

// Phần 3: Multiline Strings
// const lines = "Line 1\nLine 2";
// console.log(lines);

// Phần 4: Arrow Functions

// const triple = (x) => x*3;

// console.log(triple(2)) // Output: 6
// console.log(triple(3)) // Output: 9
// console.log(triple(5)) // Output: 15

// const courses = {
//   name: "JavaScript", "Nodejs", "React", "Angular" // không cần dấu ngoặc khi khai báo
//   getName: function () {
//     return this; // this là giá trị của object hiện tại (courses)
//   },
// };
// console.log(courses.getName());

// Phần 5: Classes
// class Course {
//   constructor(name, price) {
//     // constructor là hàm khởi tạo của class (khởi tạo các thuộc tính của class)
//     this.name = name; // (this.name là biến của class Course) => this.name = name (name là biến của hàm constructor) => this.name = "JavaScript"
//     this.price = price; // (this.price là biến của class Course) => this.price = price (price là biến của hàm constructor) => this.price = 20000
//   }
// }

// const phpCourse = new Course("php", 1000); // (new Course là hàm khởi tạo của class Course) => new Course("php", 1000) => new Course {name: "php", price: 1000}
// const jsCourse = new Course("javascript", 2000); // (new Course là hàm khởi tạo của class Course) => new Course("javascript", 2000) => new Course {name: "javascript", price: 2000}

// console.log(phpCourse);
// console.log(jsCourse);

// Phần 6: Default Parameters values
// function logger(log, type = "log") {
//   console[type](log);
// }
// console.log("Message", "error");
// console.log("Message", "warn");

// Phần 7 + 8: Destructuring, Rest Parameters
//Ví dụ 1:
// var array = ["JavaScript", "Nodejs", "React"];
// var [a, b, ...rest] = array;
// console.log(a, b);
// console.log(rest);

// Ví dụ 2:
// var course = {
//   name: "JavaScript",
//   price: 1000,
//   image: "image-address",
// };
// var { name, ...newObject } = course;
// console.log(name);

// Ví dụ 3:
// var course = {
//   name: "JavaScript",
//   price: 1000,
//   image: "image-address",
//   children: {
//     name: "ReactJS",
//   },
// };
// var {
//   name: parentName,
//   children: { name: childrenName },
// } = course;
// console.log(parentName);
// console.log(childrenName);

// Ví dụ 4:
// var course = {
//   name: "ReactJS",
//   price: 2000,
//   image: "image-address",
// };
// var { name, description = "default description" } = course;
// console.log(name);
// console.log(description);

//Phần 9: Spread Operator
// Trường hợp nối mảng:
// var array1 = ["JavaScript", "Nodejs", "React", "Vue"];

// var array2 = ["JavaScript", "Nodejs", "React"];

// var array3 = [...array2, ...array1]; // (...array2, ...array1) => [ "JavaScript", "Nodejs", "React", "Vue", "JavaScript", "Nodejs", "React" ]
// console.log(array3);

// Trường hợp khác:
// var object = {
//   name: "JavaScript",
// };

// var object2 = {
//   price: 20000,
// };

// var object3 = {
//   ...object,
//   ...object2,
// }; // (...object, ...object2) => {name: "JavaScript", price: 20000}

// console.log(object3); // {name: "JavaScript", price: 20000}

// Phần 10: Enhanced Object Literals
/*
  1. Định nghĩa key: value cho object
  2. Định nghĩa method cho object
  3. Định nghĩa key cho object dưới dạng biến
*/

// Ví dụ 1:
// var name = "JavaScript";
// var price = 2000;
// var course = {
//   name,
//   price,
//   getName() {
//     return name;
//   },
// };
// console.log(course.getName());

// Ví dụ 2:
// var fieldName = "new-name";
// var fieldPrice = 1000;

// const course = {
//   name: "JavaScript",
//   [fieldName]: "ReactJS",
//   [fieldPrice]: 5000,
// };
// console.log(course);

// Phần 11: Tagged Template Literals (Phương pháp nội suy)
// function highlight(...rest) {
//   console.log(rest);
// }
// var brand = "F8"; // (brand là biến của hàm highlight) => brand = "F8"
// var course = "JavaScript"; // (course là biến của hàm highlight) => course = "JavaScript"
// highlight`Học lập trình ${course} với khóa học ${brand}`; // (highlight là hàm của hàm highlight) => highlight`Học lập trình ${course} với khóa học ${brand}` => "Học lập trình JavaScript với khóa học F8"

// Phần 12: Modules: import, exports

// Phần 13: Optional Chaining (?.)
// const obj = {
//   getName(value) {
//     console.log(value);
//   },
// };
// obj.getName?.(123);
