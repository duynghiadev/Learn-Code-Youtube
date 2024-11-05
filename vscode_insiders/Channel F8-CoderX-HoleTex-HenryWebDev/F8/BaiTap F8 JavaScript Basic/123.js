Array.prototype.myMap = function (callback) {
  var Output = [],
    Arraylength = this.length;
  for (var i = 0; i < Arraylength; ++i) {
    var results = callback(this[i], i);
    Output.push(results);
  }
  return Output;
};

// Expected results
const numbers = [1, 2, 3];

console.log(
  numbers.myMap(function (number) {
    return number * 2;
  })
); // Output: [2, 4, 6]

console.log(
  numbers.myMap(function (number, index) {
    return number * index;
  })
); // Output: [0, 2, 6]
