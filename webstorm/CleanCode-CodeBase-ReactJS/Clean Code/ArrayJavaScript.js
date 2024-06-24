// How to Loop Through an Array in JavaScript – JS Iterate Tutorial

const scores = [22, 54, 76, 92, 43, 33];

// 1. while
let i = 0;
console.log("while");

while (i < scores.length) {
  console.log(scores[i]);
  i++;
}

// 2. do...while
let i1 = 0;
console.log("do...while");

do {
  console.log(scores[i1]);
  i1++;
} while (i1 < scores.length);

// 3. for
console.log("for");
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

// 4. for...in
console.log("for...in");
for (i in scores) {
  console.log(scores[i]);
}

// 5. for...of
console.log("for...of");
for (score of scores) {
  console.log(score);
}

// 6. forEach
console.log("forEach");
scores.forEach((score) => {
  console.log(score);
});
