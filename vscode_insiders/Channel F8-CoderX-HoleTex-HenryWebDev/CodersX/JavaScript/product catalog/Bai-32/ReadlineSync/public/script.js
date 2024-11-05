let isInputVisible = false; // Biến kiểm tra xem ô input có được hiển thị hay không

function toggleInput() {
  const inputContainer = document.getElementById("inputContainer");

  if (isInputVisible) {
    inputContainer.style.display = "none"; // Ẩn ô input
    isInputVisible = false;
  } else {
    inputContainer.style.display = "block"; // Hiển thị ô input
    isInputVisible = true;
  }
}

function showData() {
  fetch("/data")
    .then((response) => response.json())
    .then((data) => {
      const showDataItems = document.getElementById("showDataItems");
      showDataItems.innerHTML = "";

      if (data.myStudent.length === 0) {
        const noDataInfo = document.createElement("tr");
        noDataInfo.innerHTML = '<td colspan="4">No data available</td>';
        showDataItems.appendChild(noDataInfo);
      } else {
        data.myStudent.forEach((student) => {
          const row = document.createElement("tr");
          const nameCell = document.createElement("td");
          const ageCell = document.createElement("td");
          const genderCell = document.createElement("td");
          const actionCell = document.createElement("td");

          nameCell.textContent = student.name;
          ageCell.textContent = student.age;
          genderCell.textContent = student.gender;

          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.addEventListener("click", () => {
            deleteData(data.myStudent.indexOf(student));
          });

          actionCell.appendChild(deleteButton);

          row.appendChild(nameCell);
          row.appendChild(ageCell);
          row.appendChild(genderCell);
          row.appendChild(actionCell);

          showDataItems.appendChild(row);
        });
      }
    })
    .catch((error) => console.log("Error:", error));
}

function addData() {
  const nameInput = document.getElementById("nameInput");
  const ageInput = document.getElementById("ageInput");
  const genderInput = document.getElementById("genderInput");
  const errorElement = document.getElementById("error");

  const name = nameInput.value;
  const age = ageInput.value;
  const gender = genderInput.value;

  if (!isValidName(name)) {
    errorElement.textContent =
      "Please enter a valid name (letters and numbers only)";
    errorElement.style.display = "block";
    return;
  }

  if (!isValidAge(age)) {
    errorElement.textContent = "Please enter a valid age (numbers only)";
    errorElement.style.display = "block";
    return;
  }

  errorElement.style.display = "none";

  fetch("/data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, age, gender }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data added:", data);
      nameInput.value = "";
      ageInput.value = "";
      genderInput.value = "";
    })
    .catch((error) => console.log("Error:", error));
}

function deleteData(index) {
  fetch(`/data/${index}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data deleted:", data);
    })
    .catch((error) => console.log("Error:", error));
}

function saveData() {
  fetch("/save", { method: "POST" })
    .then((response) => {
      console.log("Data saved. Exiting the application.");
      window.close();
    })
    .catch((error) => console.log("Error:", error));
}

function isValidName(name) {
  const regex = /^[a-zA-Z0-9\s]*$/;
  return regex.test(name);
}

function isValidAge(age) {
  const regex = /^[0-9]*$/;
  return regex.test(age);
}

function pollData() {
  setInterval(() => {
    showData();
  }, 3000); // Cập nhật dữ liệu mỗi 3 giây (3000ms)
}

showData();
pollData();
