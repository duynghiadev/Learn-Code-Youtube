Array.prototype.some2 = function (callback) {
  for (var index in this) { // 
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
    coin: 100,
    isFinish: false,
  },
  {
    name: "CSS",
    coin: 900,
    isFinish: true,
  },
  {
    name: "Javascript",
    coin: 1000,
    isFinish: true,
  },
  {
    name: "Nodejs",
    coin: 2000,
    isFinish: false,
  },
];

var result = courses.some2(function (course, index, array) {
  return course.isFinish;
});

console.log(result);
