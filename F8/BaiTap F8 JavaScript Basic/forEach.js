// for Each
Array.prototype.forEach2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
};

var courses = new Array(100);

courses.push("HTML", "CSS", "JS");

courses.forEach(function (course, index, array) {
  console.log(course, index, array);
});
