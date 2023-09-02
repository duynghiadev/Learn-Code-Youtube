// 1. Create paint canvas
var canvas = document.createElement('canvas');
canvas.width = 400;
canvas.height = 400;
canvas.style.border = '1px solid black';
canvas.style.backgroundColor = 'black';

// 2. Add paint canvas to document
document.body.appendChild(canvas);

// 3. Create paint box
var paintBox = document.createElement('div');
paintBox.style.width = '100%';
paintBox.style.height = '12px';
paintBox.style.display = 'flex';
paintBox.style.justifyContent = 'center';
paintBox.style.alignItems = 'center';

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white', 'gray', 'brown', 'black', 'cyan'];

for (var i = 0; i < colors.length; i++) {
  var color = document.createElement('div');
  color.style.width = '12px';
  color.style.height = '12px';
  color.style.backgroundColor = colors[i];
  color.style.margin = '0 2px';
  color.style.border = '1px solid black';
  color.style.cursor = 'pointer';
  color.addEventListener('click', function(event) {
    selectedColor.style.backgroundColor = event.target.style.backgroundColor;
  });
  paintBox.appendChild(color);
}

// 4. Add paint box
document.body.appendChild(paintBox);

// 5. Select paint
var selectedColor = document.createElement('div');
selectedColor.style.width = '20px';
selectedColor.style.height = '20px';
selectedColor.style.borderRadius = '50%';
selectedColor.style.border = '1px solid black';
selectedColor.style.margin = '0 2px';
selectedColor.style.backgroundColor = 'black';
paintBox.appendChild(selectedColor);

// 6. Allow paint
var paint = false;
canvas.addEventListener('mousedown', function(event) {
  paint = true;
});
canvas.addEventListener('mouseup', function(event) {
  paint = false;
});
canvas.addEventListener('mousemove', function(event) {
  if (paint) {
    var x = event.offsetX;
    var y = event.offsetY;
    var context = canvas.getContext('2d');
    context.fillStyle = selectedColor.style.backgroundColor;
    context.fillRect(x, y, 10, 10);
  }
});

// 7. Clear button
var clearButton = document.createElement('button');
clearButton.innerText = 'Clear';
clearButton.addEventListener('click', function(event) {
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
});
document.body.appendChild(clearButton);

// 8. Download button
var downloadButton = document.createElement('button');
downloadButton.innerText = 'Download';
downloadButton.addEventListener('click', function(event) {
  var link = document.createElement('a');
  link.href = canvas.toDataURL();
  link.download = 'paint.png';
  link.click();
});
document.body.appendChild(downloadButton);