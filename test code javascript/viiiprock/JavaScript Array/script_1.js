/**
 * Đây là những đoạn code từ blog 1
 */

// array 1 chiều
const array = ["foo", "bar"];

// array đa chiều
const activities = [
  ["Work", 9],
  ["Eat", 2],
  ["Commute", 2],
  ["Play Game", 2],
  ["Sleep", 7],
];

// array đa chiều với các array con không đồng nhất về kích cỡ
const array_1 = [["Matthew", "27", "Developer"], ["Simon", "24"], ["Luke"]];

// thay đổi kích cở array
let array_2 = [1, 2, 3, 4, 5];
console.log("array_2.length:", array_2.length);

array_2.length--;
console.log("array_2.length:", array_2.length);

array_2.length += 15;
console.log("array_2.length:", array_2.length);

console.log("=".repeat(40));

let schema = ["hi", "ihaveboyfriend", null, null, "goodbye"];
schema = schema.filter((n) => n);
console.log("schema:", schema);

console.log("=".repeat(40));

// xóa phần tử với array length
let array_3 = [1, 2, 3, 4, 5, 6];
console.log("array_3.length first:", array_3.length);
array_3.length = 3;
console.log("array_3.length second:", array_3.length);
console.log("array_3:", array_3);

console.log("=".repeat(40));

// làm rỗng array
let array_4 = [1, 2, 3, 4, 5, 6];
array_4.length = 0;
console.log("array_4.length:", array_4.length);
console.log("array_4:", array_4);

console.log("=".repeat(40));

// gộp array với các array khác (gộp đối với các array nhỏ, chứ các array lớn thì sẽ rất tốn bộ nhớ)
let array_5 = [1, 2, 3];
let array_6 = [4, 5, 6];
console.log("array_5.concat(array_6):", array_5.concat(array_6));

console.log("=".repeat(40));

// dùng splice để xóa các phần tử của array
let myArray = [1, 2, 3, 4, 5, 6];
console.log("myArray origin:", myArray);

let result = myArray.splice(0, 2);
console.log("result:", result);

let result_1 = myArray.splice(1, 1);
console.log("result_1:", result_1);

console.log("myArray after deleted:", myArray);
