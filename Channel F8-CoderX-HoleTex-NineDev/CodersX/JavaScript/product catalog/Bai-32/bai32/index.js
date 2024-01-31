const readline = require("readline-sync");
const fs = require("fs");

const myData = {
  myStudent: [],
};

// Đọc dữ liệu từ file JSON nếu file đã tồn tại
if (fs.existsSync("./myData.JSON")) {
  const myString = fs.readFileSync("./myData.JSON", { encoding: "utf-8" });
  const data = JSON.parse(myString); // string -> object

  myData.myStudent = data.myStudent;
}

while (true) {
  console.log("1. Show Data");
  console.log("2. Add Data");
  console.log("3. Save and Quit");

  const luaChon = readline.question("Ban chon: ");

  if (luaChon === "1") {
    console.log(myData);
  } else if (luaChon === "2") {
    const classmate = {};

    classmate.name = readline.question("Ten? ");
    classmate.age = readline.question("Tuoi? ");
    classmate.gender = readline.question("Gioi tinh? ");
    myData.myStudent.push(classmate);
  } else if (luaChon === "3") {
    fs.writeFileSync("./myData.JSON", JSON.stringify(myData));

    console.log("Data saved. Exiting the application.");

    break;
  } else {
    console.log("Invalid choice. Please choose again.");
  }
}
