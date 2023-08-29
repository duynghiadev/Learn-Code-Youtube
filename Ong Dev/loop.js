let numArr = [1, 2, 3, 4, 5];
// map * 3
numArr = numArr.map((value) => value * 3);
console.log(numArr);

// filter bỏ số chẳn
numArr = numArr.filter((value) => value % 2 !== 0);
console.log(numArr);

// reduce tính tổng
const sum = numArr.reduce((sum, value) => (sum += value));
console.log(sum);

// trường hợp khác
const myObject = { ten: "Nghia", age: 20 };
const objectMap = new Map(Object.entries(myObject));
for (const item of objectMap.entries()) {
  console.log(item);
}
