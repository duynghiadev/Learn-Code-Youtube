Array.property.every2 = function (callback) {
  var output = true;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var output = callback(this[index], index, this);
      if (!result) {
        output = false;
        break;
      }
    }
  }
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

var result = courses.every2(function (course, index, array) {
  return course.isFinish;
});

console.log(result);
