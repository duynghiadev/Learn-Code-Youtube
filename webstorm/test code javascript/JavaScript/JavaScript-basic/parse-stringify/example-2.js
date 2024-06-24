// Ví dụ 2: Đối với Array
const myArr = ["foo", "bar", "foobar"];

const myArrStr = JSON.stringify(myArr);

console.log(myArrStr);
// JSON "["foo","bar","foobar"]"

console.log(JSON.parse(myArrStr));
// Array ["foo", "bar", "foobar"]
