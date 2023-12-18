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
