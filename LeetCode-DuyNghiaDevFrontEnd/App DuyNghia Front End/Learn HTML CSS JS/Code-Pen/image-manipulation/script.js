// 1. Add Canvas
var canvas = document.createElement('canvas');
canvas.width = 600;
canvas.height = 600;
document.body.appendChild(canvas);

// 2. Create an upload button
var uploadButton = document.createElement('button');
uploadButton.innerHTML = 'Upload Image';

// 3. Add the button
document.body.appendChild(uploadButton);

// 4. File select
uploadButton.addEventListener('click', function() {
  var fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.click();
  fileInput.addEventListener('change', function() {
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      var image = new Image();
      image.src = e.target.result;
      image.onload = function() {
        canvas.getContext('2d').drawImage(image, 0, 0);
      };
    };
    reader.readAsDataURL(file);
  });
});

// 5. Convert image to mosaic button
var mosaicButton = document.createElement('button');
mosaicButton.innerHTML = 'Convert to Mosaic';
document.body.appendChild(mosaicButton);

// 6. Convert image to black and white
var bwButton = document.createElement('button');
bwButton.innerHTML = 'Convert to Black and White';
document.body.appendChild(bwButton);



// 7. Convert image to 8bit video game style
var eightBitButton = document.createElement('button');
eightBitButton.innerHTML = 'Convert to 8bit';
document.body.appendChild(eightBitButton);

// 8. Download button
var downloadButton = document.createElement('button');
downloadButton.innerHTML = 'Download';
document.body.appendChild(downloadButton);

// 5. Convert image to mosaic button
mosaicButton.addEventListener('click', function() {
  var imageData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;
  var pixelSize = 32;
  var pixelWidth = canvas.width / pixelSize;
  var pixelHeight = canvas.height / pixelSize;
  var pixelData = [];
  for (var i = 0; i < pixelWidth; i++) {
    pixelData[i] = [];
    for (var j = 0; j < pixelHeight; j++) {
      pixelData[i][j] = {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      };
    }
  }
  for (var i = 0; i < data.length; i += 4) {
    var x = Math.floor((i / 4) % canvas.width / pixelSize);
    var y = Math.floor((i / 4) / canvas.width / pixelSize);
    pixelData[x][y].r += data[i];
    pixelData[x][y].g += data[i + 1];
    pixelData[x][y].b += data[i + 2];
    pixelData[x][y].a += data[i + 3];
  }
  for (var i = 0; i < pixelData.length; i++) {
    for (var j = 0; j < pixelData[i].length; j++) {
      var pixel = pixelData[i][j];
      pixel.r = Math.floor(pixel.r / (pixelSize * pixelSize));
      pixel.g = Math.floor(pixel.g / (pixelSize * pixelSize));
      pixel.b = Math.floor(pixel.b / (pixelSize * pixelSize));
      pixel.a = Math.floor(pixel.a / (pixelSize * pixelSize));
    }
  }
  for (var i = 0; i < data.length; i += 4) {
    var x = Math.floor((i / 4) % canvas.width / pixelSize);
    var y = Math.floor((i / 4) / canvas.width / pixelSize);
    var pixel = pixelData[x][y];
    data[i] = pixel.r;
    data[i + 1] = pixel.g;
    data[i + 2] = pixel.b;
    data[i + 3] = pixel.a;
  }
  canvas.getContext('2d').putImageData(imageData, 0, 0);
});

// 6. Convert image to black and white
bwButton.addEventListener('click', function() {
  var imageData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;
  for (var i = 0; i < data.length; i += 4) {
    var r = data[i];
    var g = data[i + 1];
    var b = data[i + 2];
    var a = data[i + 3];
    var average = (r + g + b) / 3;
    data[i] = average;
    data[i + 1] = average;
    data[i + 2] = average;
  }
  canvas.getContext('2d').putImageData(imageData, 0, 0);
});

// 7. Convert image to 8bit video game style
eightBitButton.addEventListener('click', function() {
  var imageData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;
  for (var i = 0; i < data.length; i += 4) {
    var r = data[i];
    var g = data[i + 1];
    var b = data[i + 2];
    var a = data[i + 3];
    var average = (r + g + b) / 3;
    if (average < 32) {
      data[i] = 0;
      data[i + 1] = 0;
      data[i + 2] = 0;
    } else if (average < 64) {
      data[i] = 32;
      data[i + 1] = 32;
      data[i + 2] = 32;
    } else if (average < 96) {
      data[i] = 64;
      data[i + 1] = 64;
      data[i + 2] = 64;
    } else if (average < 128) {
      data[i] = 96;
      data[i + 1] = 96;
      data[i + 2] = 96;
    } else if (average < 160) {
      data[i] = 128;
      data[i + 1] = 128;
      data[i + 2] = 128;
    } else if (average < 192) {
      data[i] = 160;
      data[i + 1] = 160;
     
      data[i + 2] = 160;
    } else if (average < 224) {
      data[i] = 192;
      data[i + 1] = 192;
      data[i + 2] = 192;
    } else {
      data[i] = 224;
      data[i + 1] = 224;
      data[i + 2] = 224;
    }
  }
  canvas.getContext('2d').putImageData(imageData, 0, 0);
});

// 8. Download button
downloadButton.addEventListener('click', function() {
  var link = document.createElement('a');
  link.href = canvas.toDataURL();
  link.download = 'image.png';
  link.click();
});