// break

let products = [
  { name: "phone", price: 700 },
  { name: "samsung", price: 900 },
  { name: "google", price: 2000 },
];

for (let i = 0; i < products.length; i++) {
  if (products[i].price === 900) {
    break;
  }
  console.log(">>> Product: ", products[i]);
}

let products1 = [
  { name: "samsung", price: 700 },
  { name: "google", price: 900 },
  { name: "nokia", price: 1200 },
];

let discount = 0;
let product = products1[2];

switch (product.name) {
  case "samsung":
    discount = 5;
    break;
  case "google":
    discount = 10;
    break;
  case "nokia":
    discount = 15;
    break;
  default:
    discount = 100;
}

console.log(`>>> There is a ${discount}% on ${product.name}`);
