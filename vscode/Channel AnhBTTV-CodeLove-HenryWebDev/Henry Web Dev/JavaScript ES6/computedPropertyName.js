const computedPropertyName = "buaToi";

const buaAn = {
  buaSang: "xoi",
  buaTrua: "com",
  [computedPropertyName]: "banh canh",
};
console.log("buaAn:", buaAn);

const buaAnKhac = {
  buaSang: "xoi",
  buaTrua: "com",
  [computedPropertyName + "HomNay"]: "bun",
};
console.log("buaAnKhac:", buaAnKhac);

console.log("=".repeat(40));

// ===========================================
// bai tap
const name = "Name";

const person = {
  conutry: "Vietnam",
  [`full${name}`]: "duynghiadev",
};
console.log("person:", person);

const otherPerson = {
  ...person,
  fullName: "Ronaldo",
  age: 39,
};
console.log("otherPerson:", otherPerson);
