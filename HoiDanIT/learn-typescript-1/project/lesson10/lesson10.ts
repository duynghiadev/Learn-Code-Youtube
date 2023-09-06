let status1: boolean = false;
let check1: boolean = true;

// status1 = 'Duy Nghia' // error ❌
// status1 = true // passed ✅

// check1 = 'Duy Nghia' // error ❌
// check1 = true // passed ✅

let pro1: boolean = Boolean("");
let pro2: boolean = Boolean("Duy Nghia");

console.log(">>> check pro 1: ", pro1);
console.log(">>> check pro typeof 1: ", typeof pro1);

console.log(">>> check pro 2: ", pro2);
console.log(">>> check pro typeof 2: ", typeof pro2);
