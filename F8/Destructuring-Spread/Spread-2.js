// Trường hợp khác:
var object = {
  name: "JavaScript",
};

var object2 = {
  price: 20000,
};

var object3 = {
  ...object,
  ...object2,
};

console.log(object3); // {name: "JavaScript", price: 20000}
