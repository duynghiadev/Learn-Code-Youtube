// DOM style

var boxElement = document.querySelector(".box");

Object.assign(boxElement.style, {
  width: "200px",
  height: "100px",
  background: "green",
});

console.log(boxElement.style.width);
