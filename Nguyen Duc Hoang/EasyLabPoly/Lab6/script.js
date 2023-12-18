var rotator = document.getElementById('rotator')
console.log('src', rotator.src)

let out = new Image()
out.src = 'images/anh1.jpg'

let over = new Image()
over.src = 'images/anh2.jpg'

function fover() {
  let anh = document.getElementById('anh')
  anh.src = over.src
}

function fout() {
  let anh = document.getElementById('anh')
  anh.src = out.src
}

let images = []
for (let i = 0; i < images.length; i++) {
  images[i] = new Image()
  images[i].src = 'images/' + i + '.jpg'
}

let index = 0
function first() {
  index = 0
  let anh_1 = document.getElementById('anh')
  anh_1.src = images[index].src
}

function last() {
  index = images.length - 1
  let anh_1 = document.getElementById('anh')
  anh_1.src = images[index].src
}

function next() {
  index++
  if (index >= images.length) {
    index = 0
  }
  let anh_1 = document.getElementById('anh')
  anh_1.src = images[index].src
}

function prev() {
  index--
  if (index < 0) {
    index = images.length - 1
  }
  let anh_1 = document.getElementById('anh')
  anh_1.src = images[index].src
}
