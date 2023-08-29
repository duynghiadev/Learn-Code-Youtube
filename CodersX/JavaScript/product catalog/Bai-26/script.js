// Constructor function for Student objects
function Student(name, email) {
  this.name = name;
  this.email = email;
}

// Add a method to the prototype of Student objects
Student.prototype.displayInfo = function () {
  var container = document.createElement("div");
  container.className = "container";

  var nameElement = document.createElement("p");
  nameElement.className = "name";
  nameElement.textContent = "Name: " + this.name;

  var emailElement = document.createElement("p");
  emailElement.className = "email";
  emailElement.textContent = "Email: " + this.email;

  container.appendChild(nameElement);
  container.appendChild(emailElement);

  return container;
};

// Create student objects
var studentList = [];

// Display student information on the page
function displayStudentInfo() {
  var studentInfoElement = document.getElementById("studentInfo");
  studentInfoElement.innerHTML = "";

  studentList.forEach(function (student) {
    var studentContainer = student.displayInfo();
    studentInfoElement.appendChild(studentContainer);
  });
}

// Function to validate email format
function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add a new student to the list
function addStudent(event) {
  event.preventDefault();

  var nameInput = document.getElementById("nameInput");
  var emailInput = document.getElementById("emailInput");
  var errorText = document.getElementById("errorText");

  var name = nameInput.value.trim();
  var email = emailInput.value.trim();

  if (name === "" || email === "") {
    errorText.textContent = "Please enter both name and email";
    return;
  }

  // Validate email format
  if (!validateEmail(email)) {
    errorText.textContent = "Please enter a valid email address";
    emailInput.classList.add("error-input");
    return;
  }

  // Clear error text and input style if input is valid
  errorText.textContent = "";
  emailInput.classList.remove("error-input");

  var student = new Student(name, email);
  studentList.push(student);

  displayStudentInfo();

  nameInput.value = "";
  emailInput.value = "";
}

// Event listener for Add Student button
var addStudentBtn = document.getElementById("addStudentBtn");
addStudentBtn.addEventListener("click", addStudent);

// Event listener for Enter key press in email input
var emailInput = document.getElementById("emailInput");
emailInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addStudent(event);
  }
});

// Event listener for Add Student button
var addStudentBtn = document.getElementById("addStudentBtn");
addStudentBtn.addEventListener("click", addStudent);

// Initial display of student information
displayStudentInfo();
