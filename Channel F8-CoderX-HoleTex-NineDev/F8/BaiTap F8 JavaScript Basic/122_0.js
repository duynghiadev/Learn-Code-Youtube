Array.prototype.forEach2 = function (callback) {
  var arrayLength = this.length;
  for (var i = 0; i < arrayLength; i++) {
    callback(this[i], i);
  }
};

var myArray = [
  "Ruby",
  "Dart",
  "Javascript",
  "Python",
  "C++",
  "Golang",
  "TypeScript",
];

myArray.forEach2(function (array, index) {
  console.log(index, array);
});
