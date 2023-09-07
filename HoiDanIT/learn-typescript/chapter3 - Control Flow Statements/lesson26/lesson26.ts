/**
 * For
 */
for (let index = 0; index < 9; index++) {
  // if index is odd, skip it
  if (index % 2 === 1) {
    continue;
  }

  // the following code will be skipped for odd numbers
  console.log(">>> Số chẵn: ", index);
}

/**
 * While
 */
let index1 = -1;

while (index1 < 9) {
  index1 = index1 + 1;
  if (index1 % 2) continue;
  console.log("> check index1: ", index1);
}

/**
 * Do...while
 */
let index2 = 9;
let count = 0;

do {
  index2 += 1;

  if (index2 % 2) continue;
  count += 1;
} while (index2 < 99);
console.log(">>> check count: ", count);
