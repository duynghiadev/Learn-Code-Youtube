var items = ["Tom", "Bill", "Kim"];

// Sử dụng reduce để in ra kết quả
var result1 = items.reduce(function (accumulator, currentItem) {
  console.log("accumulator, currentItem", accumulator, currentItem);
  return accumulator + "<" + currentItem + ">";
}, "");

console.log("result1", result1); // '<Tom><Bill><Kim>'

// Sử dụng map và join để giải quyết
var result2 = items
  .map(function (currentItem) {
    console.log("currentItem", currentItem);
    return "<" + currentItem + ">";
  })
  .join("");

console.log("result2", result2); // '<Tom><Bill><Kim>'

// Tạo thẻ và thêm vào phần tử HTML
var div = document.getElementById("result");
var p1 = document.createElement("p");
var text1 = document.createTextNode("Result using reduce: " + result1);

p1.appendChild(text1);
div.appendChild(p1);

var p2 = document.createElement("p");
var text2 = document.createTextNode("Result using map and join: " + result2);

p2.appendChild(text2);
div.appendChild(p2);
