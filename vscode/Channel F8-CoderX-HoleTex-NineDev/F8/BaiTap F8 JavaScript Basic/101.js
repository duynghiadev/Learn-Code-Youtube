function run(object) {
  var result = [];
  if (object !== undefined && object !== null) {
    for (var key in object) {
      var data = `Thuộc tính ${key} có giá trị ${object[key]}`;
      result.push(data);
    }
  }
  return result;
}

// Expected results:
console.log(run({ name: "Nguyen Van A", age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]
