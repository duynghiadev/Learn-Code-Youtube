// Tạo đối tượng Cat
var cat = {
  name: "Tom",
  stomach: [],
  eat: function (mouse) {
    this.stomach.push(mouse);
    return this;
  },
};

// Constructor hàm Mouse
function Mouse(name) {
  this.name = name;
}

// Hàm xử lý khi click nút "Add Mouse"
function addMouse() {
  var mouseNameInput = document.getElementById("mouseName");
  var mouseName = mouseNameInput.value.trim(); // trim() loại bỏ khoảng trắng không cần thiết ở đầu và cuối chuỗi

  // Kiểm tra xem ô input có được nhập liệu hay không
  if (mouseName === "") {
    var errorText = document.getElementById("errorText");
    errorText.textContent = "Please enter a mouse name";
    return;
  }

  var mouse = new Mouse(mouseName);
  cat.eat(mouse);

  updateCatInfo();
  mouseNameInput.value = "";
  var errorText = document.getElementById("errorText");
  errorText.textContent = "";
}

var mouseNameInput = document.getElementById("mouseName");
mouseNameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addMouse();
  }
});

// Hàm xử lý khi click nút "Display Stomach"
function displayStomach() {
  var stomachListElement = document.getElementById("stomachList");
  stomachListElement.innerHTML = "";

  cat.stomach.forEach(function (mouse) {
    var li = document.createElement("li");
    li.textContent = mouse.name;
    stomachListElement.appendChild(li);
  });
}

// Cập nhật thông tin Cat lên giao diện
function updateCatInfo() {
  var catNameElement = document.getElementById("catName");
  var catStomachElement = document.getElementById("catStomach");

  catNameElement.textContent = cat.name;
  catStomachElement.textContent = JSON.stringify(cat.stomach);
}

// Gọi hàm updateCatInfo lần đầu để hiển thị thông tin ban đầu của Cat
updateCatInfo();
