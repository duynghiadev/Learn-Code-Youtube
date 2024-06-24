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
    coin: 100,
  },
  {
    name: "CSS",
    coin: 900,
  },
  {
    name: "Javascript",
    coin: 1000,
  },
  {
    name: "Nodejs",
    coin: 2000,
  },
];

var filterCourses = courses.filter2(function (courses, index, array) {
  return courses.coin > 700;
});

console.log(filterCourses);
