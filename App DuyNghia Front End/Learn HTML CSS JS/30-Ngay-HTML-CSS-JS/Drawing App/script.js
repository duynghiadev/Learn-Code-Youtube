var color = document.querySelector("#color");
var eraser = document.querySelector("#eraser");
var decrease = document.querySelector("#decrease");
var increment = document.querySelector("#increment");
var sizeEl = document.querySelector("#size");
var save = document.querySelector("#save");
var clear = document.querySelector("#clear");
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// initial
var pos1 = {
  x: 0,
  y: 0,
};

var pos2 = {
  x: 0,
  y: 0,
};

var isDrawing = false;
var colorPaint = "#000000";
var size = 10;
sizeEl.innerText = size;

document.addEventListener("mousedown", function (e) {
  pos1 = {
    x: e.offsetX,
    y: e.offsetY,
  };
  isDrawing = true;
});

document.addEventListener("mousemove", function (e) {
  if (isDrawing) {
    pos2 = {
      x: e.offsetX,
      y: e.offsetY,
    };

    // fill net ve
    ctx.beginPath();
    ctx.arc(pos1.x, pos1.y, size, 0, 2 * Math.PI);
    ctx.fillStyle = colorPaint;
    ctx.fill();

    // ve outline
    ctx.beginPath();
    ctx.moveTo(pos1.x, pos1.y);
    ctx.lineTo(pos2.x, pos2.y);
    ctx.strokeStyle = colorPaint;
    ctx.lineWidth = size * 2;
    ctx.stroke();

    pos1.x = pos2.x;
    pos1.y = pos2.y;
  }
});

document.addEventListener("mouseup", function (e) {
  isDrawing = false;
});

color.addEventListener("change", function (e) {
  colorPaint = e.target.value;
});

eraser.addEventListener("click", function () {
  colorPaint = "#ffffff";
});

decrease.addEventListener("click", function () {
  size -= 5;
  size = size > 5 ? size : 5;
  sizeEl.innerText = size;
});

increase.addEventListener("click", function () {
  size += 5;
  size = size < 30 ? size : 30;
  sizeEl.innerText = size;
});

clear.addEventListener("click", function () {
  var canvasStats = canvas.getClientRects()[0];
  ctx.clearRect(0, 0, canvasStats.width, canvasStats.height);
});

save.addEventListener("click", function () {
  var output = canvas.toDataURL("image/png");
  save.setAttribute("href", output);
});
