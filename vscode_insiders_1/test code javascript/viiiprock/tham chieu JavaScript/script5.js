function mininum(array) {
  console.log("items origin:", array);

  array.sort();
  console.log("items after sorting:", array.sort());

  return array[0];
}

const items = [5, 1, 4, 8];
const sorted = mininum(items);

console.log("sorted:", sorted);
console.log("items finish:", items);
