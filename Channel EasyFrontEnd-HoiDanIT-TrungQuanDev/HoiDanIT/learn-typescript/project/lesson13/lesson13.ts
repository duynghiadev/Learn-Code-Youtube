let skills: (string | number)[] = ["Hỏi Dân IT", 25];

skills.push("coding");
skills.push(69);

//tuple: dataType/size/order ✨
/**
 * - Về loại Typle này thì mình nên quan tâm về 3 cái đó là: dataType, size, order ✅
 * - Trong đó order là số thứ tự có trong mảng mình khai báo bao nhiêu data type thì mình phải gán đủ những
 * loại đó
 * - Mình có thể dùng kiểu optional để có thể truyền cũng được, và không truyền cũng được. Có tên tiếng anh
 * là => Optional Tuple Elements
 * - Lưu ý: khi sử dụng optional thì có thể dùng trong cuối định nghĩa của mảng mà mình khai báo 🌋
 */

let skills2: [string, number] = ["Hỏi Dân IT", 25];
/**
 * 👇👇👇
 * error ❌: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
 * 👆👆👆
 */
// skills2.push(true) // error ❌ 👆👆👆

let skills3: [boolean, string, number?]; // type number is optional ✅
skills3 = [true, "Eric"];
skills3 = [true, "Eric", 21];

console.log(">>> check skills: ", skills);
console.log(">>> check typeof skills: ", typeof skills);

console.log("\n>>> check skills2: ", skills2);
console.log("\n>>> check skills3: ", skills3);
