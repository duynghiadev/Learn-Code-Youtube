var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];

function render(courses) {
  let ul = document.querySelector("ul");

  let newCourses = courses.map((course, index) => {
    return `<li> ${course} </li>`;
  });

  ul.innerHTML = newCourses.join("");
}

render(courses);
