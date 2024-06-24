// Ví dụ 1:
// this.firstName = "Minh";
// this.lastName = "Thu";

// const teacher = {
//   firstName: "Minh",
//   lastName: "Thảo",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const student = {
//   firstName: "Duy",
//   lastName: "Nghĩa",
// };

// // Case 1:
// console.log(teacher.getFullName()); // Minh Thảo

// // Case 2:
// // const getTeacherName = teacher.getFullName.bind(teacher); // Minh Thu
// const getTeacherName = teacher.getFullName.bind(student); // Duy Nghĩa

// console.log(getTeacherName()); // Minh thu

// Ví dụ 2:
// const teacher = {
//   firstName: "Minh",
//   lastName: "Thu",
//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };
// const button = document.querySelector("button");
// button.onclick = teacher.getFullName.bind(teacher);

// Ví dụ 3:
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// console.log(document.querySelector("#heading").innerHTML);

// // có thể thay document.querySelector bằng kí tự $ hoặc $$
// console.log($("#heading").innerHTML);

// Ví dụ 4:
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
  const cars = ["BMW"];
  const root = $("#root");
  const input = $("#input");
  const submit = $("#submit");

  return {
    add(car) {
      cars.push(car);
    },
    delete(index) {
      cars.splice(index, 1);
    },
    render() {
      const html = cars
        .map(
          (car, index) => `
        <li>
          ${car}
          <span class="delete" data-index="${index}">&times</span>
        </li>
      `
        )
        .join("");
      root.innerHTML = html;
    },
    handleDelete(e) {
      const deleteBtn = e.target.closest(".delete");
      if (deleteBtn) {
        const index = deleteBtn.dataset.index;
        console.log(this);
        this.delete(index);
        this.render();
      }
    },
    init() {
      // Handle DOM events
      submit.onclick = () => {
        const car = input.value;
        this.add(car);
        this.render();

        input.value = null;
        input.focus();
      };
      root.onclick = this.handleDelete.bind(this);
      this.render();
    },
  };
})();

app.init();

// Delegate event
