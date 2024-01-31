let name1: number = 20;

if (name1 > 18) {
  console.log(">>> You can watching JAV... ");
} else {
  console.log(">>> You can watch Cartoon... ");
}

let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
  discount = 5; // 5% discount. No passed ❌
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10; // 10% discount. No passed ❌
} else {
  discount = 15; // 15% discount. Passed ✅
}

console.log(">>> check discount: ", discount);
