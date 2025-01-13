Array.prototype.map2 = function (callback) {
  var arrayLength = this.length;
  for (var i = 0; i < arrayLength; ++i) {
    var result = callback(this[i], i);
    console.log("result: ", result);
  }
};

var courses = [
  "javascript",
  "php",
  "angular",
  "ruby",
  "python",
  "react",
  "golang",
];

var htmls = courses.map2(function (course) {
  return `<h2>${course}</h2>`;
});
