Array.prototype.some2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      if (callback(this[index], index, this)) {
        return true;
      }
    }
  }
  return false;
};

var courses = [
  {
    name: "HTML",
    coin: 600,
    isFinish: false,
  },
  {
    name: "CSS",
    coin: 500,
    isFinish: false,
  },
  {
    name: "JavaScript",
    coin: 700,
    isFinish: true,
  },
];

var result = courses.some2(function (course, index, array) {
  return course.isFinish;
});

console.log(result);
