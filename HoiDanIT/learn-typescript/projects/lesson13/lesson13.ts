let skills: (string | number)[] = ["Hỏi Dân IT", 25];
skills.push("coding");
skills.push(69);

//tuple: dataType/size/order
let skills2: [string, number] = ["Hỏi Dân IT", 25];

let skills3: [boolean, string, number?];
skills3 = [true, "Eric"];

console.log(">>> check skills: ", skills);
console.log(">>> check skills2: ", skills2);
console.log(">>> check skills3: ", skills3);
