// Ví dụ 1: Đối với String
const myObj = {
  name: "Sy Dinh",
  age: 22,
  social: "https://sydinh.com/",
};

const myObjStr = JSON.stringify(myObj);

console.log(myObjStr);
// JSON "{"name":"Sy Dinh","age":22,"social":"https://sydinh.com/"}"

console.log(JSON.parse(myObjStr));
// Object {name: "Sy Dinh", age: 22, social: "https://sydinh.com/"}
