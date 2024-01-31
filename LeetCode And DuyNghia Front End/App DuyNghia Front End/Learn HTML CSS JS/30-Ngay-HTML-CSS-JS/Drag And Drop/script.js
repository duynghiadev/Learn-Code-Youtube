var targetList = document.querySelectorAll(".target");
var boxes = document.querySelectorAll(".box");

var currentTarget = null;

targetList.forEach((target) => {
  target.addEventListener("dragstart", function (e) {
    this.classList.add("dragging");
    currentTarget = this;
  });
  target.addEventListener("dragend", function (e) {
    this.classList.remove("dragging");
  });
});

boxes.forEach((box) => {
  box.addEventListener("dragover", function (e) {
    // thêm preventDefault vì theo mặc định thả vào bên trong 1 phần tử sẽ bị vô hiệu hóa => xem con trỏ chuột khi over để rõ hơn
    e.preventDefault();
  });
  box.addEventListener("drop", function (e) {
    if (!box.querySelector(".target")) {
      this.appendChild(currentTarget);
    }
  });
});
