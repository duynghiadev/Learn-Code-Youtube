// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
//   return flatOutput.concat(depthItem);
// }, []);
// console.log(flatArray);

// Bài 2: Lấy ra các khoá học đưa vào 1 mảng mới
var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: "1",
        title: "HTML",
      },
      {
        id: "2",
        title: "CSS",
      },
    ],
  },

  {
    topic: "Back-end",
    courses: [
      {
        id: "3",
        title: "Nodejs",
      },
      {
        id: "4",
        title: "Express",
      },
    ],
  },
];

var newCourses = topics.reduce(function (courses, topic) {
  return courses.concat(topic.courses);
}, []);

console.log(newCourses);

var html = newCourses.map(function (course) {
  return ` <div>
    <h2>${course.title}</h2>
    <p>ID: ${course.id}</p>
  </div>`;
});

console.log(html.join(""));
