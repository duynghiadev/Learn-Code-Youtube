// Phân biệt addEventListener() và click()

const button = document.querySelector('button')

button.addEventListener('click', function () {
  Promise.resolve().then(() => console.log('microtask 1'))
  console.log('Sync code JS stack 1')
})

button.addEventListener('click', function () {
  Promise.resolve().then(() => console.log('microtask 2'))
  console.log('Sync code JS stack 2')
})

// button.click() // have this line code when run code it's will console data immediately
