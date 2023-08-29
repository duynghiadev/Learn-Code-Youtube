// filter

Array.prototype.filter2 = function (callback) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        output.push(this[index]);
      }
    }
  }
  return output;
};

var courses = [
  {
    name: "HTML",
    coin: 600,
  },
  {
    name: "CSS",
    coin: 500,
  },
  {
    name: "JavaScript",
    coin: 700,
  },
];

var filterCourses = courses.filter2(function (course, index, array) {
  return courses.coin > 500;
});

console.log(filterCourses);
