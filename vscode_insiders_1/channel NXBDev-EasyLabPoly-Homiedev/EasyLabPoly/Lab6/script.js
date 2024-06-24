let rotator = document.getElementById('rotator')
console.log('src', rotator.src)

let out = new Image()
out.src = 'images/anh1.jpg'

let over = new Image()
over.src = 'images/anh2.jpg'

function fover() {
  rotator.src = over.src
}

function fout() {
  rotator.src = out.src
}

let images = []
for (let i = 1; i < 5; i++) {
  // Adjust the loop limit based on your actual number of images
  images[i] = new Image()
  images[i].src = 'images/' + 'anh' + i + '.jpg'
}

let index = 0

function first() {
  index = 0
  rotator.src = images[index].src
}

function last() {
  index = images.length - 1
  rotator.src = images[index].src
}

function next() {
  index++
  if (index >= images.length) {
    index = 0
  }
  rotator.src = images[index].src
}

function prev() {
  index--
  if (index < 0) {
    index = images.length - 1
  }
  rotator.src = images[index].src
}
